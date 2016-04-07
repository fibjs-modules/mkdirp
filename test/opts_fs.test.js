var mkdirp = require('../');
var path = require('path');
const test = require("test");

var fs = require('fs');
var _0777 = parseInt('0777', 8);
var _0755 = parseInt('0755', 8);

test.setup();

describe('opts_fs', () => {
  let xfs = {};
  before(() => {
    const mkdir = fs.mkdir;
    const stat = fs.stat;
    xfs.mkdir = function (){
      return mkdir.apply(fs, arguments);
    };
    xfs.stat = function (){
      return stat.apply(fs, arguments);
    };
  });

  it("opts.fs", () => {
    const x = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const y = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const z = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const file = path.join(__dirname, 'tmp/beep/boop/' + [x,y,z].join('/'));

    mkdirp(file, { fs: xfs, mode: _0755 });

    assert.ok(fs.exists(file));
    const stat = fs.stat(file);
    assert.ok(stat.mode & _0777, _0755);
    assert.ok(stat.isDirectory(), 'target not a directory');
  });
});

// test.run(console.DEBUG);
