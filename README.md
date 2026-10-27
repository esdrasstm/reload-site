# Reload Estúdio

Site da Reload Estúdio: [reloadestudios.com.br](https://reloadestudios.com.br)

HTML, CSS e JavaScript puros, sem etapa de build no servidor. As animações usam o GSAP via CDN.

- `index.html`: a home
- `css/style.css`: estilos de todas as páginas
- `js/main.js`: menu, cards, depoimentos, brilho dos botões e formulário
- `assets/`: imagens, ícones, `logo.png` (logo para o Google) e `og.png` (prévia de compartilhamento)
- `<serviço>/index.html`: páginas de serviço, **geradas** (não editar à mão)

## Páginas de serviço e sitemap

O conteúdo das páginas de serviço fica em `scripts/servicos.mjs` (título, descrição, H1, benefícios, projetos, depoimento e perguntas). Depois de editar, gere de novo:

```bash
node scripts/build-pages.mjs
```

O script recria as pastas de cada serviço, o `sitemap.xml` e a lista de serviços do rodapé da home.

## SEO

- Cada página tem título (até 60 caracteres), descrição (até 160), canonical e um único H1.
- Dados estruturados: `Organization` e `ProfessionalService` (com o catálogo de serviços) na home, `Service` e `BreadcrumbList` nas páginas de serviço, e `FAQPage` com as mesmas perguntas que aparecem na página.
- Depoimentos só reais.

Hospedado no GitHub Pages a partir da branch `main`. O arquivo `CNAME` define o domínio.
