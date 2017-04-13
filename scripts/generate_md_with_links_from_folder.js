const fs = require('fs');
const path= require('path');
const folderPath= path.join(__dirname, '/../learning');
const folderName = 'learning';

const files = fs.readdirSync(folderPath);

const mdFilePath = './markdown.md';

files.forEach((file)=> {

  let lines = [];
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(path.join(folderPath, file))
  });

  lineReader.on('line', function (line) {
    lines.push(line);
  });

  lineReader.on('close', () => {
    const fileName = lines[0].slice(lines[0].indexOf('#') + 2, lines[0].length).trim();
    console.log(fileName);
    fs.appendFileSync(mdFilePath, `- [${fileName}](./${folderName}/${file})\n`);
  });
});