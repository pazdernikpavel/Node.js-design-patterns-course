class FS_Proxy {

  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, format, cb) {
    if (!path.match(/.md$|.MD$/)) {
      return cb(new Error('Can only read Markup files.'));
    } else {
      this.fs.readFile(path, format, (error, contents) => {
        if (error) {
          console.log(error);
          return cb(error);
        } else {
          return cb(null, contents);
        }
      });
    }
  }

  // Implement other interface methods..

}

module.exports = FS_Proxy;