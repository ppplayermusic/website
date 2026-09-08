const fs = require('fs');
const path = require('path');

const en = {
  metadata: {
    homeTitle: "PPPlayer: Free Music App for iOS, Android & Windows | No Account Required",
    homeDesc: "PPPlayer is a free music app for iPhone, Android, and Windows. Discover artists, explore genres, and start listening instantly: no account, no signup, no cost.",
    downloadTitle: "Download PPPlayer Free",
    downloadDesc: "Download PPPlayer for iOS, Android, or Windows. Free music app: no account required. Start listening in minutes.",
    privacyTitle: "Privacy Policy",
    privacyDesc: "Privacy Policy for PPPlayer: free music app for iOS, Android, and Windows.",
    termsTitle: "Terms of Service",
    termsDesc: "Terms of Service for PPPlayer: free music app for iOS, Android, and Windows."
  },
  nav: {
    features: "Features"
  },
  footer: {
    desc: "Music, without the friction. Free for iOS, Android, and Windows.",
    product: "Product",
    features: "Features",
    download: "Download",
    platforms: "Platforms",
    ios: "iOS",
    android: "Android",
    windows: "Windows",
    social: "Social",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    github: "GitHub",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    copyright: "© {year} PPPlayer. All rights reserved."
  },
  cookie: {
    title: "We value your privacy",
    desc: "We use cookies to analyze site traffic and enhance your experience. By clicking \"Accept\", you consent to our use of cookies.",
    decline: "Decline All",
    accept: "Accept All"
  },
  hero: {
    title1: "Music.",
    title2: "Without the friction.",
    desc: "No account. No subscription. Just play.",
    getIos: "Get for iOS",
    getAndroid: "Get for Android",
    getMac: "Get for Mac",
    getWindows: "Get for Windows"
  },
  discover: {
    title: "Find<br />something<br />worth playing."
  },
  artistRadio: {
    title: "Endless listening."
  },
  goDeeper: {
    bgText: "FOLLOW",
    title: "Follow the music."
  },
  pressPlay: {
    title: "Then, just listen."
  },
  featureGallery: {
    title: "Everything you need.",
    subtitle: "A beautiful, native experience built for performance.",
    searchTitle: "Find exactly what you want.",
    searchDesc: "Search globally across tracks, artists, and albums instantly.",
    queueTitle: "Perfectly queued.",
    queueDesc: "Manage what plays next with a beautiful, reorderable queue.",
    favTitle: "Your music, your rules.",
    favDesc: "Build your personal library with a single click. Always there.",
    contextTitle: "Native by design.",
    contextDesc: "Right-click anywhere. Beautiful, context-aware native menus."
  },
  noAccount: {
    title: "No account.",
    subtitle: "Music shouldn't require permission."
  },
  platforms: {
    title: "Your music. Your devices.",
    subtitle: "Beautifully native on Windows, Android, and iOS."
  },
  downloadCTA: {
    title: "Just play.",
    getIos: "Get for iOS",
    getAndroid: "Get for Android",
    getMac: "Get for Mac",
    getWindows: "Get for Windows"
  },
  downloadPage: {
    badge: "100% Free · No Account Required",
    title: "Download <span className=\"gradient-text\">PPPlayer Free</span>",
    subtitle: "Pick your platform. Start listening in minutes.",
    desc: "No account required. No email. No signup. Just music.",
    windowsReqLabel: "Windows system requirements:",
    windowsReqDesc: "Windows 10 or later (64-bit). ~50 MB download. No Microsoft Store required."
  },
  faq: {
    badge: "FAQ",
    title: "Common <span className=\"gradient-text\">questions</span>",
    subtitle: "Everything you need to know about PPPlayer."
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 2025",
    sections: {
      s1: { title: "1. Overview", p: "PPPlayer (\"we\", \"our\", \"the app\") is committed to protecting your privacy. This policy explains what data we collect, why, and how it is used when you use PPPlayer on iOS, Android, or Windows." },
      s2: { title: "2. No Account Required", p: "PPPlayer does not require you to create an account. We do not collect your name, email address, or any personally identifiable information to use the app." },
      s3: { title: "3. Data We Collect", p1: "We may collect the following anonymous, non-identifiable data:", li1: "Crash reports and error logs (to improve app stability)", li2: "Anonymous usage analytics (feature usage, session duration)", li3: "Device type and operating system version", p2: "We do not collect: names, emails, payment info, or precise location data." },
      s4: { title: "4. Third-Party Services", p: "PPPlayer may use third-party services for music metadata and analytics. These services have their own privacy policies. We encourage you to review them." },
      s5: { title: "5. Data Retention", p: "Anonymous analytics data is retained for a maximum of 12 months. Crash logs are deleted after 90 days." },
      s6: { title: "6. Your Rights", p: "Since we do not collect personal data, there is no personal information to access, export, or delete. If you have questions, contact us at the address below." },
      s7: { title: "7. Children", p: "PPPlayer is not directed at children under 13. We do not knowingly collect data from children." },
      s8: { title: "8. Changes", p: "We may update this policy from time to time. We will note the date of the last update at the top of this page." },
      s9: { title: "9. Contact", p: "Questions about this policy? Contact us at " }
    },
    back: "← Back to PPPlayer"
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: April 2025",
    sections: {
      s1: { title: "1. Acceptance of Terms", p: "By downloading or using PPPlayer, you agree to these Terms of Service. If you do not agree, please do not use the app." },
      s2: { title: "2. Use of the App", p: "PPPlayer is provided free of charge for personal, non-commercial use. You agree not to:", li1: "Reverse engineer, decompile, or modify the app", li2: "Use the app to distribute malware or harmful content", li3: "Violate any applicable laws or regulations while using the app" },
      s3: { title: "3. No Account Required", p: "PPPlayer does not require account creation. You can use all features immediately after download." },
      s4: { title: "4. Intellectual Property", p: "PPPlayer and its content, features, and functionality are owned by PPPlayer and protected by applicable intellectual property laws. Music content displayed within the app is sourced from third-party providers and subject to their respective rights and licenses." },
      s5: { title: "5. Disclaimer of Warranties", p: "PPPlayer is provided \"as is\" without warranty of any kind, express or implied. We do not guarantee uninterrupted service or that the app will be error-free." },
      s6: { title: "6. Limitation of Liability", p: "To the maximum extent permitted by law, PPPlayer shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the app." },
      s7: { title: "7. Changes to Terms", p: "We reserve the right to update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms." },
      s8: { title: "8. Contact", p: "Questions about these terms? Reach us at " }
    },
    back: "← Back to PPPlayer"
  }
};

