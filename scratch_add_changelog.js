const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'messages');
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json'));

const v1_0_3 = {
  en: {
    version: "v1.0.3",
    date: "September 10, 2026",
    desc: "Background playback and stability.",
    new: "New",
    improved: "Improved",
    fixed: "Fixed",
    hybridEngineTitle: "Hybrid Playback Engine",
    hybridEngineDesc: "Robust background processing and lock-screen playback capabilities.",
    dedupTitle: "Command Deduplication",
    dedupDesc: "Added generation IDs to prevent overlapping and stale media commands across WebView bridge.",
    queueAdvance: "Song queue not automatically advancing to the next track",
    resumeBug: "Paused track unexpectedly resuming when handing off from foreground to PiP or background",
    precision: "Accurate millisecond precision reporting for current track position and playback duration",
    linter: "Eliminated several IDE linter errors and cleaned up redundant files"
  },
  pt: {
    version: "v1.0.3",
    date: "10 de setembro de 2026",
    desc: "Reprodução em segundo plano e estabilidade.",
    new: "Novo",
    improved: "Melhorado",
    fixed: "Corrigido",
    hybridEngineTitle: "Motor de Reprodução Híbrido",
    hybridEngineDesc: "Processamento em segundo plano robusto e reprodução na tela de bloqueio.",
    dedupTitle: "Desduplicação de Comandos",
    dedupDesc: "Adicionados IDs de geração para evitar comandos de mídia sobrepostos e obsoletos.",
    queueAdvance: "A fila de músicas às vezes não avançava automaticamente",
    resumeBug: "Faixa pausada sendo retomada inesperadamente ao alternar aplicativos",
    precision: "Precisão de milissegundos para a posição da faixa atual e duração",
    linter: "Limpeza de código e correção de erros do linter"
  },
  es: {
    version: "v1.0.3",
    date: "10 de septiembre de 2026",
    desc: "Reproducción en segundo plano y estabilidad.",
    new: "Nuevo",
    improved: "Mejorado",
    fixed: "Corregido",
    hybridEngineTitle: "Motor de Reproducción Híbrido",
    hybridEngineDesc: "Procesamiento en segundo plano robusto y reproducción en la pantalla de bloqueo.",
    dedupTitle: "Desduplicación de Comandos",
    dedupDesc: "Se agregaron IDs de generación para evitar comandos multimedia superpuestos.",
    queueAdvance: "La cola de canciones a veces no avanzaba automáticamente",
    resumeBug: "Pista pausada que se reanudaba inesperadamente al cambiar de aplicación",
    precision: "Precisión de milisegundos para la posición actual y duración",
    linter: "Limpieza de código y corrección de errores del linter"
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
    const entry = v1_0_3[langKey];
    
    // Insert v1_0_3 before v1_0_2
    const newChangelog = {
      title: data.changelog.title,
      subtitle: data.changelog.subtitle,
      back: data.changelog.back,
      v1_0_3: entry,
      ...data.changelog
    };
    
    // Remove title/subtitle/back from the spread to avoid duplicates at the bottom
    delete newChangelog.title;
    delete newChangelog.subtitle;
    delete newChangelog.back;
    
    data.changelog = {
      title: data.changelog.title,
      subtitle: data.changelog.subtitle,
      back: data.changelog.back,
      v1_0_3: entry,
      ...data.changelog
    };
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${file}`);
  }
});
