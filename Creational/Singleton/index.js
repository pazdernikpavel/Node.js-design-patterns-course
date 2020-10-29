const logger = require('./logger');
const First = require('./first');
const Second = require('./second');

logger.log('starting app...');
new First();
new Second();
logger.log('finishing config...');

console.log(`${logger.count} logs in total!`);
logger.logs.map(log => console.log(`     ${log.message}`));