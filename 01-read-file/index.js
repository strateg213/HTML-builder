//const Stream = require('stream');
const fs = require('fs');
//const readableStream = new Stream.Readable();
fs.readFile('./01-read-file/text.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});
