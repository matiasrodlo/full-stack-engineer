// index.js

const Calculate = {
    sum(inputArray) {
      let arrSum = 0;
      for (let i = 0; i < inputArray.length; i++) {
        arrSum += inputArray[i];
      }
      return arrSum;
    },
  
    factorial(number) {
      if (number === 0 || number === 1) {
        return 1;
      } else {
        return number * Calculate.factorial(number - 1);
      }
    },
  };
  
  module.exports = Calculate;
  
// index_test.js

var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("returns the factorial of !5 is 120", () => {
      // setup
      const input = 5;
      const expectedResult = 120;
      // exercise
      const factorialResult = Calculate.factorial(input);
      // Verify
      assert.equal(factorialResult, expectedResult);
    });

    it("returns the factorial of !3 is 6", () => {
      // setup
      const input = 3;
      const expectedResult = 6;
      // exercise
      const factorialResult = Calculate.factorial(input);
      // Verify
      assert.equal(factorialResult, expectedResult);
    });

    it("returns the factorial of !0 is 1", () => {
      // setup
      const input = 0;
      const expectedResult = 1;
      // exercise
      const factorialResult = Calculate.factorial(input);
      // Verify
      assert.equal(factorialResult, expectedResult);
    });
  });
});
