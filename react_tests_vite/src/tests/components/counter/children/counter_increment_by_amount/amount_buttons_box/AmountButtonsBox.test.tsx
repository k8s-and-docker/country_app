import {describe, expect, test} from "vitest";
import {UtilityTests} from "test_utils";
import {userEvent} from "@testing-library/user-event";
import {fireEvent} from "@testing-library/react";

describe("Test AmountButtonsBox", () => {
    const INPUT_ID = "amount-box__value";
    const VALUE_ID = "global-counter-value";
    const PATH = "/counter";
    const USER = userEvent.setup();

    test("Test amount-buttons-box", () => {
        const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
        const box = getByTestId("amount-buttons-box");

        expect(box).toBeInTheDocument();
    })

    describe("Test amount-buttons-box__increment-btn", () => {
        const INCREMENT_BUTTON_ID = "amount-buttons-box__increment-btn";

        test("Button should be in the document", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(INCREMENT_BUTTON_ID);

            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/increment by amount/i);
        })

        test("Test button functionality case success", async () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);

            const button = getByTestId(INCREMENT_BUTTON_ID);
            const value = getByTestId(VALUE_ID);

            expect(value).toBeInTheDocument();
            expect(value).toHaveTextContent("0");

            await USER.click(button);
            expect(value).toHaveTextContent("2");
        })

        test("Test button functionality case when another amount", async () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);

            const button = getByTestId(INCREMENT_BUTTON_ID);
            const value = getByTestId(VALUE_ID);
            const input = getByTestId(INPUT_ID);

            expect(input).toBeInTheDocument();
            expect(value).toHaveTextContent("0");
            expect(input).toHaveValue(2);

            fireEvent.change(input, {
                target: {
                    value: '5'
                }
            })

            expect(input).toHaveValue(5);

            await USER.click(button);
            expect(value).not.toHaveTextContent("2");
            expect(value).toHaveTextContent("5");
        })
    })

    describe("Test amount-buttons-box__decrement-btn", () => {
        const DECREMENT_BUTTON_ID = "amount-buttons-box__decrement-btn";

        test("Button should be in the document", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(DECREMENT_BUTTON_ID);

            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/decrement by amount/i);
            expect(button).toBeDisabled();
        })

        test("Test button functionality case success", async () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH,
                UtilityTests.initDefaultPreloadedState({ initialCountervalue: 2 })
            );
            const button = getByTestId(DECREMENT_BUTTON_ID);
            const value = getByTestId(VALUE_ID);

            expect(value).toBeInTheDocument();
            expect(value).toHaveTextContent("2");

            await USER.click(button);
            expect(value).toHaveTextContent("0");
        })

        test("Test button functionality case when amount less than value", async () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH,
                UtilityTests.initDefaultPreloadedState({ initialCountervalue: 1 })
            );

            const button = getByTestId(DECREMENT_BUTTON_ID);
            const value = getByTestId(VALUE_ID);
            const input = getByTestId(INPUT_ID);

            expect(input).toBeInTheDocument();
            expect(value).toHaveTextContent("1");
            expect(input).toHaveValue(2);

            await USER.click(button);

            expect(value).not.toHaveTextContent("-1");
            expect(value).toHaveTextContent("0");
        })

        test("Test button functionality case when button is disabled", async () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);

            const button = getByTestId(DECREMENT_BUTTON_ID);
            expect(button).toBeDisabled();
        })

        test("Test button functionality case when another amount", async () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH,
                UtilityTests.initDefaultPreloadedState({ initialCountervalue: 10 })
            );

            const button = getByTestId(DECREMENT_BUTTON_ID);
            const value = getByTestId(VALUE_ID);
            const input = getByTestId(INPUT_ID);

            expect(input).toBeInTheDocument();
            expect(value).toHaveTextContent("10");
            expect(input).toHaveValue(2);

            fireEvent.change(input, {
                target: {
                    value: '5'
                }
            })

            expect(input).toHaveValue(5);

            await USER.click(button);
            expect(value).not.toHaveTextContent("8");
            expect(value).toHaveTextContent("5");
        })
    })

})