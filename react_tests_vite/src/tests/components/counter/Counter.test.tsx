import {describe, expect, test} from "vitest";
import {UtilityTests} from "test_utils";
import {userEvent} from "@testing-library/user-event";

describe("Test counter component", () => {
    const user = userEvent.setup();

    test("Test increment process", async() => {

        const { getByTestId } = UtilityTests.customizedRenderByPath(
            "/counter", UtilityTests.initDefaultPreloadedState({initialCountervalue: 5})
        )

        const incrementButton =  getByTestId("global-counter-increment-button");
        expect(getByTestId("global-counter-value")).toHaveTextContent("5");

        await user.click(incrementButton);
        expect(getByTestId("global-counter-value")).toHaveTextContent("6");
    })

    test("Test increment process case expect incorrect answer", async() => {

        const { getByTestId } = UtilityTests.customizedRenderByPath("/counter")
        const incrementButton =  getByTestId("global-counter-increment-button");
        expect(getByTestId("global-counter-value")).toHaveTextContent("0");

        await user.click(incrementButton);
        expect(getByTestId("global-counter-value")).not.toHaveTextContent("2");
    })

    test("Test decrement process", async() => {

        const { getByTestId } = UtilityTests.customizedRenderByPath("/counter")
        const incrementButton =  getByTestId("global-counter-increment-button");
        const decrementButton = getByTestId("global-counter-decrement-button");
        expect(getByTestId("global-counter-value")).toHaveTextContent("0");

        await user.click(incrementButton);
        expect(getByTestId("global-counter-value")).toHaveTextContent("1");

        await user.click(decrementButton);
        expect(getByTestId("global-counter-value")).toHaveTextContent("0");
    })

})