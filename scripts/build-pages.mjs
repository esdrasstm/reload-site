// Gera as páginas de serviço (/<slug>/), o blog (/blog/ e /blog/<slug>/), o feed RSS
// e o sitemap.xml a partir de scripts/servicos.mjs e scripts/blog.mjs.
// Uso: node scripts/build-pages.mjs
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { POSTS } from "./blog.mjs";
import { DEPOIMENTOS, FAQ_LOCAL, PROJETOS, SERVICOS } from "./servicos.mjs";

// Onde a Reload está e quem ela atende (vai para os dados estruturados).
const ENDERECO = { "@type": "PostalAddress", addressLocality: "Brasília", addressRegion: "DF", addressCountry: "BR" };
/** Perfil da Reload no Google (Perfil da Empresa / Maps). */
const PERFIL_GOOGLE = "https://maps.google.com/?cid=13622037606905737935";
const AREA = [{ "@type": "City", name: "Brasília" }, { "@type": "Country", name: "Brasil" }];
const faqDe = (s) => [...s.faq, FAQ_LOCAL];

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://reloadestudios.com.br";
const HOJE = new Date().toISOString().slice(0, 10);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const json = (o) => JSON.stringify(o, null, 2).replace(/</g, "\\u003c");

const MARK = '<svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 7 C 25 2, 55 2, 98 5"/></svg>';
const ARROW = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const PLUS = '<span class="faq__icon" aria-hidden="true"><svg class="is-add" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg><svg class="is-remove" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 12h14"/></svg></span>';

/** Título com o traço laranja embaixo do trecho em destaque. */
function marcado(texto, destaque) {
  const i = texto.indexOf(destaque);
  if (i < 0) return esc(texto);
  return `${esc(texto.slice(0, i))}<span class="mark mark--draw"><span class="mark__text">${esc(destaque)}</span>${MARK.replace("<path", '<path pathLength="1"')}</span>${esc(texto.slice(i + destaque.length))}`;
}

function schemas(s) {
  const url = `${SITE}/${s.slug}/`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: s.rotulo, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.servicoSchema,
      serviceType: s.servicoSchema,
      description: s.description,
      url,
      areaServed: AREA,
      provider: { "@type": "ProfessionalService", name: "Reload Estúdios", url: `${SITE}/`, telephone: "+55-61-98358-6190", address: ENDERECO, hasMap: PERFIL_GOOGLE, sameAs: ["https://instagram.com/reloadestudio", PERFIL_GOOGLE] },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqDe(s).map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];
}

function projetoCard(id) {
  const p = PROJETOS[id];
  return `      <article class="feature-card">
        <div class="feature-text">
          <span class="feature-chip"><span class="feature-chip__mark" aria-hidden="true"></span>${esc(p.chip)}</span>
          <div class="feature-copy">
            <h3>${esc(p.nome)}</h3>
            <p>${esc(p.texto)}</p>
            <a class="feature-btn" href="${p.link}" target="_blank" rel="noopener">${esc(p.botao)}${ARROW}</a>
          </div>
        </div>
        <div class="feature-visual"><img src="${p.img}" alt="${esc(p.alt)}" loading="lazy" width="${p.w}" height="${p.h}"></div>
      </article>`;
}

/** <head>, faixa de aviso e menu de todas as páginas geradas. */
function cabeca({ title, description, url, schemas, ogType = "website", image = `${SITE}/assets/og.png`, imageAlt, extra = "" }) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<!-- Gerado por scripts/build-pages.mjs. Edite o conteúdo em scripts/, não aqui. -->
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#0c0c0c">
<link rel="icon" href="/assets/r-symbol.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/logo.png">
<link rel="alternate" type="application/rss+xml" title="Blog da Reload Estúdios" href="${SITE}/blog/feed.xml">

<meta property="og:type" content="${ogType}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Reload Estúdios">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(imageAlt || "Reload Estúdios: identidade visual, site e redes sociais no mesmo padrão profissional")}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${image}">
${extra}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap">
<link rel="stylesheet" href="/css/style.css">
<!-- Himetrica: análise de acessos (roda só no navegador) -->
<script defer src="https://cdn.himetrica.com/tracker.js" data-api-key="hm_bbb5060a28cc9668491d62e41f0f409c7b41016b7d307d74"></script>
<script>document.documentElement.classList.add("js");</script>
${schemas.map((o) => `<script type="application/ld+json">\n${json(o)}\n</script>`).join("\n")}
</head>
<body>
<a class="ribbon" href="/#orcamento">Orçamento personalizado em até 24h <span aria-hidden="true">→</span></a>

