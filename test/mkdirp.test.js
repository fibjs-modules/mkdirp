const mkdirp = require('../');
const path = require('path');
const fs = require('fs');
const test = require("test");

const _0777 = parseInt('0777', 8);
const _0755 = parseInt('0755', 8);

test.setup();

describe('mkdirp', () => {
  it("woo", () => {
    const x = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const y = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const z = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const file = path.join(__dirname,'tmp/' + [x, y, z].join('/'));

    mkdirp(file, _0755);
    assert.ok(fs.exists(file));
    const stat = fs.stat(file);
    assert.ok(stat.mode & _0777, _0755);
    assert.ok(stat.isDirectory(), 'target is a directory');
  });
});

//test.run(console.DEBUG);
