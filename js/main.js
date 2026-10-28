(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = typeof window.gsap !== "undefined";

  const nav = document.getElementById("nav");

  initNavScroll();
  initForm();
  initButtonLight();
  initHeroCards();
  initTestimonials();

  // Sem GSAP (CDN bloqueado) ou com movimento reduzido: mostra tudo parado.
  if (!hasGsap || reduced) return;

  gsap.registerPlugin(ScrollTrigger);
  initProjects();

  /* ---------- Menu: encolhe e fixa ao rolar ---------- */
  function initNavScroll() {
    const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- Hero: clicar num card lateral traz ele para o centro ---------- */
  function initHeroCards() {
    const cards = [...document.querySelectorAll(".hero-card")];
    const order = ["left", "center", "right"];
    const label = (card, pos) => {
      const name = card.querySelector("b")?.textContent || card.querySelector(".hero-card__label")?.textContent || "projeto";
      if (pos === "center") card.removeAttribute("aria-label");
      else card.setAttribute("aria-label", `Ver ${name} no centro`);
    };
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const pos = card.dataset.pos;
        if (pos === "center") return;
        // gira as posições: o clicado vai pro centro e os outros andam junto
        const shift = pos === "left" ? 1 : -1;
        cards.forEach((c) => {
          const i = order.indexOf(c.dataset.pos);
          c.dataset.pos = order[(i + shift + 3) % 3];
          label(c, c.dataset.pos);
        });
      });
    });
  }

  /* ---------- Depoimentos: setas trocam o depoimento (só aparecem com 2 ou mais) ---------- */
  function initTestimonials() {
    const slides = [...document.querySelectorAll(".testimonial__slide")];
    const nav = document.getElementById("depoimentos-nav");
    if (slides.length < 2) return;
    const count = nav.querySelector(".testimonial__count");
    let current = 0;
    const show = (i) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle("is-active", k === current);
        s.setAttribute("aria-hidden", String(k !== current));
      });
      count.textContent = `${current + 1} / ${slides.length}`;
    };
    nav.hidden = false;
    nav.querySelectorAll(".testimonial__arrow").forEach((btn) => {
      btn.addEventListener("click", () => show(current + Number(btn.dataset.dir)));
    });
    show(0);
  }

  /* ---------- Botões laranja: a luz do hover segue o cursor ---------- */
  function initButtonLight() {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--mx", `${e.clientX - r.left}px`);
        btn.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  }

  /* ---------- Projetos: cards empilhados (mecânica do uxfol.io) ----------
     Enquanto o próximo card sobe do pé da tela até grudar (top 104px), o card de baixo
     encolhe de 1 para 0.95. A película escura (até 2.5%) começa 54px depois que ele grudou. */
  function initProjects() {
    const STICKY_TOP = 104;
    const STEP = 532 + 40; // altura do card + espaço entre cards

    gsap.matchMedia().add("(min-width: 1024px)", () => {
      const cards = [...document.querySelectorAll(".feature-card")];
      cards.slice(0, -1).forEach((card, i) => {
        const next = cards[i + 1];
        ScrollTrigger.create({
          trigger: next,
          start: "top bottom",
          end: `top ${STICKY_TOP}px`,
          scrub: true,
          onRefresh: (self) => card.style.setProperty("--feature-card-scale", (1 - 0.05 * self.progress).toFixed(4)),
          onUpdate: (self) => card.style.setProperty("--feature-card-scale", (1 - 0.05 * self.progress).toFixed(4)),
        });
        ScrollTrigger.create({
          trigger: next,
          start: `top ${STICKY_TOP + STEP - 54}px`,
          end: `top ${STICKY_TOP}px`,
          scrub: true,
          onRefresh: (self) => card.style.setProperty("--feature-card-overlay-opacity", (0.025 * self.progress).toFixed(4)),
          onUpdate: (self) => card.style.setProperty("--feature-card-overlay-opacity", (0.025 * self.progress).toFixed(4)),
        });
      });
      return () => cards.forEach((c) => {
        c.style.removeProperty("--feature-card-scale");
        c.style.removeProperty("--feature-card-overlay-opacity");
      });
    });
  }

  /* ---------- Formulário ---------- */
  /* ---------- Formulário de orçamento: envia por e-mail (FormSubmit) ----------
     O pedido chega em ENVIO_PARA; o cliente recebe uma confirmação automática no
     e-mail que digitou. No primeiro envio o FormSubmit manda um e-mail de ativação
     para ENVIO_PARA: é só clicar no link uma vez. */
  function initForm() {
    const form = document.getElementById("form-orcamento");
    const status = document.getElementById("form-status");
    if (!form) return; // páginas de serviço não têm formulário

    const ENVIO_PARA = "esdras.dsgn@gmail.com";
    const ENDPOINT = `https://formsubmit.co/ajax/${ENVIO_PARA}`;
    const WHATSAPP = "https://wa.me/5561983586190";
    const button = form.querySelector(".form__submit");
    const buttonHtml = button.innerHTML;

    const mostra = (tipo, html) => {
      status.hidden = false;
      status.dataset.tipo = tipo; // "erro" | "ok" | "enviando"
      status.innerHTML = html;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const invalid = [...form.elements].find((el) => el.willValidate && !el.checkValidity());
      if (invalid) {
        const label = form.querySelector(`label[for="${invalid.id}"]`)?.textContent.replace(" *", "");
        const motivo = invalid.type === "email" && invalid.value ? `Confira o e-mail digitado.` : `Preencha o campo "${label}" para enviar.`;
        mostra("erro", motivo);
        invalid.focus();
        return;
      }

      const dados = Object.fromEntries(new FormData(form));
      if (dados._honey) return; // campo-armadilha preenchido: robô

      const corpo = {
        Nome: dados.nome,
        email: dados.email, // o FormSubmit usa este campo para o "responder" e para a confirmação
        Telefone: dados.telefone || "Não informado",
        Empresa: dados.empresa || "Não informada",
        "Serviço de interesse": dados.servico,
        Mensagem: dados.mensagem,
        _subject: `Novo pedido de orçamento pelo site: ${dados.nome}`,
        _template: "table",
        _captcha: "false",
        _autoresponse:
          "Olá! Recebemos o seu pedido de orçamento na Reload Estúdios. Vamos responder em até 24h, de segunda a sexta, das 9h às 18h. Se preferir, fale com a gente no WhatsApp: (61) 98358-6190.",
      };

      button.disabled = true;
      button.textContent = "ENVIANDO...";
      mostra("enviando", "Enviando o seu pedido...");

      try {
        const resposta = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(corpo),
        });
        const json = await resposta.json().catch(() => ({}));
        // Antes da ativação o FormSubmit responde "needs Activation" e não entrega o pedido.
        if (/activat/i.test(json.message || "")) {
          mostra(
            "erro",
            `O formulário está sendo ativado e o seu pedido não foi entregue. Enquanto isso, fale com a gente pelo <a href="${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a>.`,
          );
          return;
        }
        if (!resposta.ok || String(json.success) !== "true") throw new Error(json.message || `HTTP ${resposta.status}`);
        form.reset();
        mostra("ok", "Pedido enviado! Enviamos uma confirmação para o seu e-mail e respondemos em até 24h.");
      } catch (erro) {
        console.error("Falha no envio do formulário:", erro);
        mostra(
          "erro",
          `Não foi possível enviar agora. Tente de novo em instantes ou fale com a gente pelo <a href="${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a>.`,
        );
      } finally {
        button.disabled = false;
        button.innerHTML = buttonHtml;
      }
    });
  }
})();
