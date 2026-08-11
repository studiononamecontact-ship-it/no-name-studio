// ============================================================
// NO NAME STUDIO, interactions one-page
// grille au curseur, hero (barres qui se retractent), reveals,
// accordeon services, portfolio scroll horizontal + popups,
// modal de devis.
// ============================================================

// desactive la restauration automatique du scroll par le navigateur : au chargement ou au
// rafraichissement de la page, on veut toujours arriver en haut sur le rideau du hero intact,
// jamais au milieu d'un defilement precedent (sinon ScrollTrigger peut initialiser ses bornes
// a partir d'une position de scroll qui ne correspond plus a la realite une fois le navigateur
// revenu en arriere, et l'animation reste desynchronisee du scroll jusqu'au refresh suivant).
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (window.scrollY !== 0) window.scrollTo(0, 0);

const SERVICES = {
  branding: { label: "Branding", items: ["Logo", "Typographie", "Charte graphique", "Mini charte graphique"] },
  print: {
    label: "Print",
    items: ["Carte de visite", "Flyer", "Dépliant", "Affiche", "Affiche événement", "Packaging", "Magazine", "Kakemono", "Signalétique", "Covering", "Vitrophanie"],
  },
  web: { label: "Web", items: ["Maquette site web", "Maquette application"] },
  motion: { label: "Motion & vidéo", items: ["Motion design", "Montage vidéo longue", "Montage vidéo courte"] },
};

