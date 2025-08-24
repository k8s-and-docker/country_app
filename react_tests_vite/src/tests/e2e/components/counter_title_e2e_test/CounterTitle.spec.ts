import {expect, test} from "@playwright/test";
import {DEV_PATH} from "env_constants";

test.describe("Test CounterTitle", () => {
    const countValue:number = 10;
    const INITIAL_VALUE = String(countValue);

    test("Test reset button", async({ page }) => {
        await page.goto(`${ DEV_PATH }/counter`);
        const button = page.getByTestId("counter-title__reset-btn");
        const title = page.getByTestId("global-counter-value");

        await expect(title).toHaveText(INITIAL_VALUE);
        await expect(button).not.toBeDisabled();

        await button.click();

        await expect(title).toHaveText("0");
        await expect(button).toBeDisabled();
    })

})