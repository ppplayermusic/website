const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));

const translations = {
  'en.json': 'Not available yet. Currently, only the macOS version is available for download.',
  'pt-BR.json': 'Ainda não disponível. Atualmente, apenas a versão para macOS está disponível para download.',
  'es.json': 'Aún no disponible. Actualmente, solo la versión para macOS está disponible para descargar.',
  'ru.json': 'Пока недоступно. В настоящее время для скачивания доступна только версия для macOS.',
  'tr.json': 'Henüz mevcut değil. Şu anda indirmek için yalnızca macOS sürümü mevcuttur.',
  'fr.json': 'Pas encore disponible. Actuellement, seule la version macOS est disponible au téléchargement.',
  'de.json': 'Noch nicht verfügbar. Derzeit steht nur die macOS-Version zum Download bereit.'
};

files.forEach(file => {
  const filePath = path.join(messagesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (data.downloadCTA) {
    data.downloadCTA.notAvailable = translations[file] || translations['en.json'];
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${file}`);
});
