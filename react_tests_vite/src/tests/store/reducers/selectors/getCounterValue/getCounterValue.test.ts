import {describe, expect, test} from "vitest";
import {getCounterValue} from "my_selectors";
import {MOCK_STATE} from "test_constants";

describe("Test counter selector", () => {

    test("Test initial state", () => {
        expect(getCounterValue(MOCK_STATE)).toBe(0);
    })

    test("Test initial state, case when provide wrong expectation", () => {
        expect(getCounterValue(MOCK_STATE)).not.toBe(150);
    })
})