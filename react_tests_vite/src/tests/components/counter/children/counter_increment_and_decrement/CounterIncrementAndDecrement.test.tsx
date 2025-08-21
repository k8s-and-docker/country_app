import {describe, expect, test} from "vitest";
import {UtilityTests} from "test_utils";
import {userEvent} from "@testing-library/user-event";
import {within} from "@testing-library/react";

describe("Test CounterIncrementAndDecrement", () => {
    const PATH = "/counter";
    const TITLE_ID = "global-counter-value";
    const NOTIFICATION_ID = "notification-box";
    const USER = userEvent.setup();

    const AMOUNT_DECREMENT_ID = "amount-buttons-box__decrement-btn";
    const AMOUNT_INCREMENT_ID = "amount-buttons-box__increment-btn";

    describe("Test global-counter-increment-button", () => {
        const INCREMENT_BUTTON_ID = "global-counter-increment-button";

        test("Test button functionality case when value was updated by amount-buttons-box__decrement-btn", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(
                PATH, UtilityTests.initDefaultPreloadedState({ initialCountervalue: 4 })
            );

            const globalIncrementButton = getByTestId(INCREMENT_BUTTON_ID);
            const title = getByTestId(TITLE_ID);
            const decrementButton = getByTestId(AMOUNT_DECREMENT_ID);

            expect(title).toHaveTextContent("4");

            await USER.click(decrementButton);
            expect(title).toHaveTextContent("2");

            await USER.click(globalIncrementButton);
            expect(title).toHaveTextContent("3");
        })

        test("Test button functionality case when value was updated by amount-buttons-box__increment-btn", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH);

            const globalIncrementButton = getByTestId(INCREMENT_BUTTON_ID);
            const title = getByTestId(TITLE_ID);
            const incrementButton = getByTestId(AMOUNT_INCREMENT_ID);

            expect(title).toHaveTextContent("0");

            await USER.click(incrementButton);
            expect(title).toHaveTextContent("2");

            await USER.click(globalIncrementButton);
            expect(title).toHaveTextContent("3");
        })

        test("Test button functionality expect incorrect value", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH);

            const button = getByTestId(INCREMENT_BUTTON_ID);
            const title = getByTestId(TITLE_ID);

            expect(title).toHaveTextContent("0");

            await USER.click(button);
            expect(title).not.toHaveTextContent("3");
        })

        test("Test button functionality default case", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH);

            const button = getByTestId(INCREMENT_BUTTON_ID);
            const title = getByTestId(TITLE_ID);

            expect(title).toHaveTextContent("0");

            await USER.click(button);
            expect(title).toHaveTextContent("1");
        })
    })

    describe("Test global-counter-decrement-button", () => {
        const DECREMENT_BUTTON_ID = "global-counter-decrement-button";

        test("Case when expecting invalid result", async () => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH,
                UtilityTests.initDefaultPreloadedState({ initialCountervalue: 2 }));

            const globalDecrementButton = getByTestId(DECREMENT_BUTTON_ID);
            const title = getByTestId(TITLE_ID);

            expect(title).toHaveTextContent("2");
            await USER.click(globalDecrementButton);

            expect(title).not.toHaveTextContent("0");
        })

        describe("Test functionality, case when user change value by amount-buttons-box__decrement-btn", () => {

            test("Case when value after click will be initial", async() => {
                const {getByTestId} = UtilityTests.customizedRenderByPath(PATH,
                    UtilityTests.initDefaultPreloadedState({ initialCountervalue: 2 }));

                const globalDecrementButton = getByTestId(DECREMENT_BUTTON_ID);
                const decrementByAmount = getByTestId(AMOUNT_DECREMENT_ID);

                const title = getByTestId(TITLE_ID);

                expect(globalDecrementButton).not.toBeDisabled();
                expect(title).toHaveTextContent("2");

                await USER.click(decrementByAmount);

                expect(title).toHaveTextContent("0");
                expect(globalDecrementButton).toBeDisabled();

                await USER.click(globalDecrementButton);
                expect(title).toHaveTextContent("0");
            })

            test("Case when value will be in valid range", async() => {
                const {getByTestId} = UtilityTests.customizedRenderByPath(PATH,
                    UtilityTests.initDefaultPreloadedState({ initialCountervalue: 4 }));

                const globalDecrementButton = getByTestId(DECREMENT_BUTTON_ID);
                const decrementByAmount = getByTestId(AMOUNT_DECREMENT_ID);

                const title = getByTestId(TITLE_ID);

                expect(globalDecrementButton).not.toBeDisabled();
                expect(title).toHaveTextContent("4");

                await USER.click(decrementByAmount);

                expect(title).toHaveTextContent("2");
                expect(globalDecrementButton).not.toBeDisabled();

                await USER.click(globalDecrementButton);
                expect(title).toHaveTextContent("1");

            })
        })

        test("Test functionality, case when user change value by amount-buttons-box__increment-btn", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH);
            const globalDecrementButton = getByTestId(DECREMENT_BUTTON_ID);
            const incrementByAmountButton = getByTestId(AMOUNT_INCREMENT_ID);

            const title = getByTestId(TITLE_ID);

            expect(title).toHaveTextContent("0");
            await USER.click(incrementByAmountButton);

            expect(title).toHaveTextContent("2");
            expect(globalDecrementButton).not.toBeDisabled();

            await USER.dblClick(globalDecrementButton);
            expect(title).toHaveTextContent("0");
            expect(globalDecrementButton).toBeDisabled();
        })

        test("Test functionality, case when user try to change value to out of bound", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH);

            const button = getByTestId(DECREMENT_BUTTON_ID);

            expect(button).toBeDisabled();

            const title = getByTestId(TITLE_ID);

            expect(title).toHaveTextContent("0");

            await USER.click(button);

            expect(title).not.toHaveTextContent("-1");
            expect(title).toHaveTextContent("0");
        })

        test("Test functionality, default case", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH,
                UtilityTests.initDefaultPreloadedState({initialCountervalue: 10}));

            const button = getByTestId(DECREMENT_BUTTON_ID);

            expect(button).not.toBeDisabled();

            const title = getByTestId(TITLE_ID);

            expect(title).toHaveTextContent("10");

            await USER.click(button);

            expect(title).toHaveTextContent("9");
            expect(button).not.toBeDisabled();
        })

        test("Test functionality, case when value after click will be as initial", async() => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH,
                UtilityTests.initDefaultPreloadedState({initialCountervalue: 1}));

            const button = getByTestId(DECREMENT_BUTTON_ID);

            expect(button).not.toBeDisabled();

            const title = getByTestId(TITLE_ID);

            expect(title).toHaveTextContent("1");

            await USER.click(button);

            expect(title).toHaveTextContent("0");
            expect(button).toBeDisabled();
        })

    })

    describe("Test global-counter-block", () => {
        
        test("Check if present case when notification is present", async() => {
            const {getByTestId, queryByTestId} = UtilityTests.customizedRenderByPath(PATH);

            const box = getByTestId("global-counter-block");
            const title = within(box).getByTestId(TITLE_ID);
            
            expect(queryByTestId(NOTIFICATION_ID)).not.toBeInTheDocument();
            await USER.click(title);
            expect(getByTestId(NOTIFICATION_ID)).toBeInTheDocument();
        })
        
        test("Check if present", () => {
            const {getByTestId} = UtilityTests.customizedRenderByPath(PATH);

            const box = getByTestId("global-counter-block");
            const boxButtons = within(box).getAllByRole("button");
            const title = within(box).getByTestId(TITLE_ID);
            const notification = within(box).queryByTestId(NOTIFICATION_ID);

            expect(box).toBeInTheDocument();

            expect(boxButtons).toHaveLength(2);

            expect(boxButtons[0]).toHaveTextContent("-");
            expect(boxButtons[0]).toBeDisabled();

            expect(boxButtons[1]).toHaveTextContent("+");
            expect(boxButtons[1]).not.toBeDisabled();

            expect(title).toBeInTheDocument();
            expect(title).toHaveTextContent("0");

            expect(notification).not.toBeInTheDocument();
        })
    })

})