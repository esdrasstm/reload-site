// Artigos do blog. Cada artigo vira /blog/<slug>/ ao rodar `node scripts/build-pages.mjs`.
// - tituloSeo: título curto para o Google (até 60 caracteres); o H1 usa o titulo
// - descricao: até 155 caracteres (aparece no Google e no compartilhamento)
// - publicado: false tira o artigo do site, da lista e do sitemap
// - servico: slug da página de serviço indicada no fim do artigo
// - corpo: HTML simples (h2, p, ul/ol, a, strong). Links internos começam com "/".

export const POSTS = [
  {
    slug: "site-institucional-ou-landing-page",
    tituloSeo: "Site institucional ou landing page: qual escolher?",
    titulo: "Site institucional ou landing page: qual a sua empresa precisa?",
    descricao:
      "Entenda a diferença entre site institucional e landing page, quando usar cada um e como os dois podem trabalhar juntos no marketing da sua empresa.",
    categoria: "Sites",
    data: "2026-10-27",
    publicado: true,
    servico: "criacao-de-sites",
    corpo: `
<p>Quem decide colocar a empresa na internet costuma esbarrar na mesma dúvida: fazer um site completo ou começar por uma landing page? Os dois são páginas na internet, mas têm objetivos diferentes. Escolher bem economiza tempo e dinheiro, e faz cada visita render mais.</p>

<h2>O que é um site institucional</h2>
<p>O site institucional apresenta a empresa inteira. Ele costuma ter várias páginas, como início, sobre, serviços, projetos e contato, e responde às perguntas de quem quer conhecer o negócio antes de fechar: quem são vocês, o que fazem, para quem, e como falar com vocês.</p>
<p>É ele que aparece quando alguém procura o nome da sua empresa no Google, e é para ele que você manda quem pediu “me passa o site de vocês”. Por isso, o site institucional é a base da presença digital: passa confiança e reúne tudo em um só lugar.</p>

<h2>O que é uma landing page</h2>
<p>A landing page é uma página única, feita para uma ação só: pedir um orçamento, chamar no WhatsApp, baixar um material ou se inscrever em um evento. Tudo nela leva para essa ação, sem menus nem caminhos que distraiam.</p>
<p>Ela funciona muito bem para campanhas e anúncios. Quem clica em um anúncio sobre um serviço específico chega direto numa página que fala só daquele serviço, o que costuma gerar mais contatos do que mandar a pessoa para a página inicial do site.</p>

<h2>Quando escolher cada um</h2>
<ul>
  <li><strong>Site institucional:</strong> quando a empresa oferece vários serviços, precisa mostrar trabalhos e quer ser encontrada no Google por quem procura o que ela faz.</li>
  <li><strong>Landing page:</strong> quando há uma oferta, um lançamento ou uma campanha com começo e fim, e o objetivo é medir quantos contatos aquela ação trouxe.</li>
</ul>

<h2>Os dois juntos</h2>
<p>Na prática, muitas empresas usam os dois. O site institucional é o endereço fixo da marca, e as landing pages entram em cada campanha. O importante é que tudo siga o mesmo padrão visual: quem sai do anúncio, passa pela landing page e depois visita o site precisa sentir que está falando com a mesma empresa.</p>

<h2>Por onde começar</h2>
<p>Se a sua empresa ainda não tem presença na internet, o site institucional costuma ser o primeiro passo, porque é ele que sustenta todo o resto. Se você já tem um site e vai investir em anúncios, uma landing page para cada campanha ajuda a aproveitar melhor cada clique.</p>
<p>Na Reload Estúdios fazemos os dois, sempre no padrão da sua marca. Veja como funciona a <a href="/criacao-de-sites/">criação de sites</a> e a <a href="/landing-page/">criação de landing pages</a>.</p>
`,
  },
  {
    slug: "identidade-visual-alem-do-logotipo",
    tituloSeo: "Identidade visual vai além do logotipo",
    titulo: "Identidade visual: por que ela vai muito além do logotipo",
    descricao:
      "Logotipo, cores, tipografia e aplicações: entenda o que forma uma identidade visual e por que ela faz sua marca ser reconhecida e lembrada.",
    categoria: "Identidade visual",
    data: "2026-10-27",
    publicado: true,
    servico: "identidade-visual",
    corpo: `
<p>Quando se fala em marca, a primeira imagem que vem à cabeça é o logotipo. Ele é importante, mas é só uma parte. A identidade visual é o conjunto de elementos que faz uma empresa ser reconhecida em qualquer lugar: no site, no Instagram, no cartão de visita, na fachada e até na assinatura do e-mail.</p>

<h2>O que forma uma identidade visual</h2>
<ul>
  <li><strong>Logotipo:</strong> o símbolo e o nome da marca, com versões para fundos claros e escuros e para tamanhos pequenos.</li>
  <li><strong>Cores:</strong> uma paleta definida, com a cor principal e as de apoio, para a marca ser reconhecida antes mesmo de alguém ler o nome.</li>
  <li><strong>Tipografia:</strong> as fontes usadas em títulos e textos, que ajudam a dar o tom da marca, mais séria, mais leve ou mais moderna.</li>
  <li><strong>Elementos gráficos:</strong> formas, ícones, texturas ou padrões que se repetem nas peças e criam unidade.</li>
  <li><strong>Aplicações:</strong> como tudo isso aparece na prática, em cartões, papelaria, redes sociais, site e materiais impressos.</li>
</ul>

<h2>Por que ela importa</h2>
<p>Uma identidade visual bem feita transmite profissionalismo. Quando o cliente vê o mesmo padrão no site, no perfil das redes e na proposta comercial, ele entende que está diante de uma empresa organizada, que cuida dos detalhes. O contrário também acontece: cores e fontes diferentes em cada lugar passam a impressão de improviso.</p>
<p>Ela também ajuda a marca a ser lembrada. Cores e formas que se repetem criam familiaridade, e é essa familiaridade que faz alguém reconhecer o seu post no meio de tantos outros.</p>

<h2>Logotipo com conceito</h2>
<p>Um bom logotipo nasce da história e do propósito da empresa. No projeto da <a href="https://www.behance.net/gallery/235030623/Alger" target="_blank" rel="noopener">Alger</a>, uma marca de impressão 3D, o símbolo foi construído a partir de uma forma que lembra um cubo em perspectiva, para transmitir volume, precisão e tecnologia. É esse tipo de ligação entre forma e significado que faz a marca ter personalidade.</p>

<h2>Quando vale renovar a marca</h2>
<ul>
  <li>Quando o logotipo não funciona bem em tamanhos pequenos, como no ícone do Instagram.</li>
  <li>Quando cada material da empresa usa cores e fontes diferentes.</li>
  <li>Quando a empresa cresceu ou mudou de público e a marca ficou para trás.</li>
</ul>
<p>Renovar não significa jogar tudo fora. Muitas vezes dá para modernizar a marca mantendo o que os clientes já reconhecem.</p>
<p>Na Reload Estúdios criamos a identidade visual completa, do logotipo às aplicações. Conheça o serviço de <a href="/identidade-visual/">identidade visual e criação de logotipo</a>.</p>
`,
  },
  {
    slug: "perfil-da-empresa-no-google",
    tituloSeo: "Perfil da Empresa no Google: como ser encontrado",
    titulo: "Perfil da Empresa no Google: como ser encontrado por quem procura você",
    descricao:
      "O Perfil da Empresa no Google (antigo Google Meu Negócio) faz sua empresa aparecer no Maps e na busca. Veja como deixar o seu completo e confiável.",
    categoria: "Marketing digital",
    data: "2026-10-27",
    publicado: true,
    servico: "criacao-de-sites",
    corpo: `
<p>Quando alguém procura um serviço no Google, os primeiros resultados costumam vir com um mapa e uma lista de empresas, com nota, fotos e telefone. Essas informações saem do Perfil da Empresa no Google, o antigo Google Meu Negócio. É gratuito, e para muitos negócios é uma das formas mais diretas de ser encontrado.</p>

<h2>O que é o Perfil da Empresa</h2>
<p>É a ficha da sua empresa dentro do Google. Ela aparece na busca e no Google Maps e reúne nome, categoria, telefone, site, horário de atendimento, fotos e avaliações de clientes. Empresas que atendem uma região, sem receber clientes num endereço, também podem ter perfil: basta informar a área atendida em vez de mostrar o endereço.</p>

<h2>Como deixar o perfil completo</h2>
<ul>
  <li><strong>Nome igual em todo lugar:</strong> use o mesmo nome da empresa no perfil, no site e nas redes sociais. Isso ajuda o Google a entender que tudo pertence ao mesmo negócio.</li>
  <li><strong>Categoria certa:</strong> escolha a categoria que melhor descreve o que você faz. Ela influencia em quais buscas o perfil aparece.</li>
  <li><strong>Contato e horário atualizados:</strong> telefone, WhatsApp, horário de atendimento e o endereço do seu site.</li>
  <li><strong>Fotos reais:</strong> trabalhos feitos, equipe e o dia a dia da empresa passam mais confiança do que imagens genéricas.</li>
  <li><strong>Descrição clara:</strong> conte em poucas linhas o que a empresa faz e para quem.</li>
</ul>

<h2>Avaliações fazem diferença</h2>
<p>As avaliações são uma das primeiras coisas que as pessoas olham. Peça para clientes satisfeitos deixarem a opinião deles, de preferência logo depois de concluir o serviço, quando a experiência ainda está fresca. E responda às avaliações, inclusive às negativas, com educação: quem lê percebe que a empresa se importa.</p>

<h2>O perfil e o site trabalham juntos</h2>
<p>O perfil leva as pessoas até você, e o site é onde elas conhecem o seu trabalho com calma e decidem pedir um orçamento. Por isso vale ligar um ao outro: o endereço do site no perfil, e o perfil citado no site. Um site rápido, com as informações certas e no mesmo padrão da sua marca, fecha esse caminho.</p>
<p>Se a sua empresa ainda não tem um site à altura do perfil, veja como funciona a <a href="/criacao-de-sites/">criação de sites</a> da Reload Estúdios.</p>
`,
  },
  {
    slug: "padrao-visual-nas-redes-sociais",
    tituloSeo: "Padrão visual da marca nas redes sociais",
    titulo: "Como manter o padrão visual da sua marca nas redes sociais",
    descricao:
      "Dicas práticas para deixar o feed com cara de marca: cores, fontes, modelos de post e o cuidado de seguir a mesma identidade do seu site.",
    categoria: "Redes sociais",
    data: "2026-10-27",
    publicado: true,
    servico: "design-para-redes-sociais",
    corpo: `
<p>O perfil da empresa nas redes sociais costuma ser o primeiro contato de muita gente com a marca. Antes de ler qualquer legenda, a pessoa bate o olho no feed e já forma uma impressão. Um feed com padrão visual passa profissionalismo. Um feed em que cada post tem uma cara passa improviso, mesmo que o trabalho da empresa seja ótimo.</p>

<h2>Comece pela identidade visual</h2>
<p>O padrão das redes nasce da identidade visual da marca. Use as mesmas cores, as mesmas fontes e os mesmos elementos gráficos do seu site e dos seus materiais. Se a sua marca ainda não tem essas regras definidas, vale começar por elas, porque sem uma base qualquer padrão vira tentativa e erro.</p>

<h2>Use modelos para cada tipo de post</h2>
<p>Crie modelos para os conteúdos que se repetem: dicas, depoimentos de clientes, apresentação de serviços, bastidores e avisos. Com modelos prontos, cada post novo já nasce no padrão e a produção fica mais rápida. Variar o tipo de modelo também deixa o feed mais interessante sem perder a unidade.</p>

<h2>Cuide dos detalhes que mais aparecem</h2>
<ul>
  <li><strong>Foto de perfil:</strong> o símbolo da marca, legível mesmo em tamanho pequeno.</li>
  <li><strong>Capas dos destaques:</strong> ícones no mesmo estilo e nas cores da marca.</li>
  <li><strong>Carrosséis:</strong> a mesma estrutura de capa e de slides internos, para o conteúdo ser reconhecido.</li>
  <li><strong>Stories:</strong> fundos, fontes e adesivos que conversem com o resto do perfil.</li>
</ul>

<h2>Leve o mesmo padrão para o site</h2>
<p>Quem gosta do seu perfil vai clicar no link da bio. Se o site tiver outra cara, a sensação de confiança se perde no caminho. Redes, site e anúncios precisam parecer partes da mesma marca, do primeiro post até o pedido de orçamento.</p>
<p>Na Reload Estúdios criamos posts, carrosséis, stories e capas no padrão da sua marca. Conheça o serviço de <a href="/design-para-redes-sociais/">design para redes sociais</a>.</p>
`,
  },
];
