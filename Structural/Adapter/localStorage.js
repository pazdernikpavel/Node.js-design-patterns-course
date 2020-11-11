const { writeFileSync, existsSync, readFileSync, unlinkSync, writeFile, readFile } = require('fs');
const { read } = require('fs/promises');

class LocalStorage {

  constructor() {
    if (existsSync('localStorage.json')) {
      console.log('Loading data from localStorage.json');
      const jsonFile = readFileSync('localStorage.json');
      this.items = JSON.parse(jsonFile);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile('localStorage.json', JSON.stringify(this.items), error => {
      if (error) {
        console.log(error);
      }
    });
  }

  getItem(key) {
    return this.items[key];
  }

  clear() {
    this.items = {};
    unlinkSync('localStorage.json', () => {
      console.log('localStorage.json removed');
    });
  }

}

module.exports = new LocalStorage();