const PORTFOLIO = {
  branding: {
    title: "Branding",
    projects: [
      {
        key: "amano",
        type: "image",
        cover: { src: "images/amano/branding/amano-affiche-boite.jpg", label: "Amano, branding" },
        gallery: [
          { src: "images/amano/branding/amano-cover-desktop.jpg", label: "Amano, présentation desktop" },
          { src: "images/amano/branding/amano-cover-mobile.jpg", label: "Amano, présentation mobile" },
          { src: "images/amano/branding/amano-logo-typo.jpg", label: "Amano, logotype" },
          { src: "images/amano/branding/amano-logo-icone.jpg", label: "Amano, icône" },
          { src: "images/amano/branding/amano-logo-secondaire.jpg", label: "Amano, logo secondaire" },
          { src: "images/amano/branding/amano-devanture.jpg", label: "Amano, devanture" },
          { src: "images/amano/branding/amano-menu.jpg", label: "Amano, menu" },
          { src: "images/amano/branding/amano-sac.jpg", label: "Amano, sac packaging" },
          { src: "images/amano/branding/amano-tshirt-1.jpg", label: "Amano, t-shirt" },
          { src: "images/amano/branding/amano-tshirt-2.jpg", label: "Amano, t-shirt" },
          { src: "images/amano/branding/amano-tote-bag.jpg", label: "Amano, tote bag" },
          { src: "images/amano/branding/amano-web-pc.jpg", label: "Amano, site web" },
          { src: "images/amano/branding/amano-web-phone.jpg", label: "Amano, application mobile" },
          { src: "images/amano/branding/amano-insta-original.jpg", label: "Amano, story instagram" },
          { src: "images/amano/branding/amano-insta-bbq.jpg", label: "Amano, story instagram" },
          { src: "images/amano/branding/amano-insta-nutella.jpg", label: "Amano, story instagram" },
          { src: "images/amano/branding/amano-affiche-boite.jpg", label: "Amano, affiche" },
          { src: "images/amano/branding/amano-affiche-halloween.jpg", label: "Amano, affiche événement" },
          { src: "images/amano/branding/amano-stickers-focaccia.jpg", label: "Amano, stickers" },
        ],
      },
      {
        key: "valerian",
        type: "image",
        cover: { src: "images/valerian/branding/valerian-logo-01.jpg", label: "Maison Valérian, branding" },
        gallery: [
          { src: "images/valerian/branding/valerian-logo-01.jpg", label: "Maison Valérian, logo" },
          { src: "images/valerian/branding/valerian-logo-02.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-03.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-04.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-05.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-06.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-07.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-08.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-09.jpg", label: "Maison Valérian, variante logo" },
          { src: "images/valerian/branding/valerian-logo-10.jpg", label: "Maison Valérian, variante logo" },
        ],
      },
      {
        key: "sipmysign",
        type: "image",
        cover: { src: "images/sipmysign/branding/sms-cover-logo.jpg", label: "Sip My Sign, branding" },
        gallery: [
          { src: "images/sipmysign/branding/sms-cover-logo.jpg", label: "Sip My Sign, mockup gobelet" },
          { src: "images/sipmysign/branding/sms-shaker-balance.jpg", label: "Sip My Sign, shaker Balance" },
          { src: "images/sipmysign/branding/sms-shaker-belier.jpg", label: "Sip My Sign, shaker Bélier" },
          { src: "images/sipmysign/branding/sms-shaker-lion.jpg", label: "Sip My Sign, shaker Lion" },
          { src: "images/sipmysign/branding/sms-shaker-scorpion.jpg", label: "Sip My Sign, shaker Scorpion" },
          { src: "images/sipmysign/branding/sms-shaker-taureau.jpg", label: "Sip My Sign, shaker Taureau" },
          { src: "images/sipmysign/branding/sms-logo-01.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-02.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-03.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-04.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-05.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-06.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-07.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-08.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-affiche-sucette-01.jpg", label: "Sip My Sign, affiche" },
          { src: "images/sipmysign/branding/sms-affiche-sucette-02.jpg", label: "Sip My Sign, affiche" },
          { src: "images/sipmysign/branding/sms-sachet-belier-taureau.jpg", label: "Sip My Sign, sachet" },
          { src: "images/sipmysign/branding/sms-mockup-affiche-01.jpg", label: "Sip My Sign, mockup affiche" },
          { src: "images/sipmysign/branding/sms-mockup-affiche-02.jpg", label: "Sip My Sign, mockup affiche" },
        ],
      },
      {
        key: "brut",
        type: "image",
        cover: { src: "images/brut/branding/brut-cup-full.jpg", label: "Brut, branding" },
        gallery: [
          { src: "images/brut/branding/brut-cup-full.jpg", label: "Brut, mockup gobelet" },
          { src: "images/brut/branding/brut-logo-vert.jpg", label: "Brut, variante logo" },
          { src: "images/brut/branding/brut-maquette.jpg", label: "Brut, maquette site" },
          { src: "images/brut/branding/brut-onepage.jpg", label: "Brut, one page", scrollable: true },
          { src: "images/brut/branding/brut-affiche.jpg", label: "Brut, affiche" },
          { src: "images/brut/branding/brut-tote-bag.jpg", label: "Brut, tote bag" },
          { src: "images/brut/branding/brut-vitrophanie.jpg", label: "Brut, vitrophanie" },
          { src: "images/brut/branding/brut-polo.jpg", label: "Brut, polo" },
          { src: "images/brut/branding/brut-tablier.jpg", label: "Brut, tablier" },
          { src: "images/brut/branding/brut-tampon.jpg", label: "Brut, tampon" },
          { src: "images/brut/branding/brut-affiche-abribus.jpg", label: "Brut, affiche abribus" },
        ],
      },
    ],
  },
  print: {
    title: "Print",
    projects: [
      {
        key: "amano",
        type: "image",
        cover: { src: "images/amano/print/amano-affiche-st-valentin.jpg", label: "Amano, print" },
        gallery: [
          { src: "images/amano/print/amano-affiche-boite.jpg", label: "Amano, affiche boîte" },
          { src: "images/amano/print/amano-affiche-focaccia.jpg", label: "Amano, affiche focaccia" },
          { src: "images/amano/print/amano-affiche-halloween.jpg", label: "Amano, affiche Halloween" },
          { src: "images/amano/print/amano-affiche-paques.jpg", label: "Amano, affiche Pâques" },
          { src: "images/amano/print/amano-affiche-st-valentin.jpg", label: "Amano, affiche St-Valentin" },
          { src: "images/amano/branding/amano-stickers-focaccia.jpg", label: "Amano, stickers" },
          { src: "images/amano/branding/amano-tote-bag.jpg", label: "Amano, tote bag" },
          { src: "images/amano/branding/amano-menu.jpg", label: "Amano, menu" },
          { src: "images/amano/branding/amano-sac.jpg", label: "Amano, sac packaging" },
          { src: "images/amano/print/amano-carte-visite.jpg", label: "Amano, carte de visite" },
        ],
      },
      {
        key: "valerian",
        type: "image",
        cover: { src: "images/valerian/print/valerian-livret-couverture.jpg", label: "Maison Valérian, print" },
        gallery: [
          { src: "images/valerian/print/valerian-livret-couverture.jpg", label: "Maison Valérian, couverture livret" },
          { src: "images/valerian/print/valerian-livret-p1-2.jpg", label: "Maison Valérian, livret pages 1 et 2" },
          { src: "images/valerian/print/valerian-livret-p3-4.jpg", label: "Maison Valérian, livret pages 3 et 4" },
          { src: "images/valerian/print/valerian-livret-autre-1.jpg", label: "Maison Valérian, livret" },
          { src: "images/valerian/print/valerian-livret-autre-2.jpg", label: "Maison Valérian, livret" },
          { src: "images/valerian/print/valerian-livret-dernieres.jpg", label: "Maison Valérian, dernières pages" },
          { src: "images/valerian/print/valerian-carte-visite.jpg", label: "Maison Valérian, carte de visite" },
          { src: "images/valerian/print/valerian-packaging.jpg", label: "Maison Valérian, packaging" },
        ],
      },
      {
        key: "magazine",
        type: "image",
        cover: { src: "images/magazine/print/magazine-cover.jpg", label: "Magazine, print" },
        gallery: [
          { src: "images/magazine/print/magazine-cover.jpg", label: "Magazine, couverture" },
          { src: "images/magazine/print/magazine-mockup-1.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-2.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-3.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-4.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-5.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-6.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-7.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-8.jpg", label: "Magazine, mise en page" },
          { src: "images/magazine/print/magazine-mockup-9.jpg", label: "Magazine, mise en page" },
        ],
      },
      {
        key: "sipmysign",
        type: "image",
        cover: { src: "images/sipmysign/branding/sms-shaker-balance.jpg", label: "Sip My Sign, print" },
        gallery: [
          { src: "images/sipmysign/branding/sms-shaker-balance.jpg", label: "Sip My Sign, shaker Balance" },
          { src: "images/sipmysign/branding/sms-cover-logo.jpg", label: "Sip My Sign, mockup gobelet" },
          { src: "images/sipmysign/branding/sms-shaker-belier.jpg", label: "Sip My Sign, shaker Bélier" },
          { src: "images/sipmysign/branding/sms-shaker-lion.jpg", label: "Sip My Sign, shaker Lion" },
          { src: "images/sipmysign/branding/sms-shaker-scorpion.jpg", label: "Sip My Sign, shaker Scorpion" },
          { src: "images/sipmysign/branding/sms-shaker-taureau.jpg", label: "Sip My Sign, shaker Taureau" },
          { src: "images/sipmysign/branding/sms-logo-01.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-02.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-03.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-04.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-05.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-06.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-07.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-logo-08.jpg", label: "Sip My Sign, variante logo" },
          { src: "images/sipmysign/branding/sms-affiche-sucette-01.jpg", label: "Sip My Sign, affiche" },
          { src: "images/sipmysign/branding/sms-affiche-sucette-02.jpg", label: "Sip My Sign, affiche" },
          { src: "images/sipmysign/branding/sms-sachet-belier-taureau.jpg", label: "Sip My Sign, sachet" },
          { src: "images/sipmysign/branding/sms-mockup-affiche-01.jpg", label: "Sip My Sign, mockup affiche" },
          { src: "images/sipmysign/branding/sms-mockup-affiche-02.jpg", label: "Sip My Sign, mockup affiche" },
        ],
      },
      {
        key: "affichevoiture",
        type: "image",
        cover: { src: "images/affichevoiture/print/affiche-voiture-01.jpg", label: "Affiche voiture, print" },
        gallery: [
          { src: "images/affichevoiture/print/affiche-voiture-01.jpg", label: "Affiche voiture, mockup mur" },
          { src: "images/affichevoiture/print/affiche-voiture-02.jpg", label: "Affiche voiture, mockup" },
          { src: "images/affichevoiture/print/affiche-voiture-03.jpg", label: "Affiche voiture, planche" },
          { src: "images/affichevoiture/print/affiche-voiture-04.jpg", label: "Affiche voiture, mockup mur" },
        ],
      },
      {
        key: "brut",
        type: "image",
        cover: { src: "images/brut/print/brut-affiche-abribus.jpg", label: "Brut, print" },
        gallery: [
          { src: "images/brut/print/brut-tote-bag.jpg", label: "Brut, tote bag" },
          { src: "images/brut/print/brut-tablier.jpg", label: "Brut, tablier" },
          { src: "images/brut/print/brut-polo.jpg", label: "Brut, polo" },
          { src: "images/brut/print/brut-affiche-abribus.jpg", label: "Brut, affiche abribus" },
        ],
      },
    ],
  },
  web: {
    title: "Web",
    projects: [
      {
        key: "amano",
        type: "image",
        cover: { src: "images/amano/web/amano-mac-phone.jpg", label: "Amano, web" },
        gallery: [
          { src: "images/amano/web/amano-mac-phone.jpg", label: "Amano, mac & phone" },
          { src: "images/amano/web/amano-web-pc.jpg", label: "Amano, site web desktop" },
          { src: "images/amano/web/amano-web-phone.jpg", label: "Amano, site web mobile" },
          { src: "images/amano/web/amano-cover-desktop.jpg", label: "Amano, one page desktop" },
          { src: "images/amano/web/amano-cover-mobile.jpg", label: "Amano, one page mobile" },
          { src: "images/amano/web/amano-post-st-valentin.jpg", label: "Amano, post St-Valentin" },
        ],
      },
      {
        key: "brut",
        type: "image",
        cover: { src: "images/brut/web/brut-maquette.jpg", label: "Brut, web" },
        gallery: [
          { src: "images/brut/web/brut-maquette.jpg", label: "Brut, maquette site" },
          { src: "images/brut/web/brut-onepage.jpg", label: "Brut, one page", scrollable: true },
        ],
      },
    ],
  },
  motion: {
    title: "Motion & vidéo",
    projects: [
      {
        key: "amano",
        type: "video",
        cover: { src: "images/amano/motion/amano-motion-tv.mp4", label: "Amano, motion & vidéo" },
        gallery: [
          { src: "images/amano/motion/amano-motion-tv.mp4", label: "Amano, motion affichage TV" },
          { src: "images/amano/motion/amano-motion-promo.mp4", label: "Amano, vidéo promo" },
          { src: "images/amano/motion/amano-motion-reel.mp4", label: "Amano, reel Instagram" },
        ],
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  initCursorGrid();
  initCustomCursor();
  initHeroPin();
  initReveal();
  initMarquee();
  initServiceRows();
  initPortfolio();
  initQuoteModal();
  initAnchorScroll();
  initEscapeKey();
});

/* ---------------- bandeau logos : boucle infinie, toujours pleine ---------------- */
function initMarquee() {
  const row = document.querySelector(".marquee-row");
  const container = row && row.parentElement;
  if (!row || !container) return;

  const firstTrack = row.querySelector(".marquee-track");
  if (!firstTrack) return;
  const itemsHtml = Array.from(firstTrack.children)
    .map((el) => el.outerHTML)
    .join("");

  // mesure la largeur naturelle d'un jeu complet, hors flux, pour ne pas fausser le rendu
  const probe = document.createElement("div");
  probe.className = "marquee-track";
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.innerHTML = itemsHtml;
  row.appendChild(probe);
  const setWidth = probe.scrollWidth || 1;
  row.removeChild(probe);

  const containerWidth = container.clientWidth || document.documentElement.clientWidth || window.innerWidth || 1280;
  const repeats = Math.max(1, Math.ceil(containerWidth / setWidth));

  row.innerHTML = "";
  for (let half = 0; half < 2; half++) {
    const track = document.createElement("div");
    track.className = "marquee-track";
    if (half === 1) track.setAttribute("aria-hidden", "true");
    track.innerHTML = itemsHtml.repeat(repeats);
    row.appendChild(track);
  }

  const halfWidth = setWidth * repeats;
  const speed = 70; // px/s, vitesse de defilement constante quel que soit le nombre de repetitions
  row.style.setProperty("--marquee-duration", Math.max(12, halfWidth / speed) + "s");
}

/* ---------------- curseur personnalise rond orange "clic" ---------------- */
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  if (!cursor) return;

  document.addEventListener(
    "mousemove",
    (e) => {
      cursor.style.setProperty("--cx", e.clientX + "px");
      cursor.style.setProperty("--cy", e.clientY + "px");
    },
    { passive: true }
  );

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".pf-card")) cursor.classList.add("is-active");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".pf-card") && !e.relatedTarget?.closest(".pf-card")) {
      cursor.classList.remove("is-active");
    }
  });
}

