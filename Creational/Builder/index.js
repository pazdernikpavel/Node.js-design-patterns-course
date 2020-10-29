const PersonBuilder = require('./PersonBuilder');

// Employees
const sue = new PersonBuilder('Sue')
  .makeEmployee()
  .makeManager(60)
  .build();

const bill = new PersonBuilder('Bill')
  .makeEmployee()
  .makePartTime()
  .build();

const phil = new PersonBuilder('Phill')
  .makeEmployee()
  .build();

// Shoppers
const charles = new PersonBuilder('Charles')
  .withMoney(500)
  .withShoppingList(['jeans', 'sunglasses'])
  .build();

const tabbitha = new PersonBuilder('Tabbitha')
  .withMoney(1000)
  .build();


// Logging
console.log(sue.toString());
console.log(bill.toString());
console.log(phil.toString());
console.log(charles.toString());
console.log(tabbitha.toString());