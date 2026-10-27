// Gera as páginas de serviço (pasta /<slug>/index.html) e o sitemap.xml a partir
// de scripts/servicos.mjs. Uso: node scripts/build-pages.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { DEPOIMENTOS, PROJETOS, SERVICOS } from "./servicos.mjs";

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
      provider: { "@type": "ProfessionalService", name: "Reload Estúdio", url: `${SITE}/`, telephone: "+55-61-98358-6190" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
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

function pagina(s) {
  const url = `${SITE}/${s.slug}/`;
  const outros = SERVICOS.filter((o) => o.slug !== s.slug);
  const dep = s.depoimento && DEPOIMENTOS[s.depoimento];
  const og = `${SITE}/assets/og.png`;

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<!-- Gerado por scripts/build-pages.mjs a partir de scripts/servicos.mjs. Edite lá, não aqui. -->
<title>${esc(s.title)}</title>
<meta name="description" content="${esc(s.description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#0c0c0c">
<link rel="icon" href="/assets/r-symbol.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/logo.png">

<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Reload Estúdio">
<meta property="og:title" content="${esc(s.title)}">
<meta property="og:description" content="${esc(s.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Reload Estúdio: identidade visual, site e redes sociais no mesmo padrão profissional">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(s.title)}">
<meta name="twitter:description" content="${esc(s.description)}">
<meta name="twitter:image" content="${og}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap">
<link rel="stylesheet" href="/css/style.css">
<script>document.documentElement.classList.add("js");</script>
${schemas(s).map((o) => `<script type="application/ld+json">\n${json(o)}\n</script>`).join("\n")}
</head>
<body>
<a class="ribbon" href="/#orcamento">Orçamento personalizado em até 24h <span aria-hidden="true">→</span></a>

<header class="nav" id="nav">
  <a class="nav__logo" href="/" aria-label="Reload Estúdio, início"><img src="/assets/r-symbol.svg" alt=""></a>
  <nav class="nav__links" aria-label="Principal">
    <a href="/#projetos">PROJETOS</a>
    <a href="/#duvidas">DÚVIDAS</a>
  </nav>
  <a class="btn nav__cta" href="/#orcamento">CONTATO</a>
</header>

<main>
  <section class="hero hero--page" aria-labelledby="titulo">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="hero__content">
      <nav class="crumbs" aria-label="Você está em"><a href="/">Início</a><span aria-hidden="true">/</span><span aria-current="page">${esc(s.rotulo)}</span></nav>
      <h1 class="hero__title" id="titulo">${marcado(s.h1, s.destaque)}</h1>
      <p class="hero__sub">${esc(s.subtitulo)}</p>
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
${s.faq.map(({ q, a }) => `          <details class="faq__item">
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

${FOOTER}

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="/js/main.js"></script>
</body>
</html>
`;
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
        </ul>
      </nav>
      <div class="footer__col footer__col--contact">
        <h3>CONTATO</h3>
        <ul class="footer__contacts">
          <li><img src="/assets/ic-phone.svg" alt=""><div><small>Telefone</small>(61) 98358-6190</div></li>
          <li><img src="/assets/ic-instagram.svg" alt=""><div><small>Instagram</small>@reloadestudio</div></li>
          <li><img src="/assets/ic-clock.svg" alt=""><div><small>Horário de Atendimento</small>Seg - Sex: 9h às 18h</div></li>
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

for (const s of SERVICOS) {
  const file = join(ROOT, s.slug, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, pagina(s));
  console.log(`página: /${s.slug}/`);
}

const urls = [
  { loc: `${SITE}/`, priority: "1.0" },
  ...SERVICOS.map((s) => ({ loc: `${SITE}/${s.slug}/`, priority: "0.9" })),
];
writeFileSync(
  join(ROOT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${HOJE}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n")}
</urlset>
`,
);
console.log(`sitemap.xml: ${urls.length} endereços`);

// O rodapé da home recebe a mesma lista de serviços (entre os marcadores).
import { readFileSync } from "node:fs";
const homePath = join(ROOT, "index.html");
const home = readFileSync(homePath, "utf8");
const inicio = "<!--SERVICOS-->";
const fim = "<!--/SERVICOS-->";
if (home.includes(inicio) && home.includes(fim)) {
  const lista = SERVICOS.map((o) => `          <li><a href="${o.slug}/">${esc(o.rotulo)}</a></li>`).join("\n");
  const novo = home.replace(new RegExp(`${inicio}[\\s\\S]*?${fim}`), `${inicio}\n${lista}\n          ${fim}`);
  writeFileSync(homePath, novo);
  console.log("home: lista de serviços do rodapé atualizada");
}
