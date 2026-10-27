// Conteúdo das páginas de serviço (um template, uma página por serviço).
// Só o que a Reload faz de verdade: nada de prazo, preço ou resultado prometido.
// Depois de editar, rode `node scripts/build-pages.mjs` para gerar as páginas.

export const PROJETOS = {
  agi: {
    nome: "AGI Engenharia",
    chip: "Site institucional",
    texto:
      "A AGI Engenharia buscava um site que transmitisse solidez e profissionalismo. Reformulamos toda a presença digital da empresa mantendo sua identidade visual e elevando o nível de credibilidade da marca.",
    link: "https://agiengenharia.com.br/",
    botao: "Ver o site",
    img: "/assets/projetos/agi-notebook.webp",
    alt: "Site da AGI Engenharia aberto em um notebook",
    w: 2000,
    h: 1333,
  },
  iteracao: {
    nome: "Agência Iteração",
    chip: "Identidade visual e site",
    texto:
      "A Iteração é uma agência de estratégia e marketing. Criamos a identidade visual e o site da marca, com um visual sóbrio que traduz o lema da agência: Nós não adivinhamos. Nós iteramos.",
    link: "https://www.behance.net/gallery/243441573/Agencia-Iteracao",
    botao: "Ver no Behance",
    img: "/assets/projetos/iteracao-site.jpg",
    alt: "Site da Agência Iteração aberto em um notebook",
    w: 1200,
    h: 675,
  },
  alger: {
    nome: "Alger",
    chip: "Identidade visual",
    texto:
      "A Alger trabalha com impressão 3D. A marca nasceu de uma forma geométrica que lembra um cubo em perspectiva e transmite volume, precisão e tecnologia.",
    link: "https://www.behance.net/gallery/235030623/Alger",
    botao: "Ver no Behance",
    img: "/assets/projetos/alger-metro.webp",
    alt: "Cartaz da Alger com o slogan inovação em cada detalhe dentro de um vagão de metrô",
    w: 1920,
    h: 1283,
  },
};

export const DEPOIMENTOS = {
  agi: {
    texto:
      "Ótimo serviço de criação de sites, ótimo suporte desde o primeiro contato até o pós-vendas. Fizeram o backup dos nossos e-mails de forma excepcional para a migração da nossa hospedagem.",
    nome: "AGI Engenharia",
    detalhe: "Site institucional e migração de e-mails",
  },
};

