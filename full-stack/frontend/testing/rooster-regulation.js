const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      // Define expected output
      const expected = "moo!";

      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.announceDawn();

      // Use an assert method to compare actual and expected result
      assert.strictEqual(result, expected);
    });
  });

  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      // Define expected output
      const expected = "5";

      // Call Rooster.timeAtDawn and store result in variable
      const result = Rooster.timeAtDawn(5);

      // Use an assert method to compare actual and expected result
      assert.strictEqual(result, expected);
    });

    it("throws an error if passed a number less than 0", () => {
      // Define expected output
      const expected = RangeError;

      // Use an assert method to compare actual and expected result
      assert.throws(() => {
        Rooster.timeAtDawn(-1);
      }, expected);
    });

    it("throws an error if passed a number greater than 23", () => {
      // Define expected output
      const expected = RangeError;

      // Use an assert method to compare actual and expected result
      assert.throws(() => {
        Rooster.timeAtDawn(24);
      }, expected);
    });
  });
});