/* ---------------- grille au curseur ---------------- */
function initCursorGrid() {
  const grid = document.querySelector(".cursor-grid");
  if (!grid) return;
  let active = false;

  window.addEventListener(
    "mousemove",
    (e) => {
      grid.style.setProperty("--mx", e.clientX + "px");
      grid.style.setProperty("--my", e.clientY + "px");
      if (!active) {
        active = true;
        grid.classList.add("is-active");
      }
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    active = false;
    grid.classList.remove("is-active");
  });
}

/* ---------------- hero : barres qui se retractent au scroll ---------------- */
function initHeroPin() {
  const hero = document.querySelector(".hero");
  const bars = document.querySelectorAll(".hero-bar");
  const content = document.querySelector(".hero-content");
  if (!hero || !bars.length) return;

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap
      .timeline({
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom bottom", scrub: 0.6 },
      })
      .to(bars, { scaleY: 0, stagger: 0.05, ease: "power2.inOut" }, 0)
      .to(".hero-bar span", { opacity: 0, duration: 0.25 }, 0)
      .fromTo(content, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.4 }, 0.3);

    // deja en haut de page : un coup de molette vers le haut supplementaire referme le rideau tout de suite
    window.addEventListener(
      "wheel",
      (e) => {
        if (window.scrollY <= 0 && e.deltaY < 0) tl.progress(0);
      },
      { passive: true }
    );

    // recalcule les bornes de l'animation une fois tout charge (polices en font-display:swap,
    // images) : un decalage de mise en page apres le calcul initial des bornes peut sinon
    // laisser le rideau desynchronise du scroll reel
    window.addEventListener("load", () => ScrollTrigger.refresh());
  } else {
    bars.forEach((bar) => (bar.style.display = "none"));
    if (content) content.style.opacity = 1;
  }
}

