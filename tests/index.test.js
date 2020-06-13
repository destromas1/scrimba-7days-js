import addBorder from "../src/1.add-border";
import addTwoDigits from "../src/2.add-two-digits";
import firstDuplicate from "../src/3.first-duplicate";
import sumAllPrimes from "../src/4.sum-all-primes";
import evenDigitsOnly from "../src/5.even-digits-only";
import makeArrayConsecutive from "../src/6.make-array-consecutive";

describe("addBorder()", () => {
  it("adds a border around entire application", () => {
    // arrange
    const strings = ["abc", "ded"];

    // act
    const result = addBorder(strings);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual(["*****", "*abc*", "*ded*", "*****"]);
  });
});

describe("addTwoDigits()", () => {
  it("take a two digit number and return the sum of their numbers", () => {
    // arrange
    const num = 29;

    // act
    const result = addTwoDigits(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(11);
  });
});

describe("firstDuplicate()", () => {
  it("returns first duplicated value", () => {
    // arrange
    const nums = [2, 1, 3, 5, 3, 2];

    // act
    const result = firstDuplicate(nums);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(3);
  });

  it("returns -1 when no duplicated values", () => {
    // arrange
    const nums = [2, 1, 3, 5, 4, 6];

    // act
    const result = firstDuplicate(nums);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(-1);
  });
});

describe("sumAllPrimes()", () => {
  it("adds all prime numbers up to input number", () => {
    // arrange
    const num = 10;

    // act
    const result = sumAllPrimes(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(17);
  });

  it("adds all prime numbers up to input number", () => {
    // arrange
    const num = 977;

    // act
    const result = sumAllPrimes(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(73156);
  });

  describe("evenDigitsOnly()", () => {
    it("returns true when all digits are even", () => {
      // arrange
      const nums = 248622;

      // act
      const result = evenDigitsOnly(nums);

      // log
      console.log("result 1 : ", result);

      // assert
      expect(result).toBe(true);
    });

    it("returns fale when any digits are odd", () => {
      // arrange
      const nums = 642386;

      // act
      const result = evenDigitsOnly(nums);

      // log
      console.log("result 2 : ", result);

      // assert
      expect(result).toBe(false);
    });
  });

  describe('makeArrayConsecutive()', () => {
    it('returns total missing numbers between smallest and largest number', () => {
      // arrange
      const nums = [6, 2, 3, 8];

      // act
      const result = makeArrayConsecutive(nums);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(3);
    });
  });
});
