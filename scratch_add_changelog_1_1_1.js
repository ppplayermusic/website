const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));

const v1_1_1 = {
  en: {
    version: "v1.1.1",
    date: "September 12, 2026",
    desc: "Fixed playback bugs and polished the seekbar on app startup.",
    fixed: "Fixed",
    snapTitle: "Startup Seekbar Bug",
    snapDesc: "Fixed an issue where the seek bar would instantly snap back to the start position when sliding it immediately after launching the app.",
    durationTitle: "Missing Duration",
    durationDesc: "Fixed the seek bar showing a duration of 0:00 when the app is first launched."
  },
  pt: {
    version: "v1.1.1",
    date: "12 de setembro de 2026",
    desc: "Corrigidos bugs de reprodução e polimento na barra de progresso ao iniciar o aplicativo.",
    fixed: "Corrigido",
    snapTitle: "Bug da Barra de Progresso na Inicialização",
    snapDesc: "Corrigido um problema onde a barra de progresso voltava instantaneamente para a posição inicial ao deslizá-la logo após iniciar o aplicativo.",
    durationTitle: "Duração Ausente",
    durationDesc: "Corrigida a barra de progresso mostrando uma duração de 0:00 quando o aplicativo é iniciado pela primeira vez."
  },
  es: {
    version: "v1.1.1",
    date: "12 de septiembre de 2026",
    desc: "Se corrigieron errores de reproducción y se pulió la barra de progreso al iniciar la aplicación.",
    fixed: "Corregido",
    snapTitle: "Error de la barra de progreso al inicio",
    snapDesc: "Se solucionó un problema por el cual la barra de progreso volvía instantáneamente a la posición inicial al deslizarla inmediatamente después de iniciar la aplicación.",
    durationTitle: "Duración faltante",
    durationDesc: "Se arregló la barra de progreso que mostraba una duración de 0:00 cuando se inicia la aplicación por primera vez."
  }
};

const v1_1_0 = {
  en: {
    version: "v1.1.0",
    date: "September 11, 2026",
    desc: "Comprehensive internationalization and localization across the entire app and website.",
    new: "Added",
    langTitle: "11 Global Languages",
    langDesc: "Added full support for Spanish, French, German, Portuguese, Italian, Japanese, Korean, Chinese, Hindi, Russian, and Arabic.",
    pickerTitle: "In-App Language Picker",
    pickerDesc: "Added an in-app language picker in the Preferences menu that applies translations instantly without restarting the app.",
    osTitle: "OS-Level Integration",
    osDesc: "Native OS-level language integrations on Android 13+ and iOS to sync the app's language automatically."
  },
  pt: {
    version: "v1.1.0",
    date: "11 de setembro de 2026",
    desc: "Internacionalização e localização abrangentes em todo o aplicativo e site.",
    new: "Adicionado",
    langTitle: "11 Idiomas Globais",
    langDesc: "Suporte completo para espanhol, francês, alemão, português, italiano, japonês, coreano, chinês, hindi, russo e árabe.",
    pickerTitle: "Seletor de Idioma no Aplicativo",
    pickerDesc: "Adicionado um seletor de idioma no menu Preferências que aplica as traduções instantaneamente sem reiniciar o aplicativo.",
    osTitle: "Integração a Nível do Sistema",
    osDesc: "Integrações nativas de idioma no Android 13+ e iOS para sincronizar o idioma do aplicativo automaticamente."
  },
  es: {
    version: "v1.1.0",
    date: "11 de septiembre de 2026",
    desc: "Internacionalización y localización integrales en toda la aplicación y sitio web.",
    new: "Agregado",
    langTitle: "11 Idiomas Globales",
    langDesc: "Se agregó soporte completo para español, francés, alemán, portugués, italiano, japonés, coreano, chino, hindi, ruso y árabe.",
    pickerTitle: "Selector de Idioma Integrado",
    pickerDesc: "Se agregó un selector de idioma en el menú Preferencias que aplica traducciones al instante sin reiniciar la aplicación.",
    osTitle: "Integración a Nivel de Sistema",
    osDesc: "Integraciones de idioma nativas en Android 13+ e iOS para sincronizar automáticamente el idioma de la aplicación."
  }
};

const v1_0_6 = {
  en: {
    version: "v1.0.6",
    date: "September 11, 2026",
    desc: "Hotfix for fresh installations.",
    fixed: "Fixed",
    crashTitle: "Startup Crash Fix",
    crashDesc: "Fixed a critical bug causing the app to crash on a blank screen on fresh installations due to a missing environment configuration file."
  },
  pt: {
    version: "v1.0.6",
    date: "11 de setembro de 2026",
    desc: "Hotfix para novas instalações.",
    fixed: "Corrigido",
    crashTitle: "Correção de Travamento",
    crashDesc: "Corrigido um bug crítico que causava o travamento do aplicativo em uma tela em branco em novas instalações devido a um arquivo de configuração de ambiente ausente."
  },
  es: {
    version: "v1.0.6",
    date: "11 de septiembre de 2026",
    desc: "Corrección rápida para nuevas instalaciones.",
    fixed: "Corregido",
    crashTitle: "Corrección de Bloqueo al Inicio",
    crashDesc: "Se solucionó un error crítico que causaba que la aplicación se bloqueara en una pantalla en blanco en instalaciones nuevas debido a un archivo de configuración de entorno faltante."
  }
};

// Map file name to language key, default to english if not found
const langMap = {
  'en.json': 'en',
  'pt-BR.json': 'pt',
  'es.json': 'es'
};

files.forEach(file => {
  const filePath = path.join(messagesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (data.changelog) {
    const langKey = langMap[file] || 'en';
    const entry_1_1_1 = v1_1_1[langKey];
    const entry_1_1_0 = v1_1_0[langKey];
    const entry_1_0_6 = v1_0_6[langKey];
    
    // We want v1_1_1 at the top, then v1_1_0, then v1_0_6, then the rest
    const oldChangelog = { ...data.changelog };
    delete oldChangelog.title;
    delete oldChangelog.subtitle;
    delete oldChangelog.back;
    
    data.changelog = {
      title: data.changelog.title,
      subtitle: data.changelog.subtitle,
      back: data.changelog.back,
      v1_1_1: entry_1_1_1,
      v1_1_0: entry_1_1_0,
      v1_0_6: entry_1_0_6,
      ...oldChangelog
    };
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\\n');
    console.log(`Updated ${file}`);
  }
});
