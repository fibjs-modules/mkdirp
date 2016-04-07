const mkdirp = require('../');
const path = require('path');
const fs = require('fs');
const test = require("test");

const _0777 = parseInt('0777', 8);
const _0755 = parseInt('0755', 8);
const _0744 = parseInt('0744', 8);

test.setup();

const ps = ['', 'tmp'];

for (let i = 0; i < 25; i++) {
  const dir = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  ps.push(dir);
}

let file = ps.join('/');
file = path.join(__dirname, file.slice(1));

describe('chmod', () => {
  it("chmod-pre", () => {
    const mode = _0744;
    mkdirp(file, mode);
    const stat = fs.stat(file);
    assert.ok(stat && stat.isDirectory(), 'should be directory');
    assert.equal(stat && stat.mode & _0777, mode);
  });

  it("chmod", () => {
    mkdirp(file, _0755);
    const stat = fs.stat(file);
    assert.ok(stat && stat.isDirectory(), 'should be directory');
  });

});

// test.run(console.DEBUG);
