const squareMeTest = require("../../functions/squareMe");

describe("Test square me functionality", (object, method) => {

    test("givenNumber_whenCallFunction_thenReturnValueInSquare", () => {
        const spyFunc = jest.spyOn(Math, "pow");
        expect(squareMeTest(4)).toBe(16);
        expect(spyFunc).toHaveBeenCalledTimes(1);
    })

    test("givenSpecificNumber_whenCallFunction_thenReturnTheSameValue", () => {
        const spyFunc = jest.spyOn(Math,"pow");

        expect(squareMeTest(1)).toBe(1);
        expect(spyFunc).toHaveBeenCalledTimes(0);
    })

    afterEach(() => {
        jest.clearAllMocks();
    })
})