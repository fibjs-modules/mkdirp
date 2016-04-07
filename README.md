# mkdirp

Like `mkdir -p`, but in fibjs!

# example

```js
var mkdirp = require('mkdirp');

try{
	mkdirp('/tmp/a/c/d')
} catch(err) {
	console.error(err)
}

```

then /tmp/a/c/d has beed created.

# methods

```js
const mkdirp = require('mkdirp');
```

## mkdirp(dir, opts)

asynchronously create a new directory and any necessary subdirectories at `dir`
with octal permission string `opts.mode`. If `opts` is a non-object, it will be
treated as the `opts.mode`.

If `opts.mode` isn't specified, it defaults to `0777 & (~process.umask())`.

Returns the first directory that had to be created, if any.

You can optionally pass in an alternate `fs` implementation by passing in
`opts.fs`. Your implementation should have `opts.fs.mkdir(path, mode)` and
`opts.fs.stat(path)`.

# usage

This package also ships with a `mkdirp` command.
```
usage: mkdirp [DIR1,DIR2..] {OPTIONS}

  Create each supplied directory including any necessary parent directories that
  don't yet exist.

  If the directory already exists, do nothing.

OPTIONS are:

  -m, --mode   If a directory needs to be created, set the mode as an octal
               permission string.
```
# license

MIT