<header class="nav" id="nav">
  <a class="nav__logo" href="/" aria-label="Reload Estúdios, início"><img src="/assets/r-symbol.svg" alt=""></a>
  <nav class="nav__links" aria-label="Principal">
    <a href="/#projetos">PROJETOS</a>
    <a href="/blog/">BLOG</a>
    <a href="/#duvidas">DÚVIDAS</a>
  </nav>
  <a class="btn nav__cta" href="/#orcamento">CONTATO</a>
</header>
`;
}

/** Rodapé e scripts de todas as páginas geradas. */
function fim() {
  return `${FOOTER}

<a class="whatsapp-float" href="https://wa.me/5561983586190?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Reload%20Est%C3%BAdios%20e%20quero%20um%20or%C3%A7amento." target="_blank" rel="noopener" aria-label="Fale com a Reload Estúdios no WhatsApp"><img src="/assets/s-whatsapp.svg" alt="" width="28" height="28"><span class="whatsapp-float__label">Fale no WhatsApp</span></a>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="/js/main.js"></script>
</body>
</html>
`;
}

function pagina(s) {
  const url = `${SITE}/${s.slug}/`;
  const outros = SERVICOS.filter((o) => o.slug !== s.slug);
  const dep = s.depoimento && DEPOIMENTOS[s.depoimento];

  return `${cabeca({ title: s.title, description: s.description, url, schemas: schemas(s) })}
<main>
  <section class="hero hero--page" aria-labelledby="titulo">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="hero__content">
      <nav class="crumbs" aria-label="Você está em"><a href="/">Início</a><span aria-hidden="true">/</span><span aria-current="page">${esc(s.rotulo)}</span></nav>
      <h1 class="hero__title" id="titulo">${marcado(s.h1, s.destaque)}</h1>
      <p class="hero__sub">${esc(s.subtitulo)}</p>
      <p class="hero__local">Em Brasília (DF) e para todo o Brasil</p>
      <div class="hero__actions">
        <a class="btn hero__cta" href="/#orcamento">Faça já seu orçamento</a>
        <a class="btn btn--light hero__cta" href="https://wa.me/5561983586190" target="_blank" rel="noopener">Chamar no WhatsApp</a>
      </div>
    </div>
  </section>

  <section class="benefits" aria-labelledby="beneficios-titulo">
    <div class="wrap">
      <h2 class="section-title" id="beneficios-titulo">O que você recebe</h2>
      <ul class="benefits__grid">
${s.beneficios.map((b) => `        <li class="benefit"><h3>${esc(b.titulo)}</h3><p>${esc(b.texto)}</p></li>`).join("\n")}
      </ul>
    </div>
  </section>
${s.projetos.length ? `
  <section aria-labelledby="projetos-titulo">
    <div class="work-intro">
      <h2 id="projetos-titulo">Projetos de <span class="work-intro__mark">${esc(s.rotulo.toLowerCase())}${MARK}</span></h2>
    </div>
    <div class="features">
      <div class="features__wrapper">
${s.projetos.map(projetoCard).join("\n")}
      </div>
    </div>
  </section>
` : ""}${dep ? `
  <section class="testimonial" aria-label="Depoimento de cliente">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="testimonial__content">
      <svg class="testimonial__mark" viewBox="0 0 48 44" fill="currentColor" aria-hidden="true"><path d="M0 44V26C0 11 7 2 20 0l2 6C14 8 10 14 10 22h10v22H0Zm26 0V26C26 11 33 2 46 0l2 6c-8 2-12 8-12 16h10v22H26Z"/></svg>
      <div class="testimonial__slides">
        <figure class="testimonial__slide is-active">
          <blockquote class="testimonial__quote">${esc(dep.texto)}</blockquote>
          <figcaption class="testimonial__author"><span><b>${esc(dep.nome)}</b><small>${esc(dep.detalhe)}</small></span></figcaption>
        </figure>
      </div>
    </div>
  </section>
` : ""}
  <section class="faq" id="duvidas" aria-labelledby="duvidas-titulo">
    <div class="wrap">
      <div class="faq__layout">
        <div class="faq__intro">
          <h2 id="duvidas-titulo">Dúvidas sobre <span class="mark"><span class="mark__text">${esc(s.rotulo.toLowerCase())}</span>${MARK}</span></h2>
          <a class="btn btn--light" href="/#orcamento">Fale com a gente</a>
        </div>
        <div class="faq__list">
