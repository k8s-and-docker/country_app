const delayTest = require("../../async/delay");

describe("Test delay functionality", () => {

    test("giveCallbackAndDelay_whenCall_thenReturnPromise", async () => {
        const result = await  delayTest(() => 5 + 5, 1000);
        const expected = 10;

        expect(result).toBe(expected);
    })

})