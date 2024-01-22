const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  files.forEach((file) => {
    if (file.isFile()) {
      const extFile = file.name.split('.').reverse()[0];
      const filePath = path.join(folderPath, file.name);
      fs.stat(filePath, (err, stats) => {
        if (err) console.error(err);
        console.log(
          file.name.replace('.' + extFile, '') +
            '-' +
            extFile +
            '-' +
            (stats.size / 1024).toFixed(3) +
            'kb',
        );
      });
    }
  });
});