/* ---------------- reveal au scroll ---------------- */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

/* ---------------- lignes services : clic = ouvre le devis ---------------- */
function initServiceRows() {
  const rows = document.querySelectorAll(".cat-row");
  rows.forEach((row) => {
    const header = row.querySelector(".cat-row-header");
    header.addEventListener("click", (e) => {
      if (e.target.closest("[data-open-quote]")) return;
      if (window.openQuoteModal) window.openQuoteModal(row.dataset.category);
    });

    // le panneau se deplie au survol ET au focus clavier (CSS :hover, :focus-within) ;
    // aria-expanded doit refleter le meme etat pour les lecteurs d'ecran
    const setExpanded = (expanded) => header.setAttribute("aria-expanded", String(expanded));
    row.addEventListener("mouseenter", () => setExpanded(true));
    row.addEventListener("mouseleave", () => setExpanded(false));
    row.addEventListener("focusin", () => setExpanded(true));
    row.addEventListener("focusout", (e) => {
      if (!row.contains(e.relatedTarget)) setExpanded(false);
    });
  });
}

/* ---------------- accessibilite clavier pour les elements cliquables non natifs ---------------- */
function makeInteractive(el, label) {
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  if (label) el.setAttribute("aria-label", label);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      el.click();
    }
  });
}

