const logger = require('./logger');
const First = require('./First');
const Second = require('./Second');

logger.log('starting app...');
new First();
new Second();
logger.log('finishing config...');

console.log(`${logger.count} logs in total!`);
logger.logs.map(log => console.log(`     ${log.message}`));