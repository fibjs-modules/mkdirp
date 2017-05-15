const mkdirp = require('../');
const path = require('path');
const fs = require('fs');
const test = require("test");

const _0755 = parseInt('0755', 8);

test.setup();
if (process.platform !== 'win32') {
  describe('root', () => {
    it("root", () => {
      // '/' on unix, 'c:/' on windows.
      const file = path.resolve('/');

      mkdirp(file, _0755);
      const stat = fs.stat(file);
      assert.ok(stat.isDirectory(), 'target is a directory');
    });
  });
}
//test.run(console.DEBUG);
