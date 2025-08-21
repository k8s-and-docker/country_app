import {describe, expect, test} from "vitest";
import {UtilityTests} from "test_utils";
import {userEvent} from "@testing-library/user-event";

describe("Test CounterTitle", () => {
    const PATH = "/counter";

    test("Verify counter-title is on the page", () => {
        const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
        expect(getByTestId("counter-title")).toBeInTheDocument();
    })

    test("Verify counter-title__value is on the page", () => {
        const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
        const title = getByTestId("counter-title__value");
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(/counter/i);
    })

    describe("Test counter-title__reset-btn", () => {
        const USER = userEvent.setup();
        const RESET_BUTTON_ID = "counter-title__reset-btn";
        const GLOBAL_COUNTER_VALUE_ID = "global-counter-value"

        describe("Verify reset button functionality", () => {

            describe("Case when value has changed by amount-buttons-box__decrement-btn", () => {
                const AMOUNT_DECREMENT_BUTTON_ID = "amount-buttons-box__decrement-btn";

                test("Case when value will be an initial one", async () => {
                    const {getByTestId} = UtilityTests.customizedRenderByPath(
                        PATH, UtilityTests.initDefaultPreloadedState({ initialCountervalue: 2 })
                    );
                    const amountDecrementButton = getByTestId(AMOUNT_DECREMENT_BUTTON_ID);
                    const resetButton = getByTestId(RESET_BUTTON_ID);
                    const value = getByTestId(GLOBAL_COUNTER_VALUE_ID);

                    expect(resetButton).not.toBeDisabled();
                    expect(value).toHaveTextContent("2");

                    await USER.click(amountDecrementButton);

                    expect(value).toHaveTextContent("0");
                    expect(resetButton).toBeDisabled();

                    await USER.click(amountDecrementButton);
                    expect(value).toHaveTextContent("0");
                })

                test("Default case", async () => {
                    const {getByTestId} = UtilityTests.customizedRenderByPath(
                        PATH, UtilityTests.initDefaultPreloadedState({ initialCountervalue: 4 })
                    );
                    const amountDecrementButton = getByTestId(AMOUNT_DECREMENT_BUTTON_ID);
                    const resetButton = getByTestId(RESET_BUTTON_ID);
                    const value = getByTestId(GLOBAL_COUNTER_VALUE_ID);

                    expect(resetButton).not.toBeDisabled();
                    expect(value).toHaveTextContent("4");

                    await USER.click(amountDecrementButton);

                    expect(value).toHaveTextContent("2");
                    expect(resetButton).not.toBeDisabled();

                    await USER.click(resetButton);
                    expect(value).toHaveTextContent("0");
                    expect(resetButton).toBeDisabled();
                })

            })

            test("Case when value has changed by amount-buttons-box__increment-btn", async () => {
                const {getByTestId} = UtilityTests.customizedRenderByPath(PATH);
                const amountIncrementButton = getByTestId("amount-buttons-box__increment-btn");
                const resetButton = getByTestId(RESET_BUTTON_ID);
                const value = getByTestId(GLOBAL_COUNTER_VALUE_ID);

                expect(resetButton).toBeDisabled();
                expect(value).toHaveTextContent("0");

                await USER.click(amountIncrementButton);

                expect(value).toHaveTextContent("2");
                expect(resetButton).not.toBeDisabled();

                await USER.click(resetButton);
                expect(value).toHaveTextContent("0");
                expect(resetButton).toBeDisabled();

            })

            test("Default case", async() => {
                const { getByTestId } = UtilityTests.customizedRenderByPath(PATH,
                    UtilityTests.initDefaultPreloadedState({initialCountervalue: 5}));

                const counterValue = getByTestId(GLOBAL_COUNTER_VALUE_ID);
                const button = getByTestId(RESET_BUTTON_ID);

                expect(counterValue).toBeInTheDocument();
                expect(counterValue).toHaveTextContent("5")

                await USER.click(button);
                expect(counterValue).toHaveTextContent("0")
            })

            test("Case when expect wrong value", async() => {
                const { getByTestId } = UtilityTests.customizedRenderByPath(PATH,
                    UtilityTests.initDefaultPreloadedState({initialCountervalue: 5}));

                const counterValue = getByTestId(GLOBAL_COUNTER_VALUE_ID);
                const button = getByTestId(RESET_BUTTON_ID);

                expect(counterValue).toBeInTheDocument();
                expect(counterValue).toHaveTextContent("5")

                await USER.click(button);
                expect(counterValue).not.toHaveTextContent("4")
            })

        })

        test("Verify counter-title__reset-btn is on the page", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(RESET_BUTTON_ID);

            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/clear/i);
            expect(button).toBeDisabled();
        })
    })
})