const fs = require('fs');
const path = require('path');

const locales = ['en', 'pt-BR', 'es', 'fr', 'de', 'ru', 'tr'];
const messagesDir = path.join(__dirname, 'messages');

const translations = {
  en: {
    ios: { name: "iOS", label: "iPhone & iPad", desc: "Available on the App Store for iPhone and iPad.", badge: "App Store" },
    android: { name: "Android", label: "Android", desc: "Available on Google Play for Android phones and tablets.", badge: "Google Play" },
    windows: { name: "Windows", label: "Windows 10+", desc: "Direct download for Windows 10 and later. No store needed.", badge: "Direct Download" },
    macos: { name: "macOS", label: "Mac", desc: "Direct download for macOS. Apple Silicon & Intel supported.", badge: "Direct Download" }
  },
  'pt-BR': {
    ios: { name: "iOS", label: "iPhone e iPad", desc: "Disponível na App Store para iPhone e iPad.", badge: "App Store" },
    android: { name: "Android", label: "Android", desc: "Disponível no Google Play para celulares e tablets Android.", badge: "Google Play" },
    windows: { name: "Windows", label: "Windows 10+", desc: "Download direto para Windows 10 e superior. Não requer Microsoft Store.", badge: "Download Direto" },
    macos: { name: "macOS", label: "Mac", desc: "Download direto para macOS. Compatível com Apple Silicon e Intel.", badge: "Download Direto" }
  },
  es: {
    ios: { name: "iOS", label: "iPhone y iPad", desc: "Disponible en la App Store para iPhone y iPad.", badge: "App Store" },
    android: { name: "Android", label: "Android", desc: "Disponible en Google Play para teléfonos y tabletas Android.", badge: "Google Play" },
    windows: { name: "Windows", label: "Windows 10+", desc: "Descarga directa para Windows 10 y superior. No se necesita tienda.", badge: "Descarga Directa" },
    macos: { name: "macOS", label: "Mac", desc: "Descarga directa para macOS. Compatible con Apple Silicon e Intel.", badge: "Descarga Directa" }
  },
  fr: {
    ios: { name: "iOS", label: "iPhone & iPad", desc: "Disponible sur l'App Store pour iPhone et iPad.", badge: "App Store" },
    android: { name: "Android", label: "Android", desc: "Disponible sur Google Play pour téléphones et tablettes Android.", badge: "Google Play" },
    windows: { name: "Windows", label: "Windows 10+", desc: "Téléchargement direct pour Windows 10 et supérieur. Aucun magasin requis.", badge: "Téléchargement Direct" },
    macos: { name: "macOS", label: "Mac", desc: "Téléchargement direct pour macOS. Compatible Apple Silicon & Intel.", badge: "Téléchargement Direct" }
  },
  de: {
    ios: { name: "iOS", label: "iPhone & iPad", desc: "Erhältlich im App Store für iPhone und iPad.", badge: "App Store" },
    android: { name: "Android", label: "Android", desc: "Erhältlich bei Google Play für Android-Smartphones und -Tablets.", badge: "Google Play" },
    windows: { name: "Windows", label: "Windows 10+", desc: "Direkter Download für Windows 10 und neuer. Kein Store erforderlich.", badge: "Direkter Download" },
    macos: { name: "macOS", label: "Mac", desc: "Direkter Download für macOS. Unterstützt Apple Silicon & Intel.", badge: "Direkter Download" }
  },
  ru: {
    ios: { name: "iOS", label: "iPhone и iPad", desc: "Доступно в App Store для iPhone и iPad.", badge: "App Store" },
    android: { name: "Android", label: "Android", desc: "Доступно в Google Play для телефонов и планшетов Android.", badge: "Google Play" },
    windows: { name: "Windows", label: "Windows 10+", desc: "Прямая загрузка для Windows 10 и новее. Магазин не требуется.", badge: "Прямая загрузка" },
    macos: { name: "macOS", label: "Mac", desc: "Прямая загрузка для macOS. Поддержка Apple Silicon и Intel.", badge: "Прямая загрузка" }
  },
  tr: {
    ios: { name: "iOS", label: "iPhone ve iPad", desc: "iPhone ve iPad için App Store'da mevcut.", badge: "App Store" },
    android: { name: "Android", label: "Android", desc: "Android telefonlar ve tabletler için Google Play'de mevcut.", badge: "Google Play" },
    windows: { name: "Windows", label: "Windows 10+", desc: "Windows 10 ve sonrası için doğrudan indirme. Mağaza gerekmez.", badge: "Doğrudan İndirme" },
    macos: { name: "macOS", label: "Mac", desc: "macOS için doğrudan indirme. Apple Silicon ve Intel desteklenir.", badge: "Doğrudan İndirme" }
  }
};

locales.forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  let content = fs.readFileSync(filePath, 'utf-8');
  let data = JSON.parse(content);
  
  data.platformCards = translations[locale];
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${locale}.json`);
});
