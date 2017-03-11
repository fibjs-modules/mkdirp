const mkdirp = require('../');
const path = require('path');
const fs = require('fs');
const test = require("test");

const _0755 = parseInt('0755', 8);

const ps = ['', 'tmp'];

for (let i = 0; i < 25; i++) {
  const dir = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  ps.push(dir);
}

let file = ps.join('/');
file = path.join(__dirname, file.slice(1));

// a file in the way
let itw = ps.slice(0, 3).join('/');
itw = path.join(__dirname, itw.slice(1));

test.setup();

describe('clobber', () => {
  it("clobber-pre", () => {
    console.log("about to write to " + itw);
    fs.writeFile(itw, 'I AM IN THE WAY, THE TRUTH, AND THE LIGHT.');
    const stat = fs.stat(itw);
    assert.ok(stat && stat.isFile(), 'should be file');
  });

  it("clobber", () => {
    try {
      mkdirp(file, _0755);
    } catch (e) {
      if (e.number === 20) {
        return;
      }
    }
    throw 'should not exec';
  });
});

//test.run(console.DEBUG);
