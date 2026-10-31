// Artigos do blog. Cada artigo vira /blog/<slug>/ ao rodar `node scripts/build-pages.mjs`.
// - tituloSeo: título curto para o Google (até 60 caracteres); o H1 usa o titulo
// - descricao: até 155 caracteres (aparece no Google e no compartilhamento)
// - publicado: false tira o artigo do site, da lista e do sitemap
// - servico: slug da página de serviço indicada no fim do artigo
// - corpo: HTML simples (h2, p, ul/ol, a, strong). Links internos começam com "/".
// - capa (opcional): { file: "capa-<slug>-1200x630.webp", alt, width: 1200, height: 630 }, arquivo em blog/<slug>/.
//   Vira a imagem do topo do artigo, a miniatura da lista e a prévia de compartilhamento.
// - imagem no meio do texto: dentro do corpo, use
//   <figure class="post-figure"><img src="/blog/<slug>/corpo-<slug>-1520x855.webp" alt="..." width="1520" height="855" loading="lazy"></figure>

export const POSTS = [
  {
    slug: "black-friday-pequenas-empresas",
    tituloSeo: "Black Friday para pequenas empresas 2026",
    titulo: "Black Friday para pequenas empresas: como se preparar em 2026",
    descricao:
      "Black Friday para pequenas empresas: como preparar ofertas, landing page, WhatsApp e as regras do CDC para vender bem em 27/11. Veja o checklist.",
    categoria: "Marketing digital",
    data: "2026-10-30",
    publicado: true,
    servico: "landing-page",
    capa: { file: "capa-black-friday-pequenas-empresas-1200x630.jpg", alt: "Notebook sobre mesa escura com sacolas de compra e etiquetas de preço, ilustrando a Black Friday para pequenas empresas", width: 1200, height: 630 },
    corpo: `
<p>Para a Black Friday dar certo numa pequena empresa, o caminho é preparar com antecedência poucas ofertas reais, um lugar claro para o cliente comprar (uma landing page ou o WhatsApp) e a divulgação nas redes sociais. Em 2026, a data cai na sexta-feira, 27 de novembro, então ainda dá tempo de organizar tudo com calma.</p>
<p>Veja o que os números do ano passado mostram, o passo a passo para se preparar e as regras que evitam problemas com o cliente e com o Procon.</p>

<h2>Quando é a Black Friday 2026</h2>
<p>A Black Friday 2026 será na sexta-feira, 27 de novembro. Muitas lojas estendem as ofertas para o fim de semana, e algumas fazem um “esquenta” ao longo de novembro.</p>
<p>Para a sua empresa, o importante é decidir antes: as ofertas valem só no dia, no fim de semana ou na semana toda? Datas claras ajudam o cliente a se programar e evitam reclamação depois.</p>

<h2>O que a Black Friday 2025 mostra para quem é pequeno</h2>
<p>Segundo a Confi Neotrust, empresa que acompanha o comércio eletrônico no Brasil, o e-commerce faturou R$ 4,76 bilhões no dia da Black Friday de 2025, alta de 11,2% em relação a 2024. O número de pedidos subiu 28%, para 8,69 milhões, enquanto o tíquete médio caiu 12,8%, para R$ 553,60.</p>
<p>Em outras palavras: mais gente comprou, mas cada pessoa gastou menos por pedido. Isso é uma boa notícia para a pequena empresa. A data não é só de quem vende televisão e celular: produtos de valor menor, kits e serviços com preço acessível também têm espaço.</p>
<p>E o WhatsApp pesa muito nessa conta. De acordo com a Pesquisa Serviço 2025, do Sebrae, ele é usado por mais de 80% dos pequenos negócios de serviço. Para muitas empresas, é ali que a venda da Black Friday vai ser fechada.</p>

<h2>Como se preparar para a Black Friday: passo a passo</h2>
<ol>
  <li><strong>Escolha poucas ofertas.</strong> O Sebrae recomenda focar em três ou quatro ofertas, com estoque garantido e boa negociação com os fornecedores. Poucas ofertas fortes são mais fáceis de divulgar do que uma vitrine inteira com desconto pequeno.</li>
  <li><strong>Faça as contas antes de definir o desconto.</strong> Some custo do produto, taxa da maquininha ou da plataforma, frete e embalagem. Desconto que dá prejuízo não é promoção, é perda.</li>
  <li><strong>Defina onde o cliente vai comprar.</strong> Loja virtual, página da campanha, WhatsApp ou loja física. Seja qual for, o caminho até o pedido precisa ser curto.</li>
  <li><strong>Pense no frete.</strong> O Sebrae sugere oferecer frete fixo ou grátis para a sua região, porque o custo de envio pode fazer o cliente desistir.</li>
  <li><strong>Prepare as peças de divulgação.</strong> Posts, stories, banner do site e a imagem que vai no WhatsApp, todos com a cara da sua marca.</li>
  <li><strong>Organize o atendimento.</strong> Deixe respostas prontas para as perguntas mais comuns (preço, prazo, pagamento, troca) e defina o horário de atendimento.</li>
  <li><strong>Comece a divulgar cedo.</strong> Avise seus clientes e seguidores alguns dias antes, para quem estiver interessado se programar.</li>
</ol>

<h2>Landing page para a Black Friday: por que vale a pena</h2>
<p>Quem clica no anúncio ou no link da bio quer ver a oferta, não procurar por ela. Uma landing page de Black Friday reúne tudo num lugar só: as ofertas, os preços, as condições, o prazo da promoção e um botão para comprar ou chamar no WhatsApp.</p>
<ul>
  <li><strong>Um objetivo só:</strong> sem menus e distrações, o visitante vai direto para a ação.</li>
  <li><strong>Um link para tudo:</strong> o mesmo endereço serve para o Instagram, o WhatsApp, o e-mail e os anúncios.</li>
  <li><strong>Reaproveitável:</strong> depois da Black Friday, a mesma estrutura pode virar a página do Natal ou da próxima campanha.</li>
  <li><strong>Leve no celular:</strong> a página precisa abrir rápido e ser fácil de ler na tela pequena, onde o cliente toca no link do Instagram ou do WhatsApp.</li>
</ul>
<p>Se você ainda tem dúvida entre criar uma página nova ou usar o site que já tem, leia <a href="/blog/site-institucional-ou-landing-page/">site institucional ou landing page: qual a sua empresa precisa</a>. E veja como funciona a criação de <a href="/landing-page/">landing page</a> na Reload.</p>

<figure class="post-figure"><img src="/blog/black-friday-pequenas-empresas/corpo-black-friday-pequenas-empresas-1520x855.jpg" alt="Quadro com dados da Black Friday para pequenas empresas: 27 de novembro de 2026, R$ 4,76 bilhões no e-commerce em 2025, 28% mais pedidos e 7 dias para o cliente desistir" width="1520" height="855" loading="lazy"></figure>

<h2>Black Friday no Instagram e no WhatsApp</h2>
<p>A orientação do Sebrae é manter um conteúdo atrativo no Instagram, com link que leve para o WhatsApp, onde a venda é fechada. Algumas dicas práticas:</p>
<ul>
  <li>Use o mesmo visual em todas as peças da campanha: cores, fonte e estilo de foto da sua marca. Assim o cliente reconhece a sua oferta no meio de tantas outras.</li>
  <li>Mostre o preço e as condições na própria imagem ou na legenda. Quem precisa perguntar o preço muitas vezes desiste.</li>
  <li>Deixe o link da landing page ou do WhatsApp na bio e nos stories.</li>
  <li>Atualize o seu <a href="/blog/perfil-da-empresa-no-google/">Perfil da Empresa no Google</a> com o horário especial e fotos da campanha, para quem procura a loja pelo Google Maps.</li>
</ul>

<h2>Black Friday e o Código de Defesa do Consumidor</h2>
<p>Promoção mal explicada vira reclamação. Estes são os cuidados que a lei pede de quem vende:</p>
<ul>
  <li><strong>Desconto de verdade.</strong> O Código de Defesa do Consumidor proíbe a publicidade enganosa (art. 37). Subir o preço antes da data para “dar desconto” depois, a famosa “metade do dobro”, é prática que os Procons apontam como enganosa e fiscalizam nessa época.</li>
  <li><strong>Informações claras na venda pela internet.</strong> O Decreto 7.962/2013 exige que o site mostre nome da empresa, CNPJ, endereço e contato, as características do produto, as despesas extras (como o frete) separadas do preço e as condições da oferta, inclusive as restrições.</li>
  <li><strong>Direito de arrependimento.</strong> Em compras feitas fora da loja física, como pela internet ou pelo WhatsApp, o cliente pode desistir em até 7 dias, contados da compra ou do recebimento do produto (art. 49 do CDC). Explique como ele pode fazer isso.</li>
  <li><strong>Canal de atendimento.</strong> O mesmo decreto pede um canal eletrônico para dúvidas, reclamações e cancelamentos, com resposta em até cinco dias.</li>
</ul>

<h2>Checklist da Black Friday para pequenas empresas</h2>
<ul>
  <li>Data e horário da promoção definidos e divulgados.</li>
  <li>Três ou quatro ofertas com estoque garantido e margem calculada.</li>
  <li>Preço anterior real e desconto verdadeiro.</li>
  <li>Landing page ou página da campanha no ar e testada no celular.</li>
  <li>Frete, prazo de entrega e formas de pagamento informados.</li>
  <li>CNPJ, endereço e contato visíveis no site.</li>
  <li>Política de troca e de arrependimento explicada.</li>
  <li>Posts, stories e imagens do WhatsApp no padrão visual da marca.</li>
  <li>Respostas prontas para as perguntas mais comuns.</li>
</ul>

<h2>Perguntas frequentes</h2>

<h2>Quando é a Black Friday 2026?</h2>
<p>A Black Friday 2026 é na sexta-feira, 27 de novembro. Muitas empresas estendem as ofertas pelo fim de semana ou fazem ações ao longo de novembro.</p>

<h2>Pequena empresa precisa de site para participar da Black Friday?</h2>
<p>Não é obrigatório: dá para vender pelo WhatsApp, pelas redes sociais ou na loja física. Mas uma landing page com as ofertas reúne preços e condições num endereço só, que você pode divulgar em todos os canais.</p>

<h2>O cliente pode desistir de uma compra feita na Black Friday?</h2>
<p>Sim, se a compra foi feita fora da loja física, como pela internet, por telefone ou pelo WhatsApp. O artigo 49 do Código de Defesa do Consumidor garante 7 dias para desistir, contados da compra ou do recebimento do produto.</p>

<h2>O que é a “metade do dobro” na Black Friday?</h2>
<p>É aumentar o preço antes da data para depois anunciar um desconto que só leva o produto de volta ao valor normal. Os Procons consideram a prática enganosa e fiscalizam as ofertas nessa época.</p>

<p>Quer uma landing page e peças de campanha prontas para a Black Friday? <a href="/#orcamento">Peça um orçamento personalizado</a> e receba a resposta em até 24h. Identidade visual, site e redes sociais no mesmo padrão profissional.</p>
`,
  },
  {
    slug: "email-corporativo-dominio-proprio",
    tituloSeo: "Como criar e-mail corporativo com domínio próprio",
    titulo: "E-mail corporativo com domínio próprio: como criar o da sua empresa",
    descricao:
      "Veja como criar um e-mail corporativo com domínio próprio, quanto custa o .com.br e o que configurar para não cair no spam. Passo a passo e checklist.",
    categoria: "Sites",
    data: "2026-10-28",
    publicado: true,
    servico: "backup-de-emails-corporativos",
    capa: { file: "capa-email-corporativo-dominio-proprio-1200x630.jpg", alt: "Mãos digitando em notebook sobre mesa escura à noite, ilustrando a criação de e-mail corporativo com domínio próprio", width: 1200, height: 630 },
    corpo: `
<p>Para criar um e-mail corporativo com domínio próprio, você precisa de duas coisas: um domínio no nome da empresa (como suaempresa.com.br) e um serviço que hospede as caixas de e-mail. Com os dois prontos, é só criar as contas, como contato@suaempresa.com.br, e configurar o domínio para as mensagens chegarem sem cair no spam.</p>
<p>Parece técnico, mas o caminho é curto. Veja o que é, quanto custa o domínio, o passo a passo e os cuidados que fazem diferença no dia a dia da sua empresa.</p>

<h2>O que é e-mail corporativo com domínio próprio</h2>
<p>É o endereço de e-mail que leva o nome da sua empresa depois do @, em vez do nome de um provedor gratuito. No lugar de suaempresa2026@gmail.com, o cliente recebe uma mensagem de voce@suaempresa.com.br.</p>
<p>O domínio é o mesmo endereço do site. Por isso, quem já tem site normalmente já tem a parte principal: falta só ativar o e-mail nesse domínio. Se a sua empresa ainda não tem site, o domínio que você registrar agora vai servir para os dois.</p>

<h2>Por que ter um e-mail profissional com o nome da empresa</h2>
<ul>
  <li><strong>Credibilidade:</strong> um orçamento enviado de um endereço com o nome da empresa passa mais confiança do que um e-mail gratuito, que qualquer pessoa consegue criar em minutos.</li>
  <li><strong>Marca em cada mensagem:</strong> todo e-mail enviado repete o nome da empresa e o endereço do site.</li>
  <li><strong>As contas são da empresa:</strong> as caixas pertencem ao negócio, não ao funcionário. Se alguém sai da equipe, o histórico com os clientes continua com você.</li>
  <li><strong>Endereços por função:</strong> contato@, financeiro@ e orcamento@ organizam o atendimento, mesmo quando uma pessoa só cuida de tudo.</li>
</ul>

<h2>Quanto custa o domínio .com.br</h2>
<p>Registrar um domínio .br custa R$ 40 por ano, segundo o NIC.br, a entidade que opera os endereços terminados em .br pelo Registro.br. Em outubro de 2026, o .br chegou a 6 milhões de nomes registrados, de acordo com a mesma entidade.</p>
<p>Além do domínio, existe o custo do serviço de e-mail, que muda conforme o provedor, o número de contas e o espaço de cada caixa. Muitos planos de hospedagem de site já incluem algumas contas de e-mail, então confira o que você já paga antes de contratar outro serviço.</p>
<p>Uma dica que evita dor de cabeça: registre o domínio no CNPJ da empresa e anote a data de renovação. Domínio vencido tira do ar o site e o e-mail ao mesmo tempo.</p>

<h2>Como criar e-mail corporativo: passo a passo</h2>
<ol>
  <li><strong>Escolha e registre o domínio.</strong> Prefira um nome curto, fácil de falar ao telefone e igual ao nome da empresa no Instagram e no Google. Confira se ele está disponível no Registro.br.</li>
  <li><strong>Escolha onde o e-mail vai ficar.</strong> Pode ser a mesma hospedagem do site ou um serviço só de e-mail. Compare espaço por caixa, aplicativo para celular, filtro de spam e suporte.</li>
  <li><strong>Aponte o domínio para o serviço de e-mail.</strong> Isso é feito nas configurações de DNS do domínio, com os registros que o provedor indicar. O principal se chama MX e diz para onde as mensagens devem ir.</li>
  <li><strong>Crie as contas.</strong> Use o mesmo padrão para todo mundo, como nome@ ou nome.sobrenome@, e crie os endereços por função que fizerem sentido.</li>
  <li><strong>Configure no computador e no celular.</strong> Instale as contas nos aplicativos que a equipe já usa e teste o envio e o recebimento, inclusive para endereços de fora.</li>
  <li><strong>Padronize a assinatura.</strong> Nome, cargo, telefone e site, com as cores e a fonte da marca, iguais para toda a equipe.</li>
</ol>

<figure class="post-figure"><img src="/blog/email-corporativo-dominio-proprio/corpo-email-corporativo-dominio-proprio-1520x855.jpg" alt="Quadro com dados sobre e-mail corporativo com domínio próprio: domínio .br a R$ 40 por ano, 6 milhões de domínios .br e regras do Gmail contra spam" width="1520" height="855" loading="lazy"></figure>

<h2>Configure SPF, DKIM e DMARC para não cair no spam</h2>
<p>Um e-mail com domínio próprio só passa credibilidade se chegar na caixa de entrada. Desde fevereiro de 2024, o Google exige que todos que enviam mensagens para contas do Gmail configurem SPF ou DKIM no domínio. Quem envia mais de 5 mil mensagens por dia para o Gmail também precisa configurar o DMARC.</p>
<ul>
  <li><strong>SPF:</strong> diz quais servidores podem enviar e-mails em nome do seu domínio.</li>
  <li><strong>DKIM:</strong> coloca uma assinatura digital em cada mensagem, para provar que ela saiu mesmo da sua empresa e não foi alterada no caminho.</li>
  <li><strong>DMARC:</strong> orienta os provedores sobre o que fazer com mensagens que falham nessas verificações.</li>
</ul>
<p>Os três são registros simples no DNS do domínio, e o provedor de e-mail informa os valores. O Google também pede que a taxa de spam fique abaixo de 0,3%. Na prática: não mande mensagens em massa para listas compradas ou para quem não pediu.</p>

<h2>Checklist do e-mail corporativo</h2>
<ul>
  <li>Domínio registrado no CNPJ da empresa, com a data de renovação anotada.</li>
  <li>Registro MX apontando para o serviço de e-mail.</li>
  <li>SPF e DKIM configurados, e DMARC se a empresa enviar muitas mensagens.</li>
  <li>Contas no mesmo padrão de nome e endereços por função.</li>
  <li>Assinatura padronizada com a identidade visual da marca.</li>
  <li>Cópia de segurança das caixas de e-mail.</li>
</ul>

<h2>Vai trocar de hospedagem? Faça o backup dos e-mails antes</h2>
<p>Contratos, propostas e conversas com clientes costumam estar só no e-mail. Na troca de hospedagem ou de provedor, as caixas precisam ir junto, senão esse histórico se perde. Antes de qualquer mudança, faça uma cópia de segurança e só desative o serviço antigo depois de conferir que tudo chegou ao novo.</p>
<p>Foi o que fizemos para a AGI Engenharia, junto com o site institucional. Nas palavras do cliente: “Fizeram o backup dos nossos e-mails de forma excepcional para a migração da nossa hospedagem.” Veja como funciona o serviço de <a href="/backup-de-emails-corporativos/">backup e migração de e-mails corporativos</a>.</p>
<p>E se o domínio vai estrear junto com um site novo, vale ler também <a href="/blog/site-institucional-ou-landing-page/">site institucional ou landing page: qual a sua empresa precisa</a>.</p>

<h2>Perguntas frequentes</h2>

<h2>Dá para ter e-mail corporativo sem ter site?</h2>
<p>Dá. O e-mail depende só do domínio e de um serviço de e-mail. Mas, como o domínio é o mesmo, vale aproveitar e colocar pelo menos uma página no ar: quem recebe a sua mensagem costuma visitar o endereço que aparece depois do @.</p>

<h2>Quanto custa um domínio .com.br?</h2>
<p>O registro de um domínio .br custa R$ 40 por ano, segundo o NIC.br. O serviço de e-mail é cobrado à parte e o preço varia conforme o provedor e o número de contas.</p>

<h2>Por que meus e-mails estão caindo no spam?</h2>
<p>Um motivo comum é o domínio sem autenticação. Desde 2024, o Google exige SPF ou DKIM de quem envia para o Gmail, e DMARC de quem envia mais de 5 mil mensagens por dia. Confira esses registros no DNS do domínio com o seu provedor de e-mail.</p>

<h2>Perco meus e-mails se trocar de hospedagem?</h2>
<p>Só se as caixas não forem levadas junto. Faça o backup antes da mudança e migre as mensagens para o novo serviço antes de cancelar o antigo.</p>

<p>Quer o e-mail, o site e a marca da sua empresa no mesmo padrão? <a href="/#orcamento">Peça um orçamento personalizado</a> e receba a resposta em até 24h. Identidade visual, site e redes sociais no mesmo padrão profissional.</p>
`,
  },
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