${faqDe(s).map(({ q, a }) => `          <details class="faq__item">
            <summary><h3>${esc(q)}</h3>${PLUS}</summary>
            <div class="faq__answer"><p>${esc(a)}</p></div>
          </details>`).join("\n")}
        </div>
      </div>
    </div>
  </section>

  <section class="final final--short" aria-labelledby="cta-titulo">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="wrap final__inner">
      <div class="final__intro">
        <h2 id="cta-titulo">Pronto para <span class="mark"><span class="mark__text">elevar</span>${MARK}</span> sua marca?</h2>
        <p>Preencha o formulário e receba um orçamento personalizado em até 24h.</p>
        <a class="btn hero__cta" href="/#orcamento">Pedir orçamento</a>
      </div>
      <nav class="also" aria-labelledby="also-titulo">
        <h2 class="also__title" id="also-titulo">Também fazemos</h2>
        <ul>
${outros.map((o) => `          <li><a href="/${o.slug}/">${esc(o.rotulo)} <span aria-hidden="true">→</span></a></li>`).join("\n")}
        </ul>
      </nav>
    </div>
  </section>
</main>

${fim()}`;
}

// Rodapé igual ao da home (com caminhos a partir da raiz do site).
const FOOTER = `<footer>
  <div class="footer__main">
    <div class="footer__grid">
      <div class="footer__col">
        <img class="footer__logo" src="/assets/logo.svg" alt="Reload">
        <p class="footer__about">Somos uma agência criativa especializada em transformar ideias em experiências digitais memoráveis. Criamos soluções que conectam marcas aos seus públicos de forma autêntica e impactante.</p>
      </div>
      <nav class="footer__col footer__col--services" aria-label="Serviços">
        <h3>SERVIÇOS</h3>
        <ul class="footer__links">
${SERVICOS.map((o) => `          <li><a href="/${o.slug}/">${esc(o.rotulo)}</a></li>`).join("\n")}
          <li><a href="/blog/">Blog</a></li>
        </ul>
      </nav>
      <div class="footer__col footer__col--contact">
        <h3>CONTATO</h3>
        <ul class="footer__contacts">
          <li><img src="/assets/ic-phone.svg" alt=""><div><small>Telefone</small>(61) 98358-6190</div></li>
          <li><img src="/assets/ic-instagram.svg" alt=""><div><small>Instagram</small>@reloadestudio</div></li>
          <li><img src="/assets/ic-clock.svg" alt=""><div><small>Horário de Atendimento</small>Seg - Sex: 9h às 18h</div></li>
          <li><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ff2e00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg><div><small>Google</small><a class="footer__maps" href="${PERFIL_GOOGLE}" target="_blank" rel="noopener">Ver perfil e avaliações</a></div></li>
        </ul>
      </div>
      <div class="footer__col footer__col--social">
        <h3>REDES SOCIAIS</h3>
        <p class="footer__muted">Acompanhe nosso trabalho e fique por dentro das novidades</p>
        <div class="socials">
          <a href="https://wa.me/5561983586190" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="/assets/s-whatsapp.svg" alt=""></a>
          <a href="https://instagram.com/reloadestudio" target="_blank" rel="noopener" aria-label="Instagram"><img src="/assets/s-instagram.svg" alt=""></a>
          <a href="/#orcamento" aria-label="E-mail"><img src="/assets/s-mail.svg" alt=""></a>
          <a href="#" aria-label="Behance"><img src="/assets/s-behance.svg" alt=""></a>
          <a href="#" aria-label="Threads"><img src="/assets/s-threads.svg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__bar">
    <div class="footer__grid">
      <img class="footer__logo" src="/assets/logo.svg" alt="Reload">
      <p>© 2025 Reload Estúdios | Todos os direitos reservados. &nbsp;Política de Privacidade</p>
    </div>
  </div>