/* ---------------- portfolio : cartes, scroll horizontal, popups ---------------- */
let activeProject = null;
let lightboxIndex = 0;

function initPortfolio() {
  document.querySelectorAll(".pf-section").forEach((section) => {
    const key = section.dataset.category;
    const data = PORTFOLIO[key];
    if (!data) return;

    const track = section.querySelector(".pf-track");
    const viewport = section.querySelector(".pf-viewport");
    const isSolo = data.projects.length === 1;

    const buildCard = (project, i, isDecorative) => {
      const cover = project.cover;
      const card = document.createElement("div");
      card.className = "pf-card" + (isSolo ? " pf-card-solo" : "");
      const ph = document.createElement("div");
      ph.className = "ph tone-" + (i + 1);
      ph.setAttribute("data-label", cover.label);
      if (project.type === "video") {
        ph.classList.add("ph-video");
        ph.innerHTML = `<video src="${cover.src}" muted loop playsinline autoplay aria-label="${cover.label}"></video>`;
      } else {
        const img = document.createElement("img");
        img.src = cover.src;
        img.alt = cover.label;
        img.loading = "lazy";
        if (cover.fit === "contain") {
          img.style.objectFit = "contain";
          card.classList.add("pf-card-portrait");
          if (cover.ratio) card.style.aspectRatio = cover.ratio;
        }
        ph.appendChild(img);
      }
      card.appendChild(ph);
      card.addEventListener("click", () => openGallery(key, project.key));
      if (isDecorative) {
        // repetition purement visuelle pour la boucle infinie : masquee des lecteurs d'ecran
        // et retiree de l'ordre de tabulation (sinon meme projet rencontre plusieurs fois)
        card.setAttribute("aria-hidden", "true");
        card.tabIndex = -1;
      } else {
        makeInteractive(card, `${cover.label} : voir la galerie`);
      }
      return card;
    };

    if (isSolo) {
      // un seul projet pour l'instant : une couverture fixe, pas de defilement
      viewport.classList.add("is-solo");
      track.appendChild(buildCard(data.projects[0], 0));
    } else {
      const direction = section.dataset.direction === "rtl" ? "rtl" : "ltr";
      track.classList.add("dir-" + direction);

      // un premier passage pour mesurer la largeur naturelle d'un jeu complet de cartes
      data.projects.forEach((project, i) => track.appendChild(buildCard(project, i)));
      const cardGap = parseFloat(getComputedStyle(track).columnGap) || 22;
      const singleSetWidth = track.scrollWidth + cardGap;
      const containerWidth = viewport.clientWidth || document.documentElement.clientWidth || window.innerWidth || 1280;
      const repeatsPerHalf = Math.max(1, Math.ceil(containerWidth / singleSetWidth));

      // deux moitiees identiques, chacune repetee assez de fois pour couvrir au moins la
      // largeur visible : la ligne est ainsi toujours pleine des l'affichage, et la boucle
      // (translation d'exactement une moitie) ne montre jamais de trou au raccord.
      // seule la toute premiere occurrence (half 0, r 0) reste accessible : les autres sont
      // des repetitions purement visuelles.
      track.innerHTML = "";
      for (let half = 0; half < 2; half++) {
        for (let r = 0; r < repeatsPerHalf; r++) {
          const isDecorative = !(half === 0 && r === 0);
          data.projects.forEach((project, i) => track.appendChild(buildCard(project, i, isDecorative)));
        }
      }

      const halfWidth = singleSetWidth * repeatsPerHalf;
      const speed = 55; // px/s, vitesse constante quel que soit le nombre de cartes/repetitions
      track.style.setProperty("--pf-duration", Math.max(18, halfWidth / speed) + "s");
    }
  });

  initGallery();
  initLightbox();
}

