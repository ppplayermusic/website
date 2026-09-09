const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const generateScriptPath = path.join(__dirname, 'generate_translations.js');

function replacePlatformsInString(str) {
  if (typeof str !== 'string') return str;
  let newStr = str.replace(/(iOS|iPhone)(,\s*|\s+)Android((?:,\s*|\s+)(?:&|and|e|y|et|und|и|ve|or|ou|o|oder|или|veya)\s*)Windows/gi, 'macOS, Linux, Windows, $1$3Android');
  newStr = newStr.replace(/Windows(,\s*|\s+)Android((?:,\s*|\s+)(?:&|and|e|y|et|und|и|ve|or|ou|o|oder|или|veya)\s*)(iOS|iPhone)/gi, 'macOS, Linux, Windows, Android$2$3');
  return newStr;
}

function processObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = replacePlatformsInString(obj[key]);
    } else if (typeof obj[key] === 'object') {
      processObject(obj[key]);
    }
  }
}

const linuxTranslations = {
  en: {
    hero: { getLinux: "Get for Linux" },
    downloadCTA: { getLinux: "Get for Linux" },
    platformCards: { name: "Linux", label: "Linux", desc: "Direct download for Linux. AppImage supported.", badge: "Direct Download" }
  },
  'pt-BR': {
    hero: { getLinux: "Baixar para Linux" },
    downloadCTA: { getLinux: "Baixar para Linux" },
    platformCards: { name: "Linux", label: "Linux", desc: "Download direto para Linux. Suporte a AppImage.", badge: "Download Direto" }
  },
  es: {
    hero: { getLinux: "Descargar para Linux" },
    downloadCTA: { getLinux: "Descargar para Linux" },
    platformCards: { name: "Linux", label: "Linux", desc: "Descarga directa para Linux. Soporte para AppImage.", badge: "Descarga Directa" }
  },
  fr: {
    hero: { getLinux: "Obtenir pour Linux" },
    downloadCTA: { getLinux: "Obtenir pour Linux" },
    platformCards: { name: "Linux", label: "Linux", desc: "Téléchargement direct pour Linux. Compatible AppImage.", badge: "Téléchargement Direct" }
  },
  de: {
    hero: { getLinux: "Für Linux herunterladen" },
    downloadCTA: { getLinux: "Für Linux herunterladen" },
    platformCards: { name: "Linux", label: "Linux", desc: "Direkter Download für Linux. AppImage wird unterstützt.", badge: "Direkter Download" }
  },
  ru: {
    hero: { getLinux: "Скачать для Linux" },
    downloadCTA: { getLinux: "Скачать для Linux" },
    platformCards: { name: "Linux", label: "Linux", desc: "Прямая загрузка для Linux. Поддержка AppImage.", badge: "Прямая загрузка" }
  },
  tr: {
    hero: { getLinux: "Linux için İndir" },
    downloadCTA: { getLinux: "Linux için İndir" },
    platformCards: { name: "Linux", label: "Linux", desc: "Linux için doğrudan indirme. AppImage desteklenir.", badge: "Doğrudan İndirme" }
  }
};

const locales = ['en', 'pt-BR', 'es', 'fr', 'de', 'ru', 'tr'];

locales.forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let data = JSON.parse(content);
    
    // Replace strings in the whole JSON
    processObject(data);
    
    // Inject Linux translations
    if (linuxTranslations[locale]) {
      if (data.hero) data.hero.getLinux = linuxTranslations[locale].hero.getLinux;
      if (data.downloadCTA) data.downloadCTA.getLinux = linuxTranslations[locale].downloadCTA.getLinux;
      if (data.platformCards) data.platformCards.linux = linuxTranslations[locale].platformCards;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${locale}.json`);
  }
});

if (fs.existsSync(generateScriptPath)) {
  let genContent = fs.readFileSync(generateScriptPath, 'utf-8');
  genContent = replacePlatformsInString(genContent);
  fs.writeFileSync(generateScriptPath, genContent);
  console.log(`Updated generate_translations.js`);
}

console.log("Done.");
