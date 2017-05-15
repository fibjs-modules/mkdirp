const mkdirp = require('../');
const path = require('path');
const fs = require('fs');
const test = require("test");

const _0777 = parseInt('0777', 8);

test.setup();

if (process.platform !== 'win32') {
  describe('umask', () => {
    it("implicit mode from umask", () => {
      const x = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
      const y = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
      const z = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);

      const file = path.join(__dirname, 'tmp/' + [x, y, z].join('/'));

      mkdirp(file);
      assert.ok(fs.exists(file), 'file created');
      const stat = fs.stat(file);
      assert.equal(stat.mode & _0777, _0777 & (~process.umask()));
      assert.ok(stat.isDirectory(), 'target is a directory');
    });
  });
}
//test.run(console.DEBUG);