function initGallery() {
  const modal = document.getElementById("gallery-modal");
  if (!modal) return;
  modal.querySelectorAll("[data-close-gallery]").forEach((el) => el.addEventListener("click", closeGallery));
  modal.querySelectorAll(".gallery-panel").forEach((panel) => panel.addEventListener("click", (e) => e.stopPropagation()));
}

// grille de galerie : toujours des lignes completes et alignees (jamais de trous en
// bas comme avec un masonry en colonnes). Le nombre de colonnes vise deux lignes ;
// au-dela d'un certain nombre d'images on plafonne les colonnes et ca defile verticalement.
const GALLERY_MAX_COLS = 6;
const GALLERY_MAX_ROWS_NO_SCROLL = 2;

function galleryGridConfig(count) {
  let cols = Math.max(1, Math.min(GALLERY_MAX_COLS, Math.ceil(count / 2)));
  // moins de 2 colonnes = les images s'empilent plein-largeur au lieu d'etre cote a cote
  // (ex: 2 images) : dans ce cas on privilegie une seule ligne, plus lisible et compacte
  if (cols < 2 && count > 1) cols = count;
  const rows = Math.ceil(count / cols);
  return { cols, rows };
}

function openGallery(key, projectKey) {
  const section = PORTFOLIO[key];
  const project = section && section.projects.find((p) => p.key === projectKey);
  if (!project) return;
  activeProject = project;

  const modal = document.getElementById("gallery-modal");
  const label = document.getElementById("gallery-label");
  const grid = document.getElementById("gallery-grid");

  label.textContent = "portfolio, " + section.title;
  grid.innerHTML = "";

  const count = project.gallery.length;
  const { cols, rows } = galleryGridConfig(count);
  // grille a resolution double (2 demi-colonnes par image) : ca permet de centrer
  // exactement une derniere ligne incomplete meme quand le nombre de cases manquantes
  // est impair (un decalage entier seul ne peut pas centrer un residu impair).
  grid.style.setProperty("--gg-tracks", cols * 2);
  grid.classList.toggle("gallery-grid-scroll", rows > GALLERY_MAX_ROWS_NO_SCROLL);

  project.gallery.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "ph";
    el.setAttribute("data-label", item.label);
    if (project.type === "video") {
      el.classList.add("ph-video");
      el.innerHTML = `<video src="${item.src}" muted loop playsinline autoplay aria-label="${item.label}"></video>`;
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.label;
      img.loading = "lazy";
      el.appendChild(img);
    }
    const row = Math.floor(i / cols);
    const posInRow = i % cols;
    const itemsInRow = Math.min(cols, count - row * cols);
    const missingCols = cols - itemsInRow;
    const trackStart = missingCols + posInRow * 2 + 1;
    el.style.gridColumn = `${trackStart} / span 2`;
    el.style.gridRow = String(row + 1);
    el.addEventListener("click", () => openLightbox(i));
    makeInteractive(el, `${item.label} : agrandir`);
    grid.appendChild(el);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeGallery() {
  const modal = document.getElementById("gallery-modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.querySelectorAll("[data-close-lightbox]").forEach((el) => el.addEventListener("click", closeLightbox));
  document.getElementById("lightbox-next").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex + 1) % activeProject.gallery.length;
    renderLightbox();
  });
  document.getElementById("lightbox-prev").addEventListener("click", () => {
    lightboxIndex = (lightboxIndex - 1 + activeProject.gallery.length) % activeProject.gallery.length;
    renderLightbox();
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  renderLightbox();
  const modal = document.getElementById("lightbox-modal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function sizeLightboxWrap(wrap, ratio) {
  // calcule une taille en pixels (pas juste un ratio CSS) pour que la popup s'ouvre en grand,
  // au format reel de l'image, sans jamais la recadrer
  const maxW = window.innerWidth * 0.82;
  const maxH = window.innerHeight * 0.68;
  let w = maxW;
  let h = w / ratio;
  if (h > maxH) {
    h = maxH;
    w = h * ratio;
  }
  wrap.style.width = Math.round(w) + "px";
  wrap.style.height = Math.round(h) + "px";
}

function renderLightbox() {
  const item = activeProject.gallery[lightboxIndex];
  const wrap = document.getElementById("lightbox-image").parentElement;
  wrap.innerHTML = "";
  wrap.classList.remove("is-scrollable");
  const label = `${item.label} (${lightboxIndex + 1}/${activeProject.gallery.length})`;

  if (item.scrollable) {
    // image longue (ex : one page) : s'ouvre en grand et se parcourt au scroll, jamais reduite pour rentrer
    wrap.classList.add("is-scrollable");
    wrap.style.width = Math.round(Math.min(window.innerWidth * 0.5, 560)) + "px";
    wrap.style.height = Math.round(window.innerHeight * 0.82) + "px";
    const badge = document.createElement("span");
    badge.className = "lightbox-scroll-label";
    badge.textContent = label;
    const inner = document.createElement("div");
    inner.className = "lightbox-scroll-inner";
    inner.id = "lightbox-image";
    inner.innerHTML = `<img src="${item.src}" alt="${item.label}" />`;
    wrap.appendChild(badge);
    wrap.appendChild(inner);
    return;
  }

  const el = document.createElement("div");
  el.className = "ph lightbox-image";
  el.id = "lightbox-image";
  el.setAttribute("data-label", label);
  if (activeProject.type === "video") {
    el.classList.add("ph-video");
    el.innerHTML = `<video src="${item.src}" muted loop playsinline autoplay controls aria-label="${label}"></video>`;
    sizeLightboxWrap(wrap, 16 / 9); // taille de depart le temps de connaitre le format reel
    const videoEl = el.querySelector("video");
    const applyVideoRatio = () => {
      if (videoEl.videoWidth && videoEl.videoHeight) sizeLightboxWrap(wrap, videoEl.videoWidth / videoEl.videoHeight);
    };
    if (videoEl.readyState >= 1) applyVideoRatio();
    else videoEl.addEventListener("loadedmetadata", applyVideoRatio, { once: true });
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.label;
    el.appendChild(img);
    sizeLightboxWrap(wrap, 1); // taille de depart le temps du chargement, ajustee juste apres
    const probe = new Image();
    probe.onload = () => sizeLightboxWrap(wrap, probe.naturalWidth / probe.naturalHeight);
    probe.src = item.src;
  }
  wrap.appendChild(el);
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

/* ---------------- modal de devis ---------------- */
const QUOTE_FORM_ENDPOINT = "https://formspree.io/f/mqpzqlay";

function initQuoteModal() {
  const modal = document.getElementById("quote-modal");
  if (!modal) return;
  const label = document.getElementById("quote-category");
  const checklist = document.getElementById("quote-checklist");
  const form = document.getElementById("quote-form");
  const success = document.getElementById("quote-success");
  const errorMsg = document.getElementById("quote-error");
  const submitBtn = document.getElementById("quote-submit-btn");

  function openQuote(categoryKey) {
    const cat = SERVICES[categoryKey] || { label: "Votre projet", items: [] };
    label.textContent = cat.label;
    checklist.innerHTML = cat.items
      .map(
        (item, i) => `
        <label class="modal-checkbox">
          <input type="checkbox" name="service" value="${item}" ${i === 0 ? "checked" : ""} />
          <span>${item}</span>
        </label>`
      )
      .join("");
    form.reset();
    form.hidden = false;
    success.hidden = true;
    errorMsg.hidden = true;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeQuote() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  document.querySelectorAll("[data-open-quote]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openQuote(btn.dataset.openQuote);
    });
  });

  modal.querySelectorAll("[data-close-quote]").forEach((el) => el.addEventListener("click", closeQuote));
  modal.querySelectorAll(".modal-panel").forEach((panel) => panel.addEventListener("click", (e) => e.stopPropagation()));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMsg.hidden = true;

    const firstname = document.getElementById("quote-firstname").value.trim();
    const lastname = document.getElementById("quote-lastname").value.trim();
    const email = document.getElementById("quote-email").value.trim();
    const message = document.getElementById("quote-message").value.trim();
    const deadline = document.getElementById("quote-deadline").value;
    const services = Array.from(checklist.querySelectorAll("input:checked")).map((el) => el.value);

    const payload = new FormData();
    payload.append("prenom", firstname);
    payload.append("nom", lastname);
    payload.append("email", email);
    payload.append("categorie", label.textContent);
    payload.append("prestations", services.length ? services.join(", ") : "aucune");
    payload.append("message", message || "(non renseigné)");
    payload.append("deadline", deadline || "non renseignée");
    payload.append("_subject", `Demande de devis - ${label.textContent}`);

    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi en cours...";

    try {
      const response = await fetch(QUOTE_FORM_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Formspree error " + response.status);
      form.hidden = true;
      success.hidden = false;
    } catch (err) {
      errorMsg.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Envoyer la demande";
    }
  });

  window.closeQuoteModal = closeQuote;
  window.openQuoteModal = openQuote;
}

/* ---------------- fermeture au clavier ---------------- */
function initEscapeKey() {
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const lightbox = document.getElementById("lightbox-modal");
    if (lightbox.classList.contains("is-open")) return closeLightbox();
    const gallery = document.getElementById("gallery-modal");
    if (gallery.classList.contains("is-open")) return closeGallery();
    const quote = document.getElementById("quote-modal");
    if (quote.classList.contains("is-open") && window.closeQuoteModal) window.closeQuoteModal();
  });
}

/* ---------------- ancres avec scroll doux ---------------- */
function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
