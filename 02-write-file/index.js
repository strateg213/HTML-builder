const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const writeStream = fs.createWriteStream(
  path.join(__dirname, '02-write-file.txt'),
);
stdout.write('Hello, enter some text\n');
stdin.on('data', (data) => {
  const input = data.toString();
  if (input.trim() !== 'exit') {
    writeStream.write(data);
  } else {
    stdout.write('Good luck!');
    process.exit();
  }
});
