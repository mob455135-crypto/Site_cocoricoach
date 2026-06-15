document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ once: true, offset: 50, duration: 800, easing: "ease-out" });
  applyLanguage(getCurrentLang());
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

/* ====================================================
   SYSTEME DE TRADUCTION FR / EN
==================================================== */

const translations = {
  fr: {
    // ---- NAVBAR ----
    "nav-accueil": "Accueil",
    "nav-expertise": "Expertise",
    "nav-ladata": "La Data",
    "nav-tarifs": "Tarifs",
    "nav-temoignages": "Témoignages",
    "nav-espacecoachs": "Espace Coachs",
    "nav-espaceclubs": "Espace Clubs",
    "nav-solutions": "Solutions",
    "nav-contact": "Contact",
    "nav-quisommesnous": "Qui sommes-nous ?",

    // ---- HERO ACCUEIL (split screen) ----
    "home-badge-coach": "Indépendants & Salles",
    "home-title-coach": "Gérez votre activité.<br />Boostez vos athlètes.",
    "home-desc-coach": "Pilotez votre business, planifiez vos séances et vendez vos programmes avec une interface moderne.",
    "home-cta-coach": "Espace Coach",

    "home-badge-club": "Clubs & Structures Pro",
    "home-title-club": "Le lien direct entre<br />le terrain et la data.",
    "home-desc-club": "Centralisez les métriques physiques et sportives pour piloter la performance collective en temps réel.",
    "home-cta-club": "Espace Club",

    // ---- STATS ----
    "stats-clubs": "Clubs Partenaires",
    "stats-athletes": "Athlètes Suivis",
    "stats-satisfaction": "Taux de Satisfaction",

    // ---- EXPERTISE ----
    "expertise-title": "Nos Domaines d'Expertise",
    "expertise-athlete": "SUIVI DE L'ATHLÈTE",
    "expertise-data": "DATA & ANALYTICS",
    "expertise-planning": "PLANIFICATION",

    // ---- DASHBOARD / LA DATA ----
    "dashboard-badge": "Technologie SaaS",
    "dashboard-title": "Une interface pensée pour la performance.",
    "dashboard-desc": "Visualisez instantanément l'état de forme de vos sportifs. Notre plateforme offre une lecture fluide de la data (RPE, HRV) pour des décisions rapides sur le terrain.",
    "dashboard-li1": "Tableaux de bord et graphiques RPE",
    "dashboard-li2": "Suivi des indices de récupération (HRV)",
    "dashboard-li3": "Centralisation sécurisée du calendrier",

    // ---- TARIFS ----
    "pricing-title": "Une offre pensée pour votre profil",
    "pricing-subtitle": "Cocoricoach et Cocoricoach Club répondent à deux besoins différents. Choisissez votre profil pour découvrir l'offre adaptée.",
    "pricing-tab-coach": "Voir les offres Coachs & Salles",
    "pricing-tab-club": "Voir les offres Clubs",

    "pricing-coach-name": "Cocoricoach",
    "pricing-coach-heading": "L'outil tout-en-un des coachs & salles indépendantes",
    "pricing-coach-intro": "Soyez visible sans créer de site internet, créez vos séances en quelques clics, suivez vos athlètes, vendez vos programmes, gérez votre salle et pilotez votre business — tout depuis une seule plateforme.",
    "pricing-coach-feat1": "Référencement automatique sur la carte Cocoricoach",
    "pricing-coach-feat2": "Création de séances avancées (superset, EMOM, AMRAP...)",
    "pricing-coach-feat3": "Gestion de salle, planning & réservations",
    "pricing-coach-feat4": "Suivi personnalisé coach / athlète",
    "pricing-coach-feat5": "Vente de programmes et ebooks en ligne",
    "pricing-coach-feat6": "Tableau de bord business (MRR, churn, rétention)",
    "pricing-coach-cta": "Commencer avec Cocoricoach",

    "pricing-suivi-title": "Suivi personnalisé seul",
    "pricing-badge-9": "Jusqu'à 9 : <strong>15€</strong>/m",
    "pricing-badge-19": "9 à 19 : <strong>25€</strong>/m",
    "pricing-badge-20": "+20 : <strong>35€</strong>/m",
    "pricing-suiviprog-title": "Suivi + Programme",
    "pricing-pack-title": "Pack Complet Premium",
    "pricing-pack-desc": "Salles + réservation + programmes + suivi complet",

    "pricing-club-name": "Cocoricoach Club",
    "pricing-club-heading": "Le pilotage complet de la performance collective",
    "pricing-club-intro": "Planification de saison, suivi de charge et de récupération (RPE / HRV), comparaison d'athlètes, calendrier partagé, banque d'exercices commune et suivi individuel des tests physiques — tout pour aligner votre staff.",
    "pricing-club-feat1": "Planification macro et micro-cycles sur l'année",
    "pricing-club-feat2": "Suivi de charge RPE et récupération HRV",
    "pricing-club-feat3": "Comparaison des athlètes sur radars de performance",
    "pricing-club-feat4": "Calendrier collectif partagé par tout le staff",
    "pricing-club-feat5": "Banque d'exercices commune au staff",
    "pricing-club-feat6": "Suivi individuel des tests physiques",
    "pricing-club-promo": "Ou 800€ en paiement unique annuel",
    "pricing-club-li1": "Gestion de la performance collective",
    "pricing-club-li2": "Suivi athlétique, médical et charges",
    "pricing-club-li3": "Communication instantanée du staff",
    "pricing-club-cta": "Demander un devis structure",

    // ---- TEMOIGNAGES ----
    "testimonials-title": "Approuvé par les pros",
    "testi1-text": "\"L'architecture logicielle de Cocoricoach Club a radicalement transformé la centralisation de nos métriques. Le staff technique et médical communique enfin sur un espace unifié.\"",
    "testi1-role": "Directeur de la Performance",
    "testi2-text": "\"Avant, je perdais un temps précieux. Cocoricoach m'a permis de structurer mon business avec la vente en ligne de mes programmes et un suivi parfait.\"",
    "testi2-role": "Préparatrice Physique Indépendante",

    // ---- FOOTER (commun) ----
    "footer-tagline": "Solution complète et souveraine de gestion et d'optimisation de la performance sportive.",
    "footer-solutions-title": "Solutions",
    "footer-solutions-coach": "Cocoricoach Independent",
    "footer-solutions-club": "Cocoricoach Club",
    "footer-resources-title": "Ressources",
    "footer-resources-doc": "Documentation API",
    "footer-networks-title": "Réseaux",
    "footer-whatsapp": " Canal WhatsApp",
    "footer-copyright": "© 2026 Cocoricoach – Tous droits réservés.",
    "footer-mentions": "Mentions légales",
    "footer-cgu": "CGU / CGV",
    "footer-confidentialite": "Confidentialité",

    // ---- HERO PAGE COACH ----
    "coach-hero-title": "Passez de coach à véritable entrepreneur du sport.",
    "coach-hero-desc": "Centralisez l'ensemble des outils nécessaires pour piloter un business de coaching moderne et suivez la performance de vos clients.",
    "coach-hero-cta": "Accéder à la plateforme",

    // ---- HERO PAGE CLUB ----
    "club-hero-title": "Le pilotage ultime de la performance collective.",
    "club-hero-desc": "Centralisez vos données sportives, analysez la charge d'entraînement et optimisez les flux d'informations du staff.",
    "club-hero-cta": "Accéder au Club",

    // ---- QUI SOMMES-NOUS ----
    "qsn-badge": "Notre histoire",
    "qsn-title": "Qui sommes-nous ?",
    "qsn-desc": "Des passionnés de sport et de technologie, qui ont décidé de créer l'outil qu'ils auraient voulu avoir.",
    "qsn-history-label": "L'histoire du projet",
    "qsn-history-title": "Pourquoi on a créé Cocoricoach",
    "qsn-history-p1": "On a créé Cocoricoach parce qu'on en avait assez des outils trop complexes, trop chers, ou pas adaptés à la réalité du terrain.",
    "qsn-history-p2": "On voulait quelque chose de simple, puissant, et directement utilisable — que tu sois coach indépendant ou directeur de performance dans un club professionnel.",
    "qsn-history-p3": "Cocoricoach, c'est le fruit de notre passion pour le sport et la technologie. Une solution pensée par des gens du terrain, pour des gens du terrain.",
    "qsn-vision-title": "Notre vision",
    "qsn-vision-desc": "Rendre la performance sportive accessible à tous — du coach indépendant au club professionnel — grâce à un outil simple, puissant et orienté terrain.",
    "qsn-vision-li1": "Simple & rapide à prendre en main",
    "qsn-vision-li2": "Adapté à tous les profils",
    "qsn-vision-li3": "Orienté performance réelle",
    "qsn-vision-li4": "Un outil conçu par des passionnés",
    "qsn-founders-title": "Les fondateurs",
    "qsn-founders-sub": "Les deux personnes derrière Cocoricoach",
    "qsn-cofounder": "Co-fondateur",
    "qsn-alexis-desc": "Passionné de sport et de technologie, Alexis a co-créé Cocoricoach avec la volonté de simplifier la gestion du coaching sportif et de rendre la performance accessible à tous les profils.",
    "qsn-david-desc": "Fort de son expérience terrain dans le monde du sport, David a co-créé Cocoricoach pour répondre aux vrais besoins des coachs et des clubs — un outil pensé directement depuis le terrain.",
    "qsn-eco-title": "Un écosystème, deux solutions",
    "qsn-eco-sub": "Deux applications pensées pour deux publics distincts",
    "qsn-coach-name": "Cocoricoach",
    "qsn-coach-sub": "Pour les coachs & structures indépendantes",
    "qsn-coach-li1": "Gestion de salle & planning",
    "qsn-coach-li2": "Suivi coach / athlète",
    "qsn-coach-li3": "Vente de programmes",
    "qsn-club-name": "Cocoricoach Club",
    "qsn-club-sub": "Pour les clubs & organisations sportives",
    "qsn-club-li1": "Pilotage de la performance collective",
    "qsn-club-li2": "KPIs & données en temps réel",
    "qsn-club-li3": "Communication staff unifiée",
    "qsn-learnmore": "En savoir plus",
    "qsn-footer-tagline": "Un écosystème, deux solutions pour la performance sportive.",
    "qsn-footer-contact-title": "Contactez-nous",
    "qsn-footer-whatsapp": "WhatsApp & FAQ",
    "qsn-footer-networks-title": "Réseaux Sociaux",

    // ---- PAGE COACH - BLOCS DETAILLES ----
    "coach-b1-title": "Soyez visible, sans créer de site internet",
    "coach-b1-desc": "Votre profil apparaît automatiquement sur la carte Cocoricoach. Athlètes, clubs et salles vous trouvent selon leur localisation, leurs objectifs et le type de structure recherché — sans que vous ayez à créer ou gérer un site.",
    "coach-b1-li1": "Profil public avec vos programmes et offres",
    "coach-b1-li2": "Recherche par localisation, type de structure et objectif",
    "coach-b1-li3": "Visibilité boostée avec le badge Premium",

    "coach-b2-title": "Créez des séances sur-mesure en quelques clics",
    "coach-b2-desc": "Construisez vos entraînements bloc par bloc : séries simples, supersets, circuits, EMOM, AMRAP... Toutes les méthodes d'entraînement sont à portée de clic.",
    "coach-b2-li1": "Bibliothèque de formats : superset, circuit, EMOM, AMRAP...",
    "coach-b2-li2": "Réglages précis : séries, répétitions, %1RM, repos",
    "coach-b2-li3": "Notes personnalisées pour guider chaque athlète",

    "coach-b3-title": "Pilotez votre business en un coup d'œil",
    "coach-b3-desc": "Suivez votre revenu mensuel récurrent, vos clients actifs, votre taux de churn et votre rétention sur un tableau de bord clair, pensé pour les coachs entrepreneurs.",
    "coach-b3-li1": "Score business et indicateurs clés (MRR, ARPU, churn)",
    "coach-b3-li2": "Suivi des abonnements : à jour, en retard, expirés",
    "coach-b3-li3": "Vue d'ensemble pour piloter la croissance de votre activité",

    // ---- PAGE CLUB - BLOCS DETAILLES ----
    "club-b1-title": "Planification Macro et Micro-cycles",
    "club-b1-desc": "Ayez une vision claire de votre saison. Organisez vos blocs de travail, vos compétitions et vos phases de récupération.",
    "club-b1-li1": "Vue annuelle et planification globale",
    "club-b1-li2": "Définition des thématiques par cycles",
    "club-b1-li3": "Jauges de charge et d'intensité prescrites",

    "club-b2-title": "Suivi analytique de la charge (RPE / HRV)",
    "club-b2-desc": "Anticipez les baisses de régime et les risques de blessures grâce à nos algorithmes de monitoring de la charge interne et externe.",
    "club-b2-li1": "Suivi HRV et score de récupération",
    "club-b2-li2": "Ratios de charge aigüe/chronique",
    "club-b2-li3": "Alertes visuelles instantanées pour le staff",

    "club-b3-title": "Comparez vos athlètes en un coup d'œil",
    "club-b3-desc": "Visualisez les profils physiques de vos joueurs sur des radars comparatifs pour ajuster vos plans d'entraînement individuels et collectifs.",
    "club-b3-li1": "Comparaison multi-athlètes instantanée",
    "club-b3-li2": "Profils physiques détaillés par test",
    "club-b3-li3": "Identification rapide des points forts et axes de travail",

    "club-b4-title": "Calendrier collectif du club",
    "club-b4-desc": "Centralisez tous les événements du club : entraînements, compétitions, rendez-vous médicaux et réunions de staff sur un seul calendrier partagé.",
    "club-b4-li1": "Vue mensuelle de tous les événements",
    "club-b4-li2": "Ajout rapide de séances, compétitions et RDV médicaux",
    "club-b4-li3": "Visibilité partagée pour tout le staff",

    "club-b5-title": "Une banque d'exercices partagée par le staff",
    "club-b5-desc": "Donnez à tous vos préparateurs et entraîneurs accès à une bibliothèque commune d'exercices, filtrable et prête à l'emploi.",
    "club-b5-li1": "Filtres par catégorie et niveau",
    "club-b5-li2": "Fiches techniques complètes",
    "club-b5-li3": "Intégration directe dans les programmes des athlètes",

    "club-b6-title": "Suivi individuel des tests physiques",
    "club-b6-desc": "Centralisez tous les résultats de tests physiques de vos athlètes et suivez leur évolution dans le temps, par catégorie.",
    "club-b6-li1": "Historique complet des résultats de tests",
    "club-b6-li2": "Filtres par catégorie (cardio, force, mobilité...)",
    "club-b6-li3": "Suivi de la progression individuelle dans le temps",
  },

  en: {
    // ---- NAVBAR ----
    "nav-accueil": "Home",
    "nav-expertise": "Expertise",
    "nav-ladata": "Data",
    "nav-tarifs": "Pricing",
    "nav-temoignages": "Testimonials",
    "nav-espacecoachs": "Coach Space",
    "nav-espaceclubs": "Club Space",
    "nav-solutions": "Solutions",
    "nav-contact": "Contact",
    "nav-quisommesnous": "About Us",

    // ---- HERO ACCUEIL (split screen) ----
    "home-badge-coach": "Independents & Gyms",
    "home-title-coach": "Manage your business.<br />Boost your athletes.",
    "home-desc-coach": "Run your business, plan your sessions and sell your programs with a modern interface.",
    "home-cta-coach": "Coach Space",

    "home-badge-club": "Pro Clubs & Organizations",
    "home-title-club": "The direct link between<br />the field and the data.",
    "home-desc-club": "Centralize physical and sports metrics to manage collective performance in real time.",
    "home-cta-club": "Club Space",

    // ---- STATS ----
    "stats-clubs": "Partner Clubs",
    "stats-athletes": "Athletes Tracked",
    "stats-satisfaction": "Satisfaction Rate",

    // ---- EXPERTISE ----
    "expertise-title": "Our Areas of Expertise",
    "expertise-athlete": "ATHLETE TRACKING",
    "expertise-data": "DATA & ANALYTICS",
    "expertise-planning": "PLANNING",

    // ---- DASHBOARD / DATA ----
    "dashboard-badge": "SaaS Technology",
    "dashboard-title": "An interface designed for performance.",
    "dashboard-desc": "Instantly visualize your athletes' fitness levels. Our platform offers smooth data reading (RPE, HRV) for quick decisions on the field.",
    "dashboard-li1": "RPE dashboards and charts",
    "dashboard-li2": "Recovery index tracking (HRV)",
    "dashboard-li3": "Secure calendar centralization",

    // ---- PRICING ----
    "pricing-title": "An offer designed for your profile",
    "pricing-subtitle": "Cocoricoach and Cocoricoach Club address two different needs. Choose your profile to discover the right offer.",
    "pricing-tab-coach": "View Coach & Gym offers",
    "pricing-tab-club": "View Club offers",

    "pricing-coach-name": "Cocoricoach",
    "pricing-coach-heading": "The all-in-one tool for independent coaches & gyms",
    "pricing-coach-intro": "Get found without building a website, create your sessions in a few clicks, track your athletes, sell your programs, manage your gym and run your business — all from a single platform.",
    "pricing-coach-feat1": "Automatic listing on the Cocoricoach map",
    "pricing-coach-feat2": "Advanced session builder (superset, EMOM, AMRAP...)",
    "pricing-coach-feat3": "Gym management, scheduling & bookings",
    "pricing-coach-feat4": "Personalized coach / athlete tracking",
    "pricing-coach-feat5": "Sell programs and ebooks online",
    "pricing-coach-feat6": "Business dashboard (MRR, churn, retention)",
    "pricing-coach-cta": "Get started with Cocoricoach",

    "pricing-suivi-title": "Personalized tracking only",
    "pricing-badge-9": "Up to 9: <strong>€15</strong>/mo",
    "pricing-badge-19": "9 to 19: <strong>€25</strong>/mo",
    "pricing-badge-20": "+20: <strong>€35</strong>/mo",
    "pricing-suiviprog-title": "Tracking + Program",
    "pricing-pack-title": "Premium Full Pack",
    "pricing-pack-desc": "Gyms + booking + programs + full tracking",

    "pricing-club-name": "Cocoricoach Club",
    "pricing-club-heading": "Complete collective performance management",
    "pricing-club-intro": "Season planning, load and recovery tracking (RPE / HRV), athlete comparison, shared calendar, common exercise bank and individual physical test tracking — everything to keep your staff aligned.",
    "pricing-club-feat1": "Macro and micro-cycle planning for the whole season",
    "pricing-club-feat2": "RPE load tracking and HRV recovery monitoring",
    "pricing-club-feat3": "Athlete comparison on performance radars",
    "pricing-club-feat4": "Collective calendar shared across the staff",
    "pricing-club-feat5": "Exercise bank shared by the staff",
    "pricing-club-feat6": "Individual physical test tracking",
    "pricing-club-promo": "Or €800 as a one-time annual payment",
    "pricing-club-li1": "Collective performance management",
    "pricing-club-li2": "Athletic, medical and load tracking",
    "pricing-club-li3": "Instant staff communication",
    "pricing-club-cta": "Request a club quote",

    // ---- TESTIMONIALS ----
    "testimonials-title": "Trusted by Professionals",
    "testi1-text": "\"Cocoricoach Club's software architecture has radically transformed how we centralize our metrics. The technical and medical staff finally communicate on a unified platform.\"",
    "testi1-role": "Performance Director",
    "testi2-text": "\"Before, I was wasting precious time. Cocoricoach allowed me to structure my business with online sales of my programs and perfect tracking.\"",
    "testi2-role": "Independent Physical Trainer",

    // ---- FOOTER (common) ----
    "footer-tagline": "A complete, independent solution for managing and optimizing sports performance.",
    "footer-solutions-title": "Solutions",
    "footer-solutions-coach": "Cocoricoach Independent",
    "footer-solutions-club": "Cocoricoach Club",
    "footer-resources-title": "Resources",
    "footer-resources-doc": "API Documentation",
    "footer-networks-title": "Social",
    "footer-whatsapp": " WhatsApp Channel",
    "footer-copyright": "© 2026 Cocoricoach – All rights reserved.",
    "footer-mentions": "Legal Notice",
    "footer-cgu": "Terms & Conditions",
    "footer-confidentialite": "Privacy Policy",

    // ---- HERO PAGE COACH ----
    "coach-hero-title": "Go from coach to true sports entrepreneur.",
    "coach-hero-desc": "Centralize all the tools you need to run a modern coaching business and track your clients' performance.",
    "coach-hero-cta": "Access the platform",

    // ---- HERO PAGE CLUB ----
    "club-hero-title": "The ultimate way to manage collective performance.",
    "club-hero-desc": "Centralize your sports data, analyze training load and streamline information flow across your staff.",
    "club-hero-cta": "Access the Club",

    // ---- ABOUT US ----
    "qsn-badge": "Our story",
    "qsn-title": "About Us",
    "qsn-desc": "A team of sports and tech enthusiasts who decided to build the tool they always wanted to have.",
    "qsn-history-label": "The story of the project",
    "qsn-history-title": "Why we created Cocoricoach",
    "qsn-history-p1": "We created Cocoricoach because we were tired of tools that were too complex, too expensive, or not suited to the reality of the field.",
    "qsn-history-p2": "We wanted something simple, powerful, and directly usable — whether you're an independent coach or a performance director at a professional club.",
    "qsn-history-p3": "Cocoricoach is the result of our passion for sport and technology. A solution designed by people from the field, for people from the field.",
    "qsn-vision-title": "Our vision",
    "qsn-vision-desc": "Making sports performance accessible to everyone — from independent coaches to professional clubs — with a simple, powerful, field-oriented tool.",
    "qsn-vision-li1": "Simple & quick to get started",
    "qsn-vision-li2": "Suited to every profile",
    "qsn-vision-li3": "Focused on real performance",
    "qsn-vision-li4": "A tool built by enthusiasts",
    "qsn-founders-title": "The founders",
    "qsn-founders-sub": "The two people behind Cocoricoach",
    "qsn-cofounder": "Co-founder",
    "qsn-alexis-desc": "Passionate about sport and technology, Alexis co-founded Cocoricoach with the goal of simplifying sports coaching management and making performance accessible to everyone.",
    "qsn-david-desc": "With hands-on experience in the sports world, David co-founded Cocoricoach to address the real needs of coaches and clubs — a tool designed directly from the field.",
    "qsn-eco-title": "One ecosystem, two solutions",
    "qsn-eco-sub": "Two applications designed for two distinct audiences",
    "qsn-coach-name": "Cocoricoach",
    "qsn-coach-sub": "For independent coaches & organizations",
    "qsn-coach-li1": "Gym & schedule management",
    "qsn-coach-li2": "Coach / athlete tracking",
    "qsn-coach-li3": "Program sales",
    "qsn-club-name": "Cocoricoach Club",
    "qsn-club-sub": "For clubs & sports organizations",
    "qsn-club-li1": "Collective performance management",
    "qsn-club-li2": "Real-time KPIs & data",
    "qsn-club-li3": "Unified staff communication",
    "qsn-learnmore": "Learn more",
    "qsn-footer-tagline": "One ecosystem, two solutions for sports performance.",
    "qsn-footer-contact-title": "Contact us",
    "qsn-footer-whatsapp": "WhatsApp & FAQ",
    "qsn-footer-networks-title": "Social Media",

    // ---- COACH PAGE - DETAILED BLOCKS ----
    "coach-b1-title": "Get found, without building a website",
    "coach-b1-desc": "Your profile automatically appears on the Cocoricoach map. Athletes, clubs and gyms find you based on location, goals and the type of structure they're looking for — with no website to build or maintain.",
    "coach-b1-li1": "Public profile with your programs and offers",
    "coach-b1-li2": "Search by location, structure type and goal",
    "coach-b1-li3": "Boosted visibility with the Premium badge",

    "coach-b2-title": "Build custom sessions in just a few clicks",
    "coach-b2-desc": "Build your workouts block by block: straight sets, supersets, circuits, EMOM, AMRAP... every training method is just a click away.",
    "coach-b2-li1": "Format library: superset, circuit, EMOM, AMRAP...",
    "coach-b2-li2": "Precise settings: sets, reps, %1RM, rest",
    "coach-b2-li3": "Personalized notes to guide each athlete",

    "coach-b3-title": "Manage your business at a glance",
    "coach-b3-desc": "Track your recurring monthly revenue, active clients, churn rate and retention on a clear dashboard built for entrepreneur coaches.",
    "coach-b3-li1": "Business score and key metrics (MRR, ARPU, churn)",
    "coach-b3-li2": "Subscription tracking: up to date, overdue, expired",
    "coach-b3-li3": "An overview to drive the growth of your business",

    // ---- CLUB PAGE - DETAILED BLOCKS ----
    "club-b1-title": "Macro and micro-cycle planning",
    "club-b1-desc": "Get a clear view of your season. Organize your training blocks, competitions and recovery phases.",
    "club-b1-li1": "Annual view and overall planning",
    "club-b1-li2": "Theme definition by cycles",
    "club-b1-li3": "Prescribed load and intensity gauges",

    "club-b2-title": "Load monitoring (RPE / HRV)",
    "club-b2-desc": "Anticipate drops in form and injury risks with our internal and external load monitoring algorithms.",
    "club-b2-li1": "HRV tracking and recovery score",
    "club-b2-li2": "Acute/chronic load ratios",
    "club-b2-li3": "Instant visual alerts for staff",

    "club-b3-title": "Compare your athletes at a glance",
    "club-b3-desc": "Visualize your players' physical profiles on comparative radars to adjust individual and collective training plans.",
    "club-b3-li1": "Instant multi-athlete comparison",
    "club-b3-li2": "Detailed physical profiles per test",
    "club-b3-li3": "Quickly identify strengths and areas for improvement",

    "club-b4-title": "The club's collective calendar",
    "club-b4-desc": "Centralize all club events: training sessions, competitions, medical appointments and staff meetings in one shared calendar.",
    "club-b4-li1": "Monthly view of all events",
    "club-b4-li2": "Quick add for sessions, competitions and medical appointments",
    "club-b4-li3": "Shared visibility for the entire staff",

    "club-b5-title": "An exercise bank shared by the staff",
    "club-b5-desc": "Give all your trainers and coaches access to a shared, filterable, ready-to-use exercise library.",
    "club-b5-li1": "Filters by category and level",
    "club-b5-li2": "Complete technical sheets",
    "club-b5-li3": "Direct integration into athlete programs",

    "club-b6-title": "Individual physical test tracking",
    "club-b6-desc": "Centralize all your athletes' physical test results and track their progress over time, by category.",
    "club-b6-li1": "Complete history of test results",
    "club-b6-li2": "Filters by category (cardio, strength, mobility...)",
    "club-b6-li3": "Individual progress tracking over time",
  },
};// Stockage de la langue avec repli si localStorage est bloqué (ex: file://)
let memoryLang = "fr";

function getCurrentLang() {
  try {
    return localStorage.getItem("cocoricoach-lang") || memoryLang;
  } catch (e) {
    return memoryLang;
  }
}

function saveLang(lang) {
  memoryLang = lang;
  try {
    localStorage.setItem("cocoricoach-lang", lang);
  } catch (e) {
    // localStorage indisponible (ex: ouverture en file://), on garde juste en mémoire
  }
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Met à jour le texte des boutons de langue
  document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
    btn.textContent = lang === "fr" ? "EN" : "FR";
  });

  document.documentElement.setAttribute("lang", lang);
  saveLang(lang);
}

function toggleLanguage() {
  const current = getCurrentLang();
  const next = current === "fr" ? "en" : "fr";
  applyLanguage(next);
}

// Brancher tous les boutons de langue présents sur la page
document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
  btn.addEventListener("click", toggleLanguage);
});
