const mkdirp = require('../');
const path = require('path');
const fs = require('fs');
const coroutine = require('coroutine');
const test = require("test");

const _0777 = parseInt('0777', 8);
const _0755 = parseInt('0755', 8);

test.setup();

describe('race', () => {
  it("race", () => {
    const ps = ['', 'tmp'];
    for (let i = 0; i < 25; i++) {
      const dir = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
      ps.push(dir);
    }
    const file = path.join(__dirname, ps.join('/').slice(1));

    coroutine.parallel([() => mk(file), () => mk(file), () => mk(file), () => mk(file)]);

    function mk (file) {
      mkdirp(file, _0755);
      assert.ok(fs.exists(file), 'file created');
      const stat = fs.stat(file);
      assert.ok(stat.mode & _0777, _0755);
      assert.ok(stat.isDirectory(), 'target is a directory');
    }
  });
});

//test.run(console.DEBUG);
