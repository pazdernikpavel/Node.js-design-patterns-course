const logger = require('./logger');

class Second {

  constructor() {
    logger.log('Message from second object.');
  }

}

module.exports = Second;