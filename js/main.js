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
  function initForm() {
    const form = document.getElementById("form-orcamento");
    const status = document.getElementById("form-status");
    if (!form) return; // páginas de serviço não têm formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const invalid = [...form.elements].find((el) => el.willValidate && !el.checkValidity());
      status.hidden = false;
      if (invalid) {
        const label = form.querySelector(`label[for="${invalid.id}"]`)?.textContent.replace(" *", "");
        status.textContent = `Preencha o campo "${label}" para enviar.`;
        invalid.focus();
        return;
      }
      // TODO: conectar a um serviço de envio (Formspree, e-mail, WhatsApp...).
      status.textContent = "O envio ainda não está configurado neste protótipo.";
    });
  }
})();
