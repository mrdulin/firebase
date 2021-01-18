const testEnvironment = require("firebase-functions-test")();
const rewire = require("rewire");

describe("getSum", () => {
  it("adds two numbers", () => {
    const mod = rewire("./");
    const mAdd = jest.fn().mockReturnValueOnce(666);
    mod.__set__("add", mAdd);
    const wrapper = testEnvironment.wrap(mod.getSum);
    const actual = wrapper({ num1: 2, num2: 2 });
    console.log(actual);
    expect(actual).toEqual({ result: 666 });
    expect(mAdd).toBeCalledWith(2, 2);
  });
});
