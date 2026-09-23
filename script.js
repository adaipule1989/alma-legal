const translations = {
  en: {
    navServices: "Services", navWeddings: "Weddings", navAbout: "About", navContact: "Contact",
    consultation: "Book a consultation", heroEyebrow: "Costa Rican attorney & public notary",
    heroTitle: "Legal guidance,<br><em>with heart.</em>",
    heroIntro: "Clear, personal legal support for the moments and decisions that shape your life in Costa Rica.",
    exploreServices: "Explore services", planningWedding: "Planning a wedding? <span>↗</span>",
    availability: "Available throughout Costa Rica · English & Spanish", personalized: "Personalized",
    personalizedSub: "Thoughtful service built around you.", servicesEyebrow: "How I can help",
    servicesTitle: "Legal services made<br>clear and personal.",
    servicesIntro: "Practical guidance, careful attention, and a human approach—so every step feels understandable and supported.",
    legalTitle: "Legal guidance", legalText: "Attentive counsel for personal matters and important decisions in Costa Rica.",
    notaryTitle: "Notarial services", notaryText: "Professional preparation, review, and formalization of legal documents.",
    weddingTitle: "Civil weddings", weddingText: "Legal, heartfelt ceremonies created for your story, anywhere in Costa Rica.",
    discoverWeddings: "Discover wedding services <span>→</span>", fromHeart: "From the heart · Costa Rica",
    weddingEyebrow: "Your wedding, your way", weddingHeading: "A ceremony as<br><em>unique as your story.</em>",
    weddingIntro: "From the legal details to the words spoken on your day, I create a meaningful, effortless experience that feels completely yours.",
    weddingOne: "Pre-wedding consultation", weddingTwo: "Tailored ceremony & speech", weddingThree: "Planner coordination",
    weddingFour: "English or Spanish officiation", planCeremony: "Let’s plan your ceremony",
    galleryEyebrow: "Celebrations across Costa Rica", galleryScript: "The beginning of forever.",
    aboutEyebrow: "Meet your attorney", aboutRole: "Costa Rican Attorney & Public Notary",
    aboutText: "I believe legal services should feel clear, warm, and deeply personal. My role is to listen closely, explain each step, and help you move forward with confidence—whether you are navigating a legal matter or celebrating a new chapter.",
    contactEyebrow: "Start a conversation", contactTitle: "Tell me how I<br>can help.",
    contactIntro: "Share a little about what you need, and I’ll be in touch to discuss the next step.",
    formName: "Your name", formEmail: "Email address", formService: "How can I help?", formChoose: "Choose a service",
    formOther: "Other", formMessage: "Your message", formSend: "Send inquiry",
    formNote: "Submitting opens your email app with your message ready to send.", footerText: "Costa Rica"
  },
  es: {
    navServices: "Servicios", navWeddings: "Matrimonios", navAbout: "Acerca de mí", navContact: "Contacto",
    consultation: "Agendar una consulta", heroEyebrow: "Abogada y notaria pública de Costa Rica",
    heroTitle: "Asesoría legal,<br><em>con corazón.</em>",
    heroIntro: "Apoyo legal claro y personal para los momentos y decisiones que dan forma a su vida en Costa Rica.",
    exploreServices: "Ver servicios", planningWedding: "¿Planea su boda? <span>↗</span>",
    availability: "Disponible en toda Costa Rica · Español e inglés", personalized: "Personalizado",
    personalizedSub: "Atención pensada especialmente para usted.", servicesEyebrow: "Cómo puedo ayudarle",
    servicesTitle: "Servicios legales<br>claros y personales.",
    servicesIntro: "Orientación práctica, atención cuidadosa y un trato humano para que cada paso sea comprensible y acompañado.",
    legalTitle: "Asesoría legal", legalText: "Atención cercana para asuntos personales y decisiones importantes en Costa Rica.",
    notaryTitle: "Servicios notariales", notaryText: "Preparación, revisión y formalización profesional de documentos legales.",
    weddingTitle: "Matrimonios civiles", weddingText: "Ceremonias legales y emotivas creadas para su historia, en cualquier lugar de Costa Rica.",
    discoverWeddings: "Conocer el servicio de bodas <span>→</span>", fromHeart: "Desde el corazón · Costa Rica",
    weddingEyebrow: "Su boda, a su manera", weddingHeading: "Una ceremonia tan<br><em>única como su historia.</em>",
    weddingIntro: "Desde los detalles legales hasta las palabras de ese día, creo una experiencia significativa y fluida que se sienta completamente suya.",
    weddingOne: "Consulta previa al matrimonio", weddingTwo: "Ceremonia y discurso personalizados", weddingThree: "Coordinación con wedding planner",
    weddingFour: "Ceremonia en español o inglés", planCeremony: "Planeemos su ceremonia",
    galleryEyebrow: "Celebraciones en toda Costa Rica", galleryScript: "El comienzo de para siempre.",
    aboutEyebrow: "Conozca a su abogada", aboutRole: "Abogada y Notaria Pública de Costa Rica",
    aboutText: "Creo que los servicios legales deben sentirse claros, cálidos y profundamente personales. Mi labor es escuchar con atención, explicar cada paso y ayudarle a avanzar con confianza, ya sea ante un asunto legal o al celebrar un nuevo capítulo.",
    contactEyebrow: "Iniciemos una conversación", contactTitle: "Cuénteme cómo<br>puedo ayudarle.",
    contactIntro: "Comparta un poco sobre lo que necesita y me pondré en contacto para conversar sobre el siguiente paso.",
    formName: "Su nombre", formEmail: "Correo electrónico", formService: "¿Cómo puedo ayudarle?", formChoose: "Elija un servicio",
    formOther: "Otro", formMessage: "Su mensaje", formSend: "Enviar consulta",
    formNote: "Al enviar, se abrirá su correo electrónico con el mensaje listo.", footerText: "Costa Rica"
  }
};

const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
  mobileNav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  mobileNav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const languageToggle = document.querySelector(".language-toggle");
let currentLanguage = localStorage.getItem("alma-language") || "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  languageToggle.innerHTML = language === "en"
    ? '<span class="active">EN</span><span aria-hidden="true">/</span><span>ES</span>'
    : '<span>EN</span><span aria-hidden="true">/</span><span class="active">ES</span>';
  languageToggle.setAttribute("aria-label", language === "en" ? "Cambiar a español" : "Switch to English");
  localStorage.setItem("alma-language", language);
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "es" : "en"));
setLanguage(currentLanguage);

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Alma Legal inquiry — ${data.get("service")}`);
  const body = encodeURIComponent(
    `${currentLanguage === "es" ? "Nombre" : "Name"}: ${data.get("name")}\n` +
    `${currentLanguage === "es" ? "Correo" : "Email"}: ${data.get("email")}\n` +
    `${currentLanguage === "es" ? "Servicio" : "Service"}: ${data.get("service")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:almalegalcr@gmail.com?subject=${subject}&body=${body}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
