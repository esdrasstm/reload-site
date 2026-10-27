// Confere o SEO de todas as páginas: título (até 60), descrição (até 160), um H1,
// canonical, JSON-LD válido, FAQ visível igual ao do JSON-LD e links/imagens locais.
// Uso: node scripts/check-seo.mjs
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const IGNORA = new Set(["_src", "node_modules", ".git", ".claude", "assets", "css", "js", "scripts"]);

const paginas = [];
(function anda(dir) {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (IGNORA.has(nome)) continue;
    if (statSync(p).isDirectory()) anda(p);
    else if (nome === "index.html") paginas.push(p);
  }
})(ROOT);

let problemas = 0;
const erro = (msg) => {
  problemas++;
  return msg;
};

for (const arquivo of paginas.sort()) {
  const h = readFileSync(arquivo, "utf8");
  const base = dirname(arquivo);
  const rel = arquivo.slice(ROOT.length + 1).replace(/\\/g, "/");
  const avisos = [];

  const titulo = h.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const descricao = h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  if (titulo.length > 60) avisos.push(erro(`título com ${titulo.length} caracteres`));
  if (descricao.length > 160) avisos.push(erro(`descrição com ${descricao.length} caracteres`));
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) avisos.push(erro("precisa de exatamente um H1"));
  if (!/<link rel="canonical" href="https:\/\/reloadestudios\.com\.br\//.test(h)) avisos.push(erro("sem canonical"));

  const tipos = [];
  let faqLd = 0;
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const o = JSON.parse(m[1]);
      tipos.push(o["@type"]);
      if (o["@type"] === "FAQPage") faqLd = o.mainEntity.length;
    } catch {
      avisos.push(erro("JSON-LD inválido"));
    }
  }
  const faqVisivel = (h.match(/<details class="faq__item">/g) || []).length;
  if (faqVisivel !== faqLd) avisos.push(erro(`FAQ visível (${faqVisivel}) diferente do JSON-LD (${faqLd})`));

  for (const m of h.matchAll(/(?:href|src)="([^"#][^"]*)"/g)) {
    const url = m[1].split("#")[0];
    if (!url || /^(https?:|mailto:|tel:|data:)/.test(url)) continue;
    let alvo = url.startsWith("/") ? join(ROOT, url) : join(base, url);
    if (url.endsWith("/") || (existsSync(alvo) && statSync(alvo).isDirectory())) alvo = join(alvo, "index.html");
    if (!existsSync(alvo)) avisos.push(erro(`link quebrado: ${url}`));
  }

  console.log(`${rel.padEnd(52)} título ${String(titulo.length).padStart(2)} · descrição ${String(descricao.length).padStart(3)} · ${tipos.join(", ")}`);
  for (const a of avisos) console.log(`   ✗ ${a}`);
}

const sitemap = readFileSync(join(ROOT, "sitemap.xml"), "utf8");
const noSitemap = (sitemap.match(/<loc>/g) || []).length;
if (noSitemap !== paginas.length) console.log(`   ✗ ${erro(`sitemap tem ${noSitemap} endereços para ${paginas.length} páginas`)}`);

console.log(problemas ? `\n${problemas} problema(s)` : `\nTudo certo: ${paginas.length} páginas, sitemap com ${noSitemap} endereços.`);
process.exit(problemas ? 1 : 0);
