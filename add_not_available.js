const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));

const titles = {
  'en.json': 'Coming Soon',
  'pt-BR.json': 'Em Breve',
  'es.json': 'Próximamente',
  'ru.json': 'Скоро',
  'tr.json': 'Yakında',
  'fr.json': 'Bientôt disponible',
  'de.json': 'Demnächst'
};

const okays = {
  'en.json': 'Okay',
  'pt-BR.json': 'Entendi',
  'es.json': 'Entendido',
  'ru.json': 'Понятно',
  'tr.json': 'Tamam',
  'fr.json': 'D\'accord',
  'de.json': 'Verstanden'
};

files.forEach(file => {
  const filePath = path.join(messagesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (data.downloadCTA) {
    data.downloadCTA.notAvailableTitle = titles[file] || titles['en.json'];
    data.downloadCTA.okayBtn = okays[file] || okays['en.json'];
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Updated ${file}`);
});
