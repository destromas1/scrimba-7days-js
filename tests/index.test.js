import addBorder from "../src/1.add-border";
import addTwoDigits from "../src/2.add-two-digits";

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
