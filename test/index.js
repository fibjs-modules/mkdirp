require("fibjs-polyfill")({
  global: global
});

const test = require("test");
const fs = require('fs');
const path = require('path');

const filelist = fs.readdir(__dirname).toJSON();
filelist.map(file => {
  if (file.name.endsWith('.test.js')) {
    run(path.join(__dirname, file.name));
  }
});

process.exit(-test.run());