const pt = {
  metadata: {
    homeTitle: "PPPlayer: App de Música Grátis para iOS, Android e Windows | Sem Conta",
    homeDesc: "PPPlayer é um app de música gratuito para iPhone, Android e Windows. Descubra artistas e gêneros sem criar conta, sem cadastro e sem custo.",
    downloadTitle: "Baixe o PPPlayer Grátis",
    downloadDesc: "Baixe o PPPlayer para iOS, Android ou Windows. App de música gratuito sem necessidade de conta. Comece a ouvir em minutos.",
    privacyTitle: "Política de Privacidade",
    privacyDesc: "Política de Privacidade do PPPlayer: app de música grátis para iOS, Android e Windows.",
    termsTitle: "Termos de Serviço",
    termsDesc: "Termos de Serviço do PPPlayer: app de música grátis para iOS, Android e Windows."
  },
  nav: {
    features: "Recursos"
  },
  footer: {
    desc: "Música, sem atrito. Grátis para iOS, Android e Windows.",
    product: "Produto",
    features: "Recursos",
    download: "Baixar",
    platforms: "Plataformas",
    ios: "iOS",
    android: "Android",
    windows: "Windows",
    social: "Social",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    github: "GitHub",
    legal: "Legal",
    privacy: "Privacidade",
    terms: "Termos",
    copyright: "© {year} PPPlayer. Todos os direitos reservados."
  },
  cookie: {
    title: "Valorizamos sua privacidade",
    desc: "Usamos cookies para analisar o tráfego e melhorar sua experiência. Ao clicar em \"Aceitar\", você concorda com o uso de cookies.",
    decline: "Recusar Tudo",
    accept: "Aceitar Tudo"
  },
  hero: {
    title1: "Música.",
    title2: "Sem complicações.",
    desc: "Sem conta. Sem assinatura. É só dar play.",
    getIos: "Baixar para iOS",
    getAndroid: "Baixar para Android",
    getMac: "Baixar para Mac",
    getWindows: "Baixar para Windows"
  },
  discover: {
    title: "Encontre<br />algo que<br />valha a pena."
  },
  artistRadio: {
    title: "Música sem fim."
  },
  goDeeper: {
    bgText: "SEGUIR",
    title: "Siga a música."
  },
  pressPlay: {
    title: "Depois, é só ouvir."
  },
  featureGallery: {
    title: "Tudo o que você precisa.",
    subtitle: "Uma experiência nativa e linda, focada em performance.",
    searchTitle: "Encontre exatamente o que quer.",
    searchDesc: "Busque globalmente por faixas, artistas e álbuns instantaneamente.",
    queueTitle: "Fila perfeita.",
    queueDesc: "Gerencie o que toca a seguir com uma fila linda e reordenável.",
    favTitle: "Sua música, suas regras.",
    favDesc: "Crie sua biblioteca pessoal com um clique. Sempre com você.",
    contextTitle: "Nativo por natureza.",
    contextDesc: "Clique com o botão direito. Menus nativos lindos e contextuais."
  },
  noAccount: {
    title: "Sem conta.",
    subtitle: "A música não deveria pedir permissão."
  },
  platforms: {
    title: "Sua música. Seus aparelhos.",
    subtitle: "Lindo e nativo no Windows, Android e iOS."
  },
  downloadCTA: {
    title: "Apenas ouça.",
    getIos: "Baixar para iOS",
    getAndroid: "Baixar para Android",
    getMac: "Baixar para Mac",
    getWindows: "Baixar para Windows"
  },
  downloadPage: {
    badge: "100% Grátis · Nenhuma Conta Necessária",
    title: "Baixe o <span className=\"gradient-text\">PPPlayer Grátis</span>",
    subtitle: "Escolha sua plataforma. Comece a ouvir em minutos.",
    desc: "Sem conta. Sem email. Sem cadastro. Apenas música.",
    windowsReqLabel: "Requisitos do sistema Windows:",
    windowsReqDesc: "Windows 10 ou superior (64 bits). Download de ~50 MB. Não requer a Microsoft Store."
  },
  faq: {
    badge: "DÚVIDAS",
    title: "Perguntas <span className=\"gradient-text\">frequentes</span>",
    subtitle: "Tudo o que você precisa saber sobre o PPPlayer."
  },
  privacy: {
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: Abril de 2025",
    sections: {
      s1: { title: "1. Visão Geral", p: "O PPPlayer (\"nós\", \"nosso\", \"o app\") está comprometido em proteger sua privacidade. Esta política explica quais dados coletamos, por que e como são usados quando você usa o PPPlayer no iOS, Android ou Windows." },
      s2: { title: "2. Nenhuma Conta Necessária", p: "O PPPlayer não exige que você crie uma conta. Não coletamos seu nome, e-mail ou qualquer informação pessoal identificável." },
      s3: { title: "3. Dados que Coletamos", p1: "Podemos coletar os seguintes dados anônimos e não identificáveis:", li1: "Relatórios de erros (para melhorar a estabilidade)", li2: "Análises de uso anônimas (uso de recursos, duração da sessão)", li3: "Tipo de aparelho e versão do sistema", p2: "Nós não coletamos: nomes, e-mails, dados de pagamento ou localização exata." },
      s4: { title: "4. Serviços de Terceiros", p: "O PPPlayer pode usar serviços de terceiros para metadados de música e análises. Eles possuem políticas próprias, que encorajamos você a ler." },
      s5: { title: "5. Retenção de Dados", p: "Dados analíticos anônimos são mantidos por no máximo 12 meses. Logs de erro são apagados após 90 dias." },
      s6: { title: "6. Seus Direitos", p: "Como não coletamos dados pessoais, não há o que acessar, exportar ou apagar. Se tiver dúvidas, entre em contato." },
      s7: { title: "7. Crianças", p: "O PPPlayer não é voltado para menores de 13 anos. Não coletamos dados de crianças intencionalmente." },
      s8: { title: "8. Alterações", p: "Podemos atualizar esta política de tempos em tempos. A data da última atualização constará no topo." },
      s9: { title: "9. Contato", p: "Dúvidas sobre esta política? Fale conosco em " }
    },
    back: "← Voltar ao PPPlayer"
  },
  terms: {
    title: "Termos de Serviço",
    lastUpdated: "Última atualização: Abril de 2025",
    sections: {
      s1: { title: "1. Aceitação dos Termos", p: "Ao baixar ou usar o PPPlayer, você concorda com estes Termos. Se não concordar, não use o app." },
      s2: { title: "2. Uso do App", p: "O PPPlayer é fornecido gratuitamente para uso pessoal. Você concorda em não:", li1: "Fazer engenharia reversa ou modificar o app", li2: "Usar o app para distribuir malware", li3: "Violar leis aplicáveis ao usar o app" },
      s3: { title: "3. Nenhuma Conta Necessária", p: "O PPPlayer não exige criação de conta. Você pode usar todos os recursos logo após o download." },
      s4: { title: "4. Propriedade Intelectual", p: "O PPPlayer e seus recursos pertencem ao PPPlayer e são protegidos por leis de propriedade intelectual. As músicas vêm de terceiros e estão sujeitas aos direitos deles." },
      s5: { title: "5. Isenção de Garantias", p: "O PPPlayer é fornecido \"como está\", sem garantias expressas ou implícitas. Não garantimos serviço ininterrupto ou livre de erros." },
      s6: { title: "6. Limitação de Responsabilidade", p: "Na extensão máxima permitida por lei, o PPPlayer não será responsável por danos indiretos ou incidentais resultantes do uso ou incapacidade de usar o app." },
      s7: { title: "7. Mudanças nos Termos", p: "Reservamo-nos o direito de atualizar estes termos a qualquer momento. O uso contínuo após as mudanças constitui aceitação." },
      s8: { title: "8. Contato", p: "Dúvidas sobre estes termos? Fale conosco em " }
    },
    back: "← Voltar ao PPPlayer"
  }
};

