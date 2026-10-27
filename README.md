# Reload Estúdios

Site da Reload Estúdios: [reloadestudios.com.br](https://reloadestudios.com.br)

HTML, CSS e JavaScript puros, sem etapa de build no servidor. As animações usam o GSAP via CDN.

- `index.html`: a home
- `css/style.css`: estilos de todas as páginas
- `js/main.js`: menu, cards, depoimentos, brilho dos botões e formulário
- `assets/`: imagens, ícones, `logo.png` (logo para o Google) e `og.png` (prévia de compartilhamento)
- `<serviço>/index.html`, `blog/`: páginas de serviço e do blog, **geradas** (não editar à mão)

## Páginas de serviço, blog e sitemap

O conteúdo das páginas de serviço fica em `scripts/servicos.mjs` (título, descrição, H1, benefícios, projetos, depoimento e perguntas). Os artigos do blog ficam em `scripts/blog.mjs` (título, título curto para o Google, descrição, categoria, data, serviço relacionado e o texto em HTML simples). Para tirar um artigo do ar sem apagar, use `publicado: false`.

Depois de editar qualquer um dos dois, gere de novo e confira:

```bash
node scripts/build-pages.mjs
node scripts/check-seo.mjs
```

O primeiro recria as páginas de serviço, o blog, o feed RSS (`blog/feed.xml`), o `sitemap.xml` e a lista do rodapé da home. O segundo confere títulos, descrições, H1, canonical, dados estruturados, FAQ e links de todas as páginas.

## SEO

- Cada página tem título (até 60 caracteres), descrição (até 160), canonical e um único H1.
- Dados estruturados: `Organization` e `ProfessionalService` (com o catálogo de serviços) na home, `Service` e `BreadcrumbList` nas páginas de serviço, e `FAQPage` com as mesmas perguntas que aparecem na página.
- Artigos do blog com `BlogPosting` e `BreadcrumbList`; a lista do blog com `Blog`.
- Depoimentos só reais.

Hospedado no GitHub Pages a partir da branch `main`. O arquivo `CNAME` define o domínio.
