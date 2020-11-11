const Shopper = require('./Shopper');
const {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

const alex = new Shopper('Alex', 4000);

const walkman = new InventoryItem('Walkman', 29.99);
const necklace = new InventoryItem('Necklace', 9.99);

// Modifications
const goldNeclace = new GoldenInventoryItem(necklace);
const diamondGoldNeclace = new DiamondInventoryItem(goldNeclace);
const diamondWalkman = new DiamondInventoryItem(walkman);

alex.purchase(diamondGoldNeclace);
alex.purchase(diamondWalkman);
alex.printStatus();