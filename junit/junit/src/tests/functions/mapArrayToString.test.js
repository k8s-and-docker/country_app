const mapArrayToStringTest = require('../../functions/mapArrayToString');

describe("Test map array to string functionality", () => {

    test("givenArray_whenCallFunction_thenReturnFilteredArrayOfNumbersAsStrings", () => {
        const arr = [12, null, 25, "abc"];
        const expected = ["12", "25"];

        expect(mapArrayToStringTest(arr)).toHaveLength(2);
        expect(mapArrayToStringTest(arr)).toStrictEqual(expected);
    })

    test("givenEmptyArray_whenCallFunction_thenReturnEmptyArray", () => {
        expect(mapArrayToStringTest([])).toHaveLength(0);
        expect(mapArrayToStringTest([])).toStrictEqual([]);
    })

    test("givenIncorrectArray_whenCallFunction_thenReturnEmptyArray", () => {
        const incorrectArray = ["abc", null, undefined, true, false];

        expect(mapArrayToStringTest(incorrectArray)).toHaveLength(0);
        expect(mapArrayToStringTest(incorrectArray)).toStrictEqual([]);
    })

    test("givenArray_whenCallFunction_thenReturnFilteredArrayOfNumbersAsStringsWithTheSameSize", () => {
        const correctArray = [12, 23, 25, 32];
        const expected = ["12", "23", "25", "32"];

        expect(mapArrayToStringTest(correctArray)).toHaveLength(correctArray.length);
        expect(mapArrayToStringTest(correctArray)).toStrictEqual(expected);
    })
})