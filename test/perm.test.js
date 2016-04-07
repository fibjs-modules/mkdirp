const mkdirp = require('../');
const path = require('path');
const fs = require('fs');
const test = require("test");

const _0777 = parseInt('0777', 8);
const _0755 = parseInt('0755', 8);

test.setup();

describe('perm', () => {
  it("perm", () => {
    const file = '/tmp/' + (Math.random() * (1 << 30)).toString(16);
    mkdirp(file, _0755);
    assert.ok(fs.exists(file));
    const stat = fs.stat(file);
    assert.ok(stat.mode & _0777, _0755);
    assert.ok(stat.isDirectory(), 'target is a directory');
  });

  it("root perm", () => {
    mkdirp('/tmp', _0755)
  });
});

//test.run(console.DEBUG);
