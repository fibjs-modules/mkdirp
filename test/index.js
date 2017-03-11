const test = require("test");
const fs = require('fs');
const path = require('path');

const filelist = fs.readdir(__dirname).toJSON();
filelist.map(file => {
  if (file.endsWith('.test.js')) {
    run(path.join(__dirname, file));
  }
});

process.exit(-test.run());
