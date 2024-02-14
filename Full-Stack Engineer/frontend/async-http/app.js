const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
      if (inventory.sunglasses > 0) {
          resolve('Sunglasses order processed.');
      } else {
          reject('That item is sold out.');
      }
  };
  
  const orderSunglasses = () => {
      return new Promise(myExecutor);
  };
  
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);                      

// The Node setTimeout() Function

  console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:


function usingSTO() {
  console.log('This is the async code in app.js.')
}

setTimeout(usingSTO, 3000)

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

// Success and Failure Callback Functions

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

function handleSuccess(resolvedValue) {
  console.log(resolvedValue);
}

function handleFailure(resolvedValue) {
  console.log(resolvedValue);
}

checkInventory(order).then(handleSuccess, handleFailure);

// library.js

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  
  module.exports = { checkInventory };