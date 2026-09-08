const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(fullPath, content);
}

// Fix en.json
replaceInFile('messages/en.json', [
  ['"features": "Features"', '"features": "Features",\n    "download": "Download Free"'],
  ['"title": "Common <span className=\\"gradient-text\\">questions</span>"', '"title": "Common <gradient>questions</gradient>"'],
  ['"title": "Download <span className=\\"gradient-text\\">PPPlayer Free</span>"', '"title": "Download <gradient>PPPlayer Free</gradient>"']
]);

// Fix pt-BR.json
replaceInFile('messages/pt-BR.json', [
  ['"features": "Recursos"', '"features": "Recursos",\n    "download": "Baixar Grátis"'],
  ['"title": "Perguntas <span className=\\"gradient-text\\">frequentes</span>"', '"title": "Perguntas <gradient>frequentes</gradient>"'],
  ['"title": "Baixe o <span className=\\"gradient-text\\">PPPlayer Grátis</span>"', '"title": "Baixe o <gradient>PPPlayer Grátis</gradient>"']
]);

// Fix es.json
replaceInFile('messages/es.json', [
  ['"features": "Funciones"', '"features": "Funciones",\n    "download": "Descargar Gratis"'],
  ['"title": "Preguntas <span className=\\"gradient-text\\">frecuentes</span>"', '"title": "Preguntas <gradient>frecuentes</gradient>"'],
  ['"title": "Descarga <span className=\\"gradient-text\\">PPPlayer Gratis</span>"', '"title": "Descarga <gradient>PPPlayer Gratis</gradient>"']
]);

// Fix FAQSection.tsx
replaceInFile('components/sections/FAQSection.tsx', [
  ['<span dangerouslySetInnerHTML={{ __html: t("title") }} />', '{t.rich("title", { gradient: (chunks) => <span className="gradient-text">{chunks}</span> })}']
]);

// Fix download/page.tsx
replaceInFile('app/[locale]/download/page.tsx', [
  ['<span dangerouslySetInnerHTML={{ __html: t("title") }} />', '{t.rich("title", { gradient: (chunks) => <span className="gradient-text">{chunks}</span> })}']
]);

console.log('Fixed translations and rich text!');