</footer>`;

/* ---------- Blog ---------- */

const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const dataBR = (iso) => {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
};
/** Minutos de leitura (cerca de 200 palavras por minuto). */
const leitura = (html) => Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200));

/** Título da aba e do Google: com a marca quando couber em 60 caracteres. */
const tituloSeo = (p) => {
  const t = p.tituloSeo || p.titulo;
  return `${t} | Reload Estúdios`.length <= 60 ? `${t} | Reload Estúdios` : t;
};

const PUBLICADOS = POSTS.filter((p) => p.publicado).sort((a, b) => b.data.localeCompare(a.data));
const urlPost = (p) => `${SITE}/blog/${p.slug}/`;
const ORGANIZACAO = { "@type": "Organization", name: "Reload Estúdios", url: `${SITE}/`, logo: { "@type": "ImageObject", url: `${SITE}/assets/logo.png`, width: 512, height: 512 } };

/** Caminho público da capa do artigo (ou nada, se o artigo não tiver capa). */
const capaUrl = (p) => (p.capa ? `/blog/${p.slug}/${p.capa.file}` : null);

function cardPost(p) {
  return `        <li class="post-card${p.capa ? " post-card--capa" : ""}">
          <a href="/blog/${p.slug}/">${p.capa ? `
            <img class="post-card__img" src="${capaUrl(p)}" alt="" loading="lazy" width="${p.capa.width}" height="${p.capa.height}">` : ""}
            <span class="post-card__meta"><span class="feature-chip"><span class="feature-chip__mark" aria-hidden="true"></span>${esc(p.categoria)}</span><span>${leitura(p.corpo)} min de leitura</span></span>
            <h3>${esc(p.titulo)}</h3>
            <p>${esc(p.descricao)}</p>
            <span class="post-card__more">Ler artigo${ARROW}</span>
          </a>
        </li>`;
}

function paginaBlog() {
  const url = `${SITE}/blog/`;
  const descricao = "Artigos sobre marketing digital, criação de sites, identidade visual e redes sociais, escritos pela equipe da Reload Estúdios.";
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog da Reload Estúdios",
      description: descricao,
      url,
      inLanguage: "pt-BR",
      publisher: ORGANIZACAO,
      blogPost: PUBLICADOS.map((p) => ({ "@type": "BlogPosting", headline: p.titulo, url: urlPost(p), datePublished: p.data })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: url },
      ],
    },
  ];
  return `${cabeca({ title: "Blog de marketing digital e design | Reload Estúdios", description: descricao, url, schemas })}
<main>
  <section class="hero hero--page" aria-labelledby="titulo">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="hero__content">
      <nav class="crumbs" aria-label="Você está em"><a href="/">Início</a><span aria-hidden="true">/</span><span aria-current="page">Blog</span></nav>
      <h1 class="hero__title" id="titulo">${marcado("Blog da Reload Estúdios", "Blog")}</h1>
      <p class="hero__sub">Marketing digital, sites, identidade visual e redes sociais, explicados sem complicação.</p>
    </div>
  </section>

  <section class="blog-list" aria-label="Artigos">
    <div class="wrap">
      <ul class="post-grid">
${PUBLICADOS.map(cardPost).join("\n")}
      </ul>
    </div>
  </section>
</main>

${fim()}`;
}

function paginaPost(p) {
  const url = urlPost(p);
  const servico = SERVICOS.find((s) => s.slug === p.servico);
  const outros = PUBLICADOS.filter((o) => o.slug !== p.slug).slice(0, 2);
  const atualizado = p.atualizado || p.data;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.titulo,
      description: p.descricao,
      url,
      mainEntityOfPage: url,
      image: p.capa ? `${SITE}${capaUrl(p)}` : `${SITE}/assets/og.png`,
      datePublished: p.data,
      dateModified: atualizado,
      inLanguage: "pt-BR",
      articleSection: p.categoria,
      author: ORGANIZACAO,
      publisher: ORGANIZACAO,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
        { "@type": "ListItem", position: 3, name: p.titulo, item: url },
      ],
    },
  ];
  const extra = `<meta property="article:published_time" content="${p.data}">
<meta property="article:modified_time" content="${atualizado}">
<meta property="article:section" content="${esc(p.categoria)}">`;

  const og = p.capa ? { image: `${SITE}${capaUrl(p)}`, imageAlt: p.capa.alt } : {};
  return `${cabeca({ title: tituloSeo(p), description: p.descricao, url, schemas, ogType: "article", extra, ...og })}
<main>
  <article class="post" aria-labelledby="titulo">
    <header class="post__head">
      <div class="grid-bg" aria-hidden="true"></div>
      <div class="post__head-inner">
        <nav class="crumbs" aria-label="Você está em"><a href="/">Início</a><span aria-hidden="true">/</span><a href="/blog/">Blog</a><span aria-hidden="true">/</span><span aria-current="page">${esc(p.categoria)}</span></nav>
        <h1 class="post__title" id="titulo">${esc(p.titulo)}</h1>
        <p class="post__lead">${esc(p.descricao)}</p>
        <p class="post__meta"><span class="feature-chip"><span class="feature-chip__mark" aria-hidden="true"></span>${esc(p.categoria)}</span><time datetime="${p.data}">${dataBR(p.data)}</time><span>${leitura(p.corpo)} min de leitura</span></p>
      </div>
    </header>