const es = {
  metadata: {
    homeTitle: "PPPlayer: App de Música Gratis para iOS, Android y Windows | Sin Cuenta",
    homeDesc: "PPPlayer es una app de música gratuita para iPhone, Android y Windows. Descubre artistas y géneros sin crear cuenta, sin registro y sin costo.",
    downloadTitle: "Descarga PPPlayer Gratis",
    downloadDesc: "Descarga PPPlayer para iOS, Android o Windows. App de música gratis sin necesidad de cuenta. Empieza a escuchar en minutos.",
    privacyTitle: "Política de Privacidad",
    privacyDesc: "Política de Privacidad de PPPlayer: app de música gratis para iOS, Android y Windows.",
    termsTitle: "Términos de Servicio",
    termsDesc: "Términos de Servicio de PPPlayer: app de música gratis para iOS, Android y Windows."
  },
  nav: {
    features: "Funciones"
  },
  footer: {
    desc: "Música, sin fricción. Gratis para iOS, Android y Windows.",
    product: "Producto",
    features: "Funciones",
    download: "Descargar",
    platforms: "Plataformas",
    ios: "iOS",
    android: "Android",
    windows: "Windows",
    social: "Social",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    facebook: "Facebook",
    github: "GitHub",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    copyright: "© {year} PPPlayer. Todos los derechos reservados."
  },
  cookie: {
    title: "Valoramos tu privacidad",
    desc: "Usamos cookies para analizar el tráfico y mejorar tu experiencia. Al hacer clic en \"Aceptar\", consientes nuestro uso de cookies.",
    decline: "Rechazar Todo",
    accept: "Aceptar Todo"
  },
  hero: {
    title1: "Música.",
    title2: "Sin complicaciones.",
    desc: "Sin cuenta. Sin suscripción. Solo dale play.",
    getIos: "Obtener para iOS",
    getAndroid: "Obtener para Android",
    getMac: "Obtener para Mac",
    getWindows: "Obtener para Windows"
  },
  discover: {
    title: "Encuentra<br />algo que<br />valga la pena."
  },
  artistRadio: {
    title: "Música sin fin."
  },
  goDeeper: {
    bgText: "SEGUIR",
    title: "Sigue la música."
  },
  pressPlay: {
    title: "Luego, solo escucha."
  },
  featureGallery: {
    title: "Todo lo que necesitas.",
    subtitle: "Una hermosa experiencia nativa construida para el rendimiento.",
    searchTitle: "Encuentra exactamente lo que quieres.",
    searchDesc: "Busca globalmente canciones, artistas y álbumes al instante.",
    queueTitle: "Cola perfecta.",
    queueDesc: "Controla lo que suena a continuación con una hermosa cola reordenable.",
    favTitle: "Tu música, tus reglas.",
    favDesc: "Crea tu biblioteca personal con un solo clic. Siempre contigo.",
    contextTitle: "Nativo por diseño.",
    contextDesc: "Haz clic derecho. Menús contextuales nativos y hermosos."
  },
  noAccount: {
    title: "Sin cuenta.",
    subtitle: "La música no debería pedir permiso."
  },
  platforms: {
    title: "Tu música. Tus dispositivos.",
    subtitle: "Bellamente nativo en Windows, Android e iOS."
  },
  downloadCTA: {
    title: "Solo escucha.",
    getIos: "Obtener para iOS",
    getAndroid: "Obtener para Android",
    getMac: "Obtener para Mac",
    getWindows: "Obtener para Windows"
  },
  downloadPage: {
    badge: "100% Gratis · Sin Cuenta",
    title: "Descarga <span className=\"gradient-text\">PPPlayer Gratis</span>",
    subtitle: "Elige tu plataforma. Escucha en minutos.",
    desc: "Sin cuenta. Sin correo. Sin registro. Solo música.",
    windowsReqLabel: "Requisitos de Windows:",
    windowsReqDesc: "Windows 10 o superior (64-bit). Descarga de ~50 MB. No requiere Microsoft Store."
  },
  faq: {
    badge: "PREGUNTAS",
    title: "Preguntas <span className=\"gradient-text\">frecuentes</span>",
    subtitle: "Todo lo que necesitas saber sobre PPPlayer."
  },
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: Abril de 2025",
    sections: {
      s1: { title: "1. Descripción General", p: "PPPlayer (\"nosotros\", \"nuestro\", \"la app\") se compromete a proteger tu privacidad. Esta política explica qué datos recopilamos y cómo se usan al utilizar PPPlayer en iOS, Android o Windows." },
      s2: { title: "2. Sin Cuenta Necesaria", p: "PPPlayer no requiere cuenta. No recopilamos tu nombre, correo ni información personal identificable." },
      s3: { title: "3. Datos que Recopilamos", p1: "Podemos recopilar los siguientes datos anónimos:", li1: "Reportes de fallos (para mejorar la app)", li2: "Analíticas de uso (uso de funciones, duración de sesión)", li3: "Tipo de dispositivo y versión del SO", p2: "No recopilamos: nombres, correos, datos de pago ni ubicación." },
      s4: { title: "4. Servicios de Terceros", p: "PPPlayer puede usar servicios de terceros para metadatos y analíticas. Tienen sus propias políticas." },
      s5: { title: "5. Retención de Datos", p: "Los datos analíticos anónimos se retienen un máximo de 12 meses. Los logs de errores se eliminan a los 90 días." },
      s6: { title: "6. Tus Derechos", p: "Al no recopilar datos personales, no hay qué acceder, exportar o borrar. Si tienes dudas, contáctanos." },
      s7: { title: "7. Niños", p: "PPPlayer no está dirigido a menores de 13 años. No recopilamos datos de niños." },
      s8: { title: "8. Cambios", p: "Podemos actualizar esta política. La fecha de actualización estará al principio de la página." },
      s9: { title: "9. Contacto", p: "¿Dudas sobre la política? Contáctanos en " }
    },
    back: "← Volver a PPPlayer"
  },
  terms: {
    title: "Términos de Servicio",
    lastUpdated: "Última actualización: Abril de 2025",
    sections: {
      s1: { title: "1. Aceptación de Términos", p: "Al usar PPPlayer, aceptas estos Términos de Servicio. Si no estás de acuerdo, no uses la app." },
      s2: { title: "2. Uso de la App", p: "PPPlayer es gratuita para uso personal. Aceptas no:", li1: "Hacer ingeniería inversa o modificar la app", li2: "Usar la app para distribuir malware", li3: "Violar leyes aplicables usando la app" },
      s3: { title: "3. Sin Cuenta Necesaria", p: "PPPlayer no requiere cuenta. Puedes usar todo de inmediato." },
      s4: { title: "4. Propiedad Intelectual", p: "PPPlayer es dueña de la app. El contenido musical proviene de terceros y está sujeto a sus licencias." },
      s5: { title: "5. Renuncia de Garantías", p: "PPPlayer se proporciona \"tal cual\", sin garantía alguna. No garantizamos un servicio ininterrumpido." },
      s6: { title: "6. Limitación de Responsabilidad", p: "PPPlayer no será responsable por daños indirectos o incidentales por usar la app." },
      s7: { title: "7. Cambios en los Términos", p: "Podemos actualizar estos términos en cualquier momento. Tu uso continuo constituye aceptación." },
      s8: { title: "8. Contacto", p: "¿Dudas sobre los términos? Contáctanos en " }
    },
    back: "← Volver a PPPlayer"
  }
};

fs.mkdirSync(path.join(__dirname, 'messages'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'messages', 'en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages', 'pt-BR.json'), JSON.stringify(pt, null, 2));
fs.writeFileSync(path.join(__dirname, 'messages', 'es.json'), JSON.stringify(es, null, 2));
console.log('Translations generated!');
