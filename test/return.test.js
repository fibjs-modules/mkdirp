const mkdirp = require('../');
const path = require('path');
const test = require("test");

test.setup();

describe('return', () => {
  it("return value", () => {
    const x = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const y = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const z = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
    const file = path.join(__dirname, 'tmp/' + [x, y, z].join('/'));
    const made = mkdirp(file);
    assert.equal(made, path.join(__dirname, 'tmp/' + x));
    assert.equal(mkdirp(file), null);
  });
});

//test.run(console.DEBUG);
