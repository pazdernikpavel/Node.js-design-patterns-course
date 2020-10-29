const logger = require('./logger');

class First {

  constructor() {
    logger.log('Message from first object.');
  }

}

module.exports = First;