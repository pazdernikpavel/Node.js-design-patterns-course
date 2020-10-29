const scout_prototype = require('./scout_prototype');

const adam = scout_prototype.clone();
adam.name = 'Adam Banks';
adam.addItemToList('slingshot');

const tom = scout_prototype.clone();
tom.name = 'Tom Porcello';
tom.addItemToList('reading light');

console.log(`${adam.name}: ${adam.shoppingList}`);
console.log(`${tom.name}: ${tom.shoppingList}`);