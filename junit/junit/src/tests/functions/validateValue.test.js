const validateValue = require('../../functions/validateValue');

describe("test validate value function", () => {

   test("givenValue_whenValueInRange_thenReturnTrue", () => {
      expect(validateValue(50)).toBe(true);
   })

   test("givenValue_whenValueEqualsMin_thenReturnTrue", () => {
      expect(validateValue(0)).toBe(true);
   })

   test("givenValue_whenValueEqualsMax_thenReturnTrue", () => {
      expect(validateValue(100)).toBe(true);
   })

   test("givenValue_whenValueIsLessThanMin_thenReturnFalse", () => {
      expect(validateValue(-10)).toBe(false);
   })

   test("givenValue_whenValueIsMoreThanMax_thenReturnFalse", () => {
      expect(validateValue(101)).toBe(false);
   })

})