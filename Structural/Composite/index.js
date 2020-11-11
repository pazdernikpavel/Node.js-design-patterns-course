const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

const boots = new CatalogItem('Leather boots', 79.99);
const sneakers = new CatalogItem('Kicks', 39.99);
const flipFlops = new CatalogItem('California wook boots', 19.99);

/* console.log(`flipflops total: ${flipFlops.total}`);
boots.print();
sneakers.print(); */

const shoesGroup = new CatalogGroup('Shoes and such', [
  boots,
  sneakers,
  flipFlops
]);

/* console.log(`Shoes group total: ${shoesGroup.total}`)
shoesGroup.print(); */

const foodGroup = new CatalogGroup('Food', [
  new CatalogItem('Milkshake', 5.99),
  new CatalogItem('French fries', 3),
  new CatalogItem('French fries', 3),
]);

const keychain = new CatalogItem('Key chain', .99);

const allGoods = new CatalogGroup('All available goods', [
  keychain,
  shoesGroup,
  foodGroup
]);

allGoods.print();