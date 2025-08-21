import {describe, expect, test} from "vitest";
import {UtilityTests} from "test_utils";
import {userEvent} from "@testing-library/user-event";
import {within} from "@testing-library/react";

describe("Test Notification", () => {
    const USER = userEvent.setup();
    const RENDER_PATH = "/counter";
    const NOTIFICATION_BOX_ID = "notification-box";
    const NOTIFICATION_DIVS_ID = "notification-box__value";
    const GLOBAL_COUNTER_ID = "global-counter-value";

    describe("Test notification elements", () => {

        test("Test closing button", async() => {
            const { getByTestId, queryByTestId } = UtilityTests.customizedRenderByPath(RENDER_PATH);
            const counterValue = getByTestId(GLOBAL_COUNTER_ID);

            expect(queryByTestId(NOTIFICATION_BOX_ID)).not.toBeInTheDocument();
            await USER.click(counterValue);

            const notificationBox = getByTestId(NOTIFICATION_BOX_ID);
            expect(notificationBox).toBeInTheDocument();
            const button = within(notificationBox).getByRole("button");

            await USER.click(button);
            expect(queryByTestId(NOTIFICATION_BOX_ID)).not.toBeInTheDocument();
        })

        test("Test status field", async() => {
            const {getByTestId, getAllByTestId} = UtilityTests.customizedRenderByPath(RENDER_PATH);
            const counterValue = getByTestId(GLOBAL_COUNTER_ID);

            await USER.click(counterValue);

            const allDivs = getAllByTestId(NOTIFICATION_DIVS_ID);
            expect(allDivs).toHaveLength(3);

            const operationType = allDivs[2];
            expect(operationType).toHaveTextContent(/status: success/i);
        })

        test("Test content field", async() => {
            const {getByTestId, getAllByTestId} = UtilityTests.customizedRenderByPath(
                RENDER_PATH, UtilityTests.initDefaultPreloadedState({ initialCountervalue: 10 })
            );
            const counterValue = getByTestId(GLOBAL_COUNTER_ID);

            await USER.click(counterValue);

            const allDivs = getAllByTestId(NOTIFICATION_DIVS_ID);
            expect(allDivs).toHaveLength(3);

            const operationType = allDivs[1];
            expect(operationType).toHaveTextContent(/text: 10/i);
        })

        test("Test operation type field", async() => {
            const {getByTestId, getAllByTestId} = UtilityTests.customizedRenderByPath(RENDER_PATH);
            const counterValue = getByTestId(GLOBAL_COUNTER_ID);

            await USER.click(counterValue);

            const allDivs = getAllByTestId(NOTIFICATION_DIVS_ID);
            expect(allDivs).toHaveLength(3);

            const operationType = allDivs[0];
            expect(operationType).toHaveTextContent(/operation: copy/i);
        })

    })

    test("Case when user copied global counter value", async() => {
        const {getByTestId, queryByTestId, getAllByTestId} = UtilityTests.customizedRenderByPath(RENDER_PATH);
        const counterValue = getByTestId(GLOBAL_COUNTER_ID);

        expect(queryByTestId(NOTIFICATION_BOX_ID)).not.toBeInTheDocument();

        await USER.click(counterValue);

        const notificationBox = getByTestId(NOTIFICATION_BOX_ID);

        expect(notificationBox).toBeInTheDocument();

        const button = within(notificationBox).getByRole("button");
        const allDivs = getAllByTestId(NOTIFICATION_DIVS_ID);

        expect(button).toHaveTextContent(/close/i);
        expect(allDivs).toHaveLength(3);
    })

})