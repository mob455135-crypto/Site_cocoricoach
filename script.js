document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ once: true, offset: 50, duration: 800, easing: "ease-out" });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const brandText = document.querySelector(".brand-text");
  if (navbar && navbar.classList.contains("fixed-top")) {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white", "shadow-sm");
      navbar.classList.remove("glass-nav");
      if (brandText) {
        brandText.classList.remove("text-white");
        brandText.classList.add("text-primary-dark");
      }
    } else {
      if (
        document.querySelector(".portal-hero-container") ||
        document.querySelector(".fullscreen-hero-canvas")
      ) {
        navbar.classList.remove("bg-white", "shadow-sm");
        navbar.classList.add("glass-nav");
        if (brandText) {
          brandText.classList.add("text-white");
          brandText.classList.remove("text-primary-dark");
        }
      }
    }
  }
});

/* Gestion Multilingue Basique (tu pourras compléter l'anglais si besoin) */
let currentLang = "fr";
const langBtn = document.getElementById("langToggle");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    langBtn.textContent = currentLang === "fr" ? "EN" : "FR";
    // Ajoute ta logique de dictionnaire ici
  });
}
