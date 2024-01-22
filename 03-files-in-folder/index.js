const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  files.forEach((file) => {
    console.log(file.name);
  });
});

fs.stat('./03-files-in-folder/secret-folder/text.txt', (err, stats) => {
  if (err) console.error(err);
  console.log((stats.size / 1024).toFixed(3) + 'kb');
});
//path.extname('index.html');
