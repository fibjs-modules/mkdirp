const test = require("test");
const fs = require('fs');
const path = require('path');

const tmp = path.join(__dirname, 'tmp');
if (!fs.exists(tmp))
  fs.mkdir(tmp);

const filelist = fs.readdir(__dirname).toJSON();
filelist.map(file => {
  if (file.endsWith('.test.js')) {
    run(path.join(__dirname, file));
  }
});

process.exit(-test.run(console.DEBUG));
