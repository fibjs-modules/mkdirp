const test = require("test");
const fs = require('fs');
const path = require('path');

const tmp = path.join(__dirname, 'tmp');
if (!fs.exists(tmp))
  fs.mkdir(tmp);

let filelist = fs.readdir(__dirname)
if (filelist.toJSON) {// cpmpat with List & Array.
  filelist = filelist.toJSON();
}
filelist.map(file => {
  if (file.endsWith('.test.js')) {
    run(path.join(__dirname, file));
  }
});

process.exit(-test.run(console.DEBUG));
