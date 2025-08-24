import {expect, test} from "@playwright/test";
import {DEV_PATH} from "env_constants";

test.describe("Test CounterIncrementAndDecrementE2E", () => {
    const INCREMENT_BUTTON_ID = "global-counter-increment-button";
    const DECREMENT_BUTTON_ID = "global-counter-decrement-button";
    const TITLE_ID = "global-counter-value";

    const countValue:number = 10;

    const INITIAL_INPUT_VALUE = String(countValue);
    const DECREMENT_INPUT_VALUE = String((countValue - 1) > 0 ? (countValue - 1) : 0);
    const INCREMENT_INPUT_VALUE = String(countValue + 1)

    test("Test decrement button", async({ page }) => {
        await page.goto(`${ DEV_PATH }/counter`);

        const decrementButton = page.getByTestId(DECREMENT_BUTTON_ID);
        const title = page.getByTestId(TITLE_ID);

        await expect(decrementButton).toHaveText("-");
        await expect(decrementButton).not.toBeDisabled();

        await expect(title).toHaveText(INITIAL_INPUT_VALUE);

        await decrementButton.click();
        await expect(title).toHaveText(DECREMENT_INPUT_VALUE);
    })

    test("Test increment button", async({ page }) => {
        await page.goto(`${ DEV_PATH }/counter`);

        const button = page.getByTestId(INCREMENT_BUTTON_ID);
        const title = page.getByTestId(TITLE_ID);

        await expect(button).toHaveText("+");
        await expect(button).not.toBeDisabled();
        await expect(title).toHaveText(INITIAL_INPUT_VALUE);

        await button.click();

        await expect(title).toHaveText(INCREMENT_INPUT_VALUE);
    })

})