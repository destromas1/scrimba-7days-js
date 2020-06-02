import addBorder from "../src/1.add-border";

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
