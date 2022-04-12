// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum, div } = require("../src/maths");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    })

    it("Should return division of given 2 numbers : ", () => {
        const res = div(6,3);
        assert.equal(res,2,"Result should be 2 ")
    })

    it("Should return 0 if no 1 is zero : ", () => {
        const res = div(0,3);
        assert.equal(res,0,"Result should be 0 ")
    })

    
    it("Should return 0 if no 2 is zero : ", () => {
        const res = div(5,0);
        assert.equal(res,0,"Result should be 0 ")
    })

})