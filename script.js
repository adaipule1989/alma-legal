const translations = {
  en: {
    navServices: "Services", navWeddings: "Weddings", navAbout: "About", navContact: "Contact",
    consultation: "Book a consultation", heroEyebrow: "Private legal & wedding services · Costa Rica",
    heroTitle: "Private counsel.<br><em>Remarkable ceremonies.</em>",
    heroIntro: "Discreet legal guidance and bespoke civil ceremonies for clients who expect every detail to feel considered.",
    exploreServices: "Begin a private consultation", planningWedding: "Discover weddings <span>↗</span>",
    availability: "Available throughout Costa Rica · English & Spanish", personalized: "Bespoke ceremonies",
    personalizedSub: "Legally seamless. Entirely personal.", servicesEyebrow: "How I can help",
    servicesTitle: "For life’s most<br>defining moments.",
    servicesIntro: "Sophisticated legal guidance delivered with discretion, precision, and a distinctly personal touch.",
    legalTitle: "Legal guidance", legalText: "Attentive counsel for personal matters and important decisions in Costa Rica.",
    notaryTitle: "Notarial services", notaryText: "Professional preparation, review, and formalization of legal documents.",
    weddingTitle: "Civil weddings", weddingText: "Legal, heartfelt ceremonies created for your story, anywhere in Costa Rica.",
    discoverWeddings: "Discover wedding services <span>→</span>", fromHeart: "Civil ceremonies · Costa Rica",
    weddingEyebrow: "Your wedding, your way", weddingHeading: "Your vows deserve<br><em>an extraordinary setting.</em>",
    weddingIntro: "A private civil ceremony service shaped around your vision—from impeccable legal preparation to words that feel unmistakably yours.",
    weddingOne: "Pre-wedding consultation", weddingTwo: "Tailored ceremony & speech", weddingThree: "Planner coordination",
    weddingFour: "English or Spanish officiation", planCeremony: "Let’s plan your ceremony",
    galleryEyebrow: "A sense of place", galleryScript: "Made for the moment.",
    aboutEyebrow: "Meet your attorney", aboutRole: "Costa Rican Attorney & Public Notary",
    aboutText: "My practice is intentionally personal. I bring legal precision, cultural fluency, and calm attention to every engagement—whether advising on an important matter or officiating an unforgettable celebration.",
    contactEyebrow: "Start a conversation", contactTitle: "Tell me how I<br>can help.",
    contactIntro: "Share a little about what you need, and I’ll be in touch to discuss the next step.",
    formName: "Your name", formEmail: "Email address", formService: "How can I help?", formChoose: "Choose a service",
    formOther: "Other", formMessage: "Your message", formSend: "Send inquiry",
    formNote: "Submitting opens your email app with your message ready to send.", footerText: "Costa Rica"
  },
  es: {
    navServices: "Servicios", navWeddings: "Matrimonios", navAbout: "Acerca de mí", navContact: "Contacto",
    consultation: "Agendar una consulta", heroEyebrow: "Servicios legales y bodas privadas · Costa Rica",
    heroTitle: "Asesoría privada.<br><em>Ceremonias inolvidables.</em>",
    heroIntro: "Asesoría legal discreta y ceremonias civiles a la medida para clientes que esperan atención impecable en cada detalle.",
    exploreServices: "Iniciar una consulta privada", planningWedding: "Descubrir bodas <span>↗</span>",
    availability: "Disponible en toda Costa Rica · Español e inglés", personalized: "Ceremonias a la medida",
    personalizedSub: "Legalmente impecables. Completamente personales.", servicesEyebrow: "Cómo puedo ayudarle",
    servicesTitle: "Para los momentos<br>que definen su vida.",
    servicesIntro: "Asesoría legal sofisticada, brindada con discreción, precisión y un trato profundamente personal.",
    legalTitle: "Asesoría legal", legalText: "Atención cercana para asuntos personales y decisiones importantes en Costa Rica.",
    notaryTitle: "Servicios notariales", notaryText: "Preparación, revisión y formalización profesional de documentos legales.",
    weddingTitle: "Matrimonios civiles", weddingText: "Ceremonias legales y emotivas creadas para su historia, en cualquier lugar de Costa Rica.",
    discoverWeddings: "Conocer el servicio de bodas <span>→</span>", fromHeart: "Ceremonias civiles · Costa Rica",
    weddingEyebrow: "Su boda, a su manera", weddingHeading: "Sus votos merecen<br><em>un escenario extraordinario.</em>",
    weddingIntro: "Un servicio privado de ceremonia civil creado alrededor de su visión: desde una preparación legal impecable hasta palabras inconfundiblemente suyas.",
    weddingOne: "Consulta previa al matrimonio", weddingTwo: "Ceremonia y discurso personalizados", weddingThree: "Coordinación con wedding planner",
    weddingFour: "Ceremonia en español o inglés", planCeremony: "Planeemos su ceremonia",
    galleryEyebrow: "Un lugar inolvidable", galleryScript: "Creado para el momento.",
    aboutEyebrow: "Conozca a su abogada", aboutRole: "Abogada y Notaria Pública de Costa Rica",
    aboutText: "Mi práctica es intencionalmente personal. Aporto precisión legal, sensibilidad cultural y atención serena a cada servicio, ya sea asesorando en un asunto importante u oficiando una celebración inolvidable.",
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
