const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));

const v1_0_4 = {
  en: {
    version: "v1.0.4",
    date: "September 11, 2026",
    desc: "Automated releases and code signing.",
    new: "New",
    fixed: "Fixed",
    ciTitle: "Automated Release Pipeline",
    ciDesc: "GitHub Actions workflow for consistent builds and macOS code signing.",
    signedTitle: "Signed macOS Releases",
    signedDesc: "Official signed and notarized macOS releases now available directly on the website.",
    licenseTitle: "Open Source License",
    licenseDesc: "Added MIT License to the repository.",
    submoduleFix: "Fixed submodule checkout configuration in CI workflows"
  },
  pt: {
    version: "v1.0.4",
    date: "11 de setembro de 2026",
    desc: "Lançamentos automatizados e assinatura de código.",
    new: "Novo",
    fixed: "Corrigido",
    ciTitle: "Pipeline de Lançamento Automatizado",
    ciDesc: "Fluxo de trabalho do GitHub Actions para builds consistentes e assinatura de código no macOS.",
    signedTitle: "Lançamentos macOS Assinados",
    signedDesc: "Lançamentos oficiais do macOS assinados e notarizados agora disponíveis diretamente no site.",
    licenseTitle: "Licença de Código Aberto",
    licenseDesc: "Licença MIT adicionada ao repositório.",
    submoduleFix: "Corrigida a configuração de checkout de submódulos nos fluxos de CI"
  },
  es: {
    version: "v1.0.4",
    date: "11 de septiembre de 2026",
    desc: "Lanzamientos automatizados y firma de código.",
    new: "Nuevo",
    fixed: "Corregido",
    ciTitle: "Pipeline de Lanzamiento Automatizado",
    ciDesc: "Flujo de trabajo de GitHub Actions para builds consistentes y firma de código en macOS.",
    signedTitle: "Lanzamientos macOS Firmados",
    signedDesc: "Lanzamientos oficiales de macOS firmados y notarizados ahora disponibles directamente en el sitio web.",
    licenseTitle: "Licencia de Código Abierto",
    licenseDesc: "Licencia MIT agregada al repositorio.",
    submoduleFix: "Configuración de checkout de submódulos corregida en los flujos de CI"
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
    const entry = v1_0_4[langKey];
    
    data.changelog = {
      title: data.changelog.title,
      subtitle: data.changelog.subtitle,
      back: data.changelog.back,
      v1_0_4: entry,
      ...data.changelog
    };
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${file}`);
  }
});
