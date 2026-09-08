const fs = require('fs');
const path = require('path');

const updates = {
  'en.json': 'PPPlayer 1.0 is now available',
  'pt-BR.json': 'PPPlayer 1.0 já está disponível',
  'es.json': 'PPPlayer 1.0 ya está disponible',
  'fr.json': 'PPPlayer 1.0 est maintenant disponible',
  'de.json': 'PPPlayer 1.0 ist jetzt verfügbar',
  'ru.json': 'PPPlayer 1.0 теперь доступен',
  'tr.json': 'PPPlayer 1.0 artık mevcut'
};

const messagesDir = path.join(__dirname, 'messages');

for (const [file, newText] of Object.entries(updates)) {
  const filePath = path.join(messagesDir, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (data.downloadPage && data.downloadPage.badge) {
      data.downloadPage.badge = newText;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
      console.log(`Updated ${file}`);
    }
  }
}
