const userFactory = require('./userFactory');

const adam = userFactory('Adam', 100);
const tom = userFactory('Tom', 100, 'employee', 'This and That');

console.log(adam.type);
console.log(tom.type);