document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ once: true, offset: 50, duration: 800, easing: "ease-out" });

  const clubVideo = document.getElementById("video-club");
  if (clubVideo)
    clubVideo.play().catch(() => console.log("Auto-play restricted."));
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

const dictionary = {
  fr: {
    brand: "COCORICOACH",
    nav_home: "Accueil",
    nav_apps: "Applications",
    nav_expertise: "Expertise",
    nav_data: "La Data",
    nav_pricing: "Tarifs",
    login_coach: "Login Coach",
    login_club: "Login Club",
    hero_coach_title: "Gérez votre activité.<br/>Boostez vos athlètes.",
    btn_explore_app: "Explorer l'application",
    hero_club_title: "Le lien entre<br/>le terrain et la data.",
    btn_explore_club: "Découvrir l'offre Club",
    stat_clubs: "Clubs Partenaires",
    stat_athletes: "Athlètes Suivis",
    stat_satisfaction: "Taux de Satisfaction",
    exp_title: "Nos Domaines d'Expertise",
    cat_title_1: "SUIVI DE L'ATHLÈTE",
    cat_title_2: "DATA & ANALYTICS",
    cat_title_3: "PLANIFICATION",
    data_title: "Une interface pensée pour la performance.",
    pricing_title: "Des Grilles Tarifaires Claires",
    testi_title: "Approuvé par les pros",
  },
  en: {
    brand: "COCORICOACH",
    nav_home: "Home",
    nav_apps: "Applications",
    nav_expertise: "Expertise",
    nav_data: "Data",
    nav_pricing: "Pricing",
    login_coach: "Coach Login",
    login_club: "Club Login",
    hero_coach_title: "Manage your business.<br/>Boost your athletes.",
    btn_explore_app: "Explore Application",
    hero_club_title: "The bridge between<br/>the pitch and data.",
    btn_explore_club: "Discover Club Offer",
    stat_clubs: "Partner Clubs",
    stat_athletes: "Monitored Athletes",
    stat_satisfaction: "Satisfaction Rate",
    exp_title: "Our Expertise",
    cat_title_1: "ATHLETE MONITORING",
    cat_title_2: "DATA & ANALYTICS",
    cat_title_3: "PLANNING",
    data_title: "An interface designed for performance.",
    pricing_title: "Clear Pricing Plans",
    testi_title: "Trusted by professionals",
  },
};

let currentLang = "fr";
const langBtn = document.getElementById("langToggle");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    langBtn.textContent = currentLang === "fr" ? "EN" : "FR";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dictionary[currentLang] && dictionary[currentLang][key])
        el.innerHTML = dictionary[currentLang][key];
    });
  });
}
