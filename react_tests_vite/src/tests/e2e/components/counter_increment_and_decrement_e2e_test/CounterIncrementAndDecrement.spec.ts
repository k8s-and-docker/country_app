import {expect, test} from "@playwright/test";
import {DEV_PATH} from "env_constants";

test.describe("Test CounterIncrementAndDecrementE2E", () => {
    const INCREMENT_BUTTON_ID = "global-counter-increment-button";
    const DECREMENT_BUTTON_ID = "global-counter-decrement-button";
    const TITLE_ID = "global-counter-value";

    test("Test decrement button", async({ page }) => {
        await page.goto(`${ DEV_PATH }/counter`);

        const decrementButton = page.getByTestId(DECREMENT_BUTTON_ID);
        const incrementButton = page.getByTestId(INCREMENT_BUTTON_ID);
        const title = page.getByTestId(TITLE_ID);

        await expect(decrementButton).toHaveText("-");
        await expect(decrementButton).toBeDisabled();

        await expect(title).toHaveText("0");
        await expect(decrementButton).toBeDisabled();

        await incrementButton.click();

        await expect(title).toHaveText("1");
        await expect(decrementButton).not.toBeDisabled();

        await decrementButton.click();
        await expect(title).toHaveText("0");
        await expect(decrementButton).toBeDisabled();
    })

    test("Test increment button", async({ page }) => {
        await page.goto(`${ DEV_PATH }/counter`);

        const button = page.getByTestId(INCREMENT_BUTTON_ID);
        const title = page.getByTestId(TITLE_ID);

        await expect(button).toHaveText("+");
        await expect(button).not.toBeDisabled();
        await expect(title).toHaveText("0");

        await button.click();

        await expect(title).toHaveText("1");
    })

})