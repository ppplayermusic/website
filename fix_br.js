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

replaceInFile('messages/en.json', [
  ['"title": "Find<br>something<br>worth playing."', '"title": "Find<br></br>something<br></br>worth playing."']
]);

replaceInFile('messages/pt-BR.json', [
  ['"title": "Encontre<br>algo que<br>valha a pena."', '"title": "Encontre<br></br>algo que<br></br>valha a pena."']
]);

replaceInFile('messages/es.json', [
  ['"title": "Encuentra<br>algo que<br>valga la pena."', '"title": "Encuentra<br></br>algo que<br></br>valga la pena."']
]);

console.log('Fixed discover.title!');