${p.capa ? `    <figure class="post__cover"><img src="${capaUrl(p)}" alt="${esc(p.capa.alt)}" width="${p.capa.width}" height="${p.capa.height}" fetchpriority="high"></figure>
` : ""}    <div class="prose">
${p.corpo.trim()}
    </div>
${servico ? `    <aside class="post__cta" aria-label="Serviço relacionado">
      <p class="post__cta-kicker">Serviço da Reload Estúdios</p>
      <h2>${esc(servico.h1)}</h2>
      <p>${esc(servico.subtitulo)}</p>
      <div class="hero__actions"><a class="btn hero__cta" href="/${servico.slug}/">Conhecer o serviço</a><a class="btn btn--light hero__cta" href="/#orcamento">Pedir orçamento</a></div>
    </aside>
` : ""}  </article>
${outros.length ? `
  <section class="blog-list blog-list--more" aria-labelledby="mais-titulo">
    <div class="wrap">
      <h2 class="section-title" id="mais-titulo">Leia também</h2>
      <ul class="post-grid">
${outros.map(cardPost).join("\n")}
      </ul>
    </div>
  </section>
` : ""}</main>

${fim()}`;
}

/** Feed RSS do blog (leitores de notícias e ferramentas de newsletter). */
function feed() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Blog da Reload Estúdios</title>
  <link>${SITE}/blog/</link>
  <description>Marketing digital, sites, identidade visual e redes sociais.</description>
  <language>pt-BR</language>
  <atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
${PUBLICADOS.map((p) => `  <item>
    <title>${esc(p.titulo)}</title>
    <link>${urlPost(p)}</link>
    <guid>${urlPost(p)}</guid>
    <pubDate>${new Date(`${p.data}T12:00:00-03:00`).toUTCString()}</pubDate>
    <category>${esc(p.categoria)}</category>
    <description>${esc(p.descricao)}</description>
  </item>`).join("\n")}
</channel>
</rss>
`;
}

/* ---------- Escrita dos arquivos ---------- */

const escreve = (caminho, conteudo) => {
  const file = join(ROOT, caminho);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, conteudo);
  console.log(`gerado: /${caminho.replace(/index\.html$/, "")}`);
};

for (const s of SERVICOS) escreve(`${s.slug}/index.html`, pagina(s));

// Artigos despublicados saem do site: apaga a pasta que tiver sobrado.
for (const p of POSTS.filter((p) => !p.publicado)) rmSync(join(ROOT, "blog", p.slug), { recursive: true, force: true });
escreve("blog/index.html", paginaBlog());
for (const p of PUBLICADOS) escreve(`blog/${p.slug}/index.html`, paginaPost(p));
escreve("blog/feed.xml", feed());

const urls = [
  { loc: `${SITE}/`, lastmod: HOJE, priority: "1.0" },
  ...SERVICOS.map((s) => ({ loc: `${SITE}/${s.slug}/`, lastmod: HOJE, priority: "0.9" })),
  { loc: `${SITE}/blog/`, lastmod: PUBLICADOS[0]?.data || HOJE, priority: "0.7" },
  ...PUBLICADOS.map((p) => ({ loc: urlPost(p), lastmod: p.atualizado || p.data, priority: "0.6" })),
];
writeFileSync(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n")}
</urlset>
`,
);
console.log(`sitemap.xml: ${urls.length} endereços`);

// O rodapé da home recebe a mesma lista de serviços (entre os marcadores).
const homePath = join(ROOT, "index.html");
const home = readFileSync(homePath, "utf8");
const MARCA_INICIO = "<!--SERVICOS-->";
const MARCA_FIM = "<!--/SERVICOS-->";
if (home.includes(MARCA_INICIO) && home.includes(MARCA_FIM)) {
  const lista = [
    ...SERVICOS.map((o) => `          <li><a href="${o.slug}/">${esc(o.rotulo)}</a></li>`),
    `          <li><a href="blog/">Blog</a></li>`,
  ].join("\n");
  const novo = home.replace(new RegExp(`${MARCA_INICIO}[\\s\\S]*?${MARCA_FIM}`), `${MARCA_INICIO}\n${lista}\n          ${MARCA_FIM}`);
  writeFileSync(homePath, novo);
  console.log("home: lista de serviços do rodapé atualizada");
}