export const SERVICOS = [
  {
    slug: "criacao-de-sites",
    rotulo: "Criação de sites",
    title: "Criação de sites profissionais | Reload Estúdio",
    description:
      "Criação de sites institucionais com o visual da sua marca, rápidos, pensados para o celular e para aparecer no Google. Orçamento em até 24h.",
    h1: "Criação de sites profissionais",
    destaque: "profissionais",
    subtitulo:
      "Um site no mesmo padrão da sua marca, que passa confiança desde o primeiro acesso e leva o cliente até o contato.",
    servicoSchema: "Criação de sites",
    beneficios: [
      { titulo: "No padrão da sua marca", texto: "Cores, tipografia e tom de voz seguem a sua identidade visual, para o site parecer parte da empresa." },
      { titulo: "Feito para o Google", texto: "Títulos bem estruturados, textos pensados para busca, carregamento rápido e dados estruturados." },
      { titulo: "Perfeito no celular", texto: "O layout se adapta ao celular, ao tablet e ao computador, e é testado em cada tamanho de tela." },
      { titulo: "Contato a um toque", texto: "Botões de WhatsApp e formulário de orçamento nos pontos certos da página." },
    ],
    projetos: ["agi", "iteracao"],
    depoimento: "agi",
    faq: [
      { q: "Quanto custa um site institucional?", a: "Depende da quantidade de páginas e das funcionalidades. Preencha o formulário e enviamos um orçamento personalizado em até 24h, sem compromisso." },
      { q: "Vocês cuidam do domínio e da hospedagem?", a: "Sim. Ajudamos a registrar ou apontar o domínio e a colocar o site no ar, e também cuidamos da migração quando você troca de hospedagem." },
      { q: "O site vai aparecer no Google?", a: "Construímos o site com boas práticas de SEO, que ajudam o Google a entender e mostrar as suas páginas. A posição nos resultados também depende do conteúdo e da concorrência do seu mercado." },
    ],
  },
  {
    slug: "landing-page",
    rotulo: "Landing pages",
    title: "Criação de landing page para anúncios | Reload Estúdio",
    description:
      "Landing pages com um objetivo claro, rápidas e no padrão visual da sua marca, prontas para receber o tráfego dos seus anúncios. Orçamento em até 24h.",
    h1: "Criação de landing pages",
    destaque: "landing pages",
    subtitulo:
      "Uma página com um único objetivo: transformar a visita que veio do anúncio ou do link da bio em contato.",
    servicoSchema: "Criação de landing page",
    beneficios: [
      { titulo: "Um objetivo por página", texto: "Texto, imagens e botões guiam a visita para uma única ação: pedir orçamento, chamar no WhatsApp ou se cadastrar." },
      { titulo: "Carrega rápido", texto: "Página leve, que abre rápido no celular, onde está a maior parte de quem clica em anúncios." },
      { titulo: "Pronta para campanhas", texto: "Feita para receber o tráfego dos seus anúncios e do link da bio, com o visual da sua marca." },
    ],
    projetos: ["iteracao"],
    faq: [
      { q: "Qual a diferença entre landing page e site?", a: "O site apresenta a empresa inteira, com várias páginas. A landing page é uma página só, focada em uma oferta ou campanha e em uma única ação." },
      { q: "Quanto custa uma landing page?", a: "Depende do conteúdo e das integrações. Preencha o formulário e enviamos um orçamento personalizado em até 24h, sem compromisso." },
    ],
  },
  {
    slug: "identidade-visual",
    rotulo: "Identidade visual",
    title: "Identidade visual e criação de logotipo | Reload Estúdio",
    description:
      "Criação de identidade visual completa: logotipo, cores, tipografia e aplicações, para sua marca ter o mesmo padrão no site, nas redes e no impresso.",
    h1: "Identidade visual e criação de logotipo",
    destaque: "logotipo",
    subtitulo:
      "Uma marca pensada para o seu negócio, com regras claras para ser aplicada do cartão de visita ao Instagram.",
    servicoSchema: "Identidade visual",
    beneficios: [
      { titulo: "Logotipo com conceito", texto: "A forma nasce da história e do propósito da empresa, não de um modelo pronto." },
      { titulo: "Cores e tipografia", texto: "Uma paleta e fontes definidas, para a marca ser reconhecida em qualquer lugar." },
      { titulo: "Aplicações reais", texto: "Cartão de visita, papelaria, peças para redes sociais e o que mais a sua marca precisar." },
      { titulo: "Tudo no mesmo padrão", texto: "Site, redes e materiais seguem a mesma identidade, o que passa profissionalismo." },
    ],
    projetos: ["iteracao", "alger"],
    faq: [
      { q: "O que está incluído na identidade visual?", a: "Logotipo, paleta de cores, tipografia e as aplicações combinadas no orçamento, como cartão de visita e peças para redes sociais." },
      { q: "Vocês redesenham uma marca que já existe?", a: "Sim. Podemos modernizar a sua marca atual mantendo o que os clientes já reconhecem, ou criar uma nova do zero." },
    ],
  },
  {
    slug: "design-para-redes-sociais",
    rotulo: "Design para redes sociais",
    title: "Design para redes sociais e Instagram | Reload Estúdio",
    description:
      "Design para Instagram e outras redes: posts, carrosséis, stories e capas de destaque no padrão visual da sua marca. Orçamento em até 24h.",
    h1: "Design para redes sociais",
    destaque: "redes sociais",
    subtitulo:
      "Posts, carrosséis e stories que deixam o seu perfil com cara de marca, e não de improviso.",
    servicoSchema: "Design para social media",
    beneficios: [
      { titulo: "Perfil consistente", texto: "Todas as peças seguem a sua identidade visual, para o feed ter unidade." },
      { titulo: "Todos os formatos", texto: "Posts, carrosséis, stories e capas de destaque, no tamanho certo de cada rede." },
      { titulo: "Combinado com o site", texto: "O mesmo padrão visual do seu site e da sua marca, do anúncio à página de contato." },
    ],
    projetos: [],
    faq: [
      { q: "Vocês fazem a gestão das redes sociais?", a: "Nosso foco é o design das peças. Se você precisa de outros serviços para as redes, conte no formulário e combinamos o que faz sentido." },
      { q: "Quais formatos vocês criam?", a: "Posts, carrosséis, stories e capas de destaque, no tamanho certo para cada rede." },
    ],
  },
  {
    slug: "backup-de-emails-corporativos",
    rotulo: "Backup de e-mails",
    title: "Backup e migração de e-mails corporativos | Reload Estúdio",
    description:
      "Backup de e-mails corporativos e migração ao trocar de hospedagem, sem perder mensagens importantes da sua empresa. Orçamento em até 24h.",
    h1: "Backup e migração de e-mails corporativos",
    destaque: "e-mails corporativos",
    subtitulo:
      "Uma cópia de segurança dos e-mails da sua empresa, para nenhuma mensagem importante se perder.",
    servicoSchema: "Backup de e-mails corporativos",
    beneficios: [
      { titulo: "Cópia de segurança", texto: "Os e-mails ficam guardados mesmo em caso de exclusão acidental ou problema técnico." },
      { titulo: "Migração sem perdas", texto: "Ao trocar de hospedagem ou de provedor, as caixas de e-mail são levadas junto." },
      { titulo: "Com acompanhamento", texto: "Suporte desde o primeiro contato até depois da migração." },
    ],
    projetos: [],
    depoimento: "agi",
    faq: [
      { q: "Por que fazer backup dos e-mails da empresa?", a: "Porque contratos, propostas e conversas com clientes costumam estar só no e-mail. Uma cópia de segurança evita perder esse histórico." },
      { q: "Vocês migram os e-mails quando eu trocar de hospedagem?", a: "Sim. Fazemos o backup e a migração das caixas de e-mail para a nova hospedagem." },
    ],
  },
];
