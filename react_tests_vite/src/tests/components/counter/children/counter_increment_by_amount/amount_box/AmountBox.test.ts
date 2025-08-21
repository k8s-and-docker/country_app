import {describe, expect, test} from "vitest";
import {UtilityTests} from "test_utils";
import {userEvent} from "@testing-library/user-event";
import {fireEvent} from "@testing-library/react";

describe("Test AmountBox", () => {
    const PATH = "/counter";
    const INPUT_ID = "amount-box__value";
    const DECREMENT_BUTTON_ID = "amount-box__decrement-btn";
    const INCREMENT_BUTTON_ID = "amount-box__increment-btn";
    const USER = userEvent.setup();

    test("Check amount-box", () => {
        const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
        const box = getByTestId("amount-box");

        expect(box).toBeInTheDocument();
    })

    describe("Test amount-box__reset-btn", () => {
        const RESET_BUTTON_ID = "amount-box__reset-btn";

        test("Test amount-box__reset-btn functionality case with input changing", async() => {
            const {getByTestId, queryByTestId} = UtilityTests.customizedRenderByPath(PATH);
            const input = getByTestId(INPUT_ID);

            expect(input).toHaveValue(2);

            fireEvent.change(input, { target: { value: 50 } });

            expect(input).toHaveValue(50);
            const resetButton = getByTestId(RESET_BUTTON_ID);
            await USER.click(resetButton);

            expect(input).not.toHaveValue(49);
            expect(input).toHaveValue(2);
            expect(queryByTestId(RESET_BUTTON_ID)).not.toBeInTheDocument();

        })

        test("Test amount-box__reset-btn functionality case with decrement button", async() => {
            const {getByTestId, queryByTestId} = UtilityTests.customizedRenderByPath(PATH);
            const incrementButton = getByTestId(INCREMENT_BUTTON_ID);
            const decrementButton = getByTestId(DECREMENT_BUTTON_ID);

            expect(queryByTestId(RESET_BUTTON_ID)).not.toBeInTheDocument();

            await USER.click(incrementButton);
            expect(getByTestId(RESET_BUTTON_ID)).toBeInTheDocument();

            await USER.click(decrementButton);
            expect(queryByTestId(RESET_BUTTON_ID)).not.toBeInTheDocument();
        })

        test("Test amount-box__reset-btn functionality case with increment button", async() => {
            const {getByTestId, queryByTestId} = UtilityTests.customizedRenderByPath(PATH);
            const incrementButton = getByTestId(INCREMENT_BUTTON_ID);
            const input = getByTestId(INPUT_ID);

            await USER.click(incrementButton);

            const resetButton = getByTestId(RESET_BUTTON_ID);

            await USER.click(resetButton);
            expect(input).toHaveValue(2);
            expect(queryByTestId(RESET_BUTTON_ID)).not.toBeInTheDocument();

        })

        test("Case when button must be in the document", async() => {
            const {getByTestId, queryByTestId} = UtilityTests.customizedRenderByPath(PATH);
            const incrementButton = getByTestId(INCREMENT_BUTTON_ID);

            expect(queryByTestId(RESET_BUTTON_ID)).not.toBeInTheDocument();
            expect(incrementButton).toBeInTheDocument();

            await USER.click(incrementButton);
            expect(getByTestId(RESET_BUTTON_ID)).toBeInTheDocument();
        })

        test("Button shouldn't be in the document by default", () => {
            const {queryByTestId} = UtilityTests.customizedRenderByPath(PATH);

            const button = queryByTestId(RESET_BUTTON_ID);

            expect(button).not.toBeInTheDocument();
        })
    })

    describe("Test amount-box__value", () => {

        test("Check amount-box__value functionality case when user provided incorrect value", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const input = getByTestId(INPUT_ID);

            expect(input).toHaveValue(2);

            fireEvent.change(input, { target: { value: 'some_incorrect_type_and_value' } });

            expect(input).not.toHaveValue('some_incorrect_type_and_value');
            expect(input).toHaveValue(2);
        })

        test("Check amount-box__value functionality case when value can't be less than initial", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const input = getByTestId(INPUT_ID);

            expect(input).toHaveValue(2);

            fireEvent.change(input, { target: { value: 0 } });

            expect(input).not.toHaveValue(0);
            expect(input).toHaveValue(2);
        })

        test("Check amount-box__value functionality default case", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const input = getByTestId(INPUT_ID);

            expect(input).toHaveValue(2);

            fireEvent.change(input, { target: { value: 3 } });

            expect(input).not.toHaveValue(2);
            expect(input).toHaveValue(3);

        })

        test("Check amount-box__value is present", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const input = getByTestId(INPUT_ID);

            expect(input).toBeInTheDocument();
            expect(input).toHaveAttribute("type","number");
            expect(input).toHaveValue(2);
        })
    })

    describe("Test amount-box__increment-btn", () => {

        test("Check amount-box__increment-btn functionality, case when user changed initial value", async() => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(INCREMENT_BUTTON_ID);
            const input = getByTestId(INPUT_ID);

            expect(input).toHaveValue(2);

            fireEvent.change(input, { target: { value: 5 } });

            expect(input).toHaveValue(5);

            await USER.click(button);
            expect(input).not.toHaveValue(3);
            expect(input).toHaveValue(6);
        })

        test("Check amount-box__increment-btn functionality default case", async() => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(INCREMENT_BUTTON_ID);
            const input = getByTestId(INPUT_ID);

            expect(input).toBeInTheDocument();
            expect(input).toHaveValue(2);

            await USER.click(button);
            expect(input).toHaveValue(3);
        })

        test("Check amount-box__increment-btn visibility", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(INCREMENT_BUTTON_ID);

            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/increment/i);
            expect(button).not.toBeDisabled();
        })
    })

    describe("Test amount-box__decrement-btn", () => {

        test("Check amount-box__decrement-btn functionality case when value cannot be less than initial state",
            async() =>
        {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const decrementButton = getByTestId(DECREMENT_BUTTON_ID);
            const input = getByTestId(INPUT_ID);

            expect(input).toBeInTheDocument();
            expect(input).toHaveValue(2);

            await USER.click(decrementButton);

            expect(input).toHaveValue(2);
            expect(decrementButton).toBeDisabled();
        })

        test("Check amount-box__decrement-btn functionality case when user changed input " +
            "value from initial by increment button",
            async() =>
        {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const decrementButton = getByTestId(DECREMENT_BUTTON_ID);
            const incrementButton = getByTestId(INCREMENT_BUTTON_ID);
            const input = getByTestId(INPUT_ID);

            expect(incrementButton).toBeInTheDocument();
            expect(input).toBeInTheDocument();
            expect(input).toHaveValue(2);

            await USER.click(incrementButton);

            expect(decrementButton).not.toBeDisabled();
            expect(input).toHaveValue(3);

            await USER.click(decrementButton);

            expect(input).toHaveValue(2);
            expect(decrementButton).toBeDisabled();
        })

        test("Check amount-box__decrement-btn functionality case when user changed input " +
            "value from initial to another valid",
            async() =>
        {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(DECREMENT_BUTTON_ID);
            const input = getByTestId(INPUT_ID);

            expect(input).toBeInTheDocument();
            expect(input).toHaveValue(2);

            fireEvent.change(input, { target: { value: 3 } })

            expect(button).not.toBeDisabled();
            expect(input).toHaveValue(3);

            await USER.click(button);

            expect(input).toHaveValue(2);
            expect(button).toBeDisabled();
        })

        test("Check amount-box__decrement-btn visibility", () => {
            const { getByTestId } = UtilityTests.customizedRenderByPath(PATH);
            const button = getByTestId(DECREMENT_BUTTON_ID);

            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent(/decrement/i);
            expect(button).toBeDisabled();
        })
    })
})