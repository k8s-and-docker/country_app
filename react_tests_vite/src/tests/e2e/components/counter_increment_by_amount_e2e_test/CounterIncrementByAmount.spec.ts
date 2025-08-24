import {expect, test} from "@playwright/test";
import {DEV_PATH} from "env_constants";

test.describe("Test CounterIncrementByAmount", () => {
    const countValue:number = 10;
    const INITIAL_AMOUNT_VALUE = 2;
    const PATH = DEV_PATH + "/counter";
    const TITLE_ID = "global-counter-value";

    const INITIAL_TITLE_VALUE = String(countValue);

    const INPUT_ID = "amount-box__value";
    const INPUT_INITIAL_VALUE = String(INITIAL_AMOUNT_VALUE);

    test("Test reset button", async({ page }) => {
        await page.goto(PATH);
        const button = page.getByTestId("amount-box__reset-btn");
        const input = page.getByTestId(INPUT_ID);
        const inputValue = "12";

        await expect(button).not.toBeInViewport();

        await input.fill(inputValue);

        await expect(input).toHaveValue(inputValue);
        await expect(button).toBeInViewport();

        await button.click();
        await expect(input).toHaveValue(INPUT_INITIAL_VALUE);
        await expect(button).not.toBeInViewport();
    })

    test.describe("Test increment button", () => {
        const INCREMENT_BUTTON_ID = "amount-buttons-box__increment-btn";

        test("With custom value", async({ page }) => {
            await page.goto(PATH);
            const button = page.getByTestId(INCREMENT_BUTTON_ID);
            const title = page.getByTestId(TITLE_ID);
            const input = page.getByTestId(INPUT_ID);

            const newInputValue = 20;
            const newInputValueAsString = String(newInputValue);
            const expectedResult = String(countValue + newInputValue);

            await expect(title).toHaveText(INITIAL_TITLE_VALUE);
            await expect(input).toHaveValue(INPUT_INITIAL_VALUE);

            await input.fill(newInputValueAsString);
            await expect(input).toHaveValue(newInputValueAsString);

            await button.click();
            await expect(title).toHaveText(expectedResult);
        })

        test("With initial value", async({ page }) => {
            await page.goto(PATH);
            const button = page.getByTestId(INCREMENT_BUTTON_ID);
            const title = page.getByTestId(TITLE_ID);
            const expectedResult = String(countValue + INITIAL_AMOUNT_VALUE)

            await expect(title).toHaveText(INITIAL_TITLE_VALUE);
            await expect(title).toHaveRole("heading");

            await button.click();
            await expect(title).toHaveText(expectedResult);
        })
    })

    test.describe("Test decrement button", () => {
        const DECREMENT_BUTTON_ID = "amount-buttons-box__decrement-btn";

        test ("With custom value, case when custom value is more than global counter value", async({ page }) => {
            await page.goto(PATH);
            const button = page.getByTestId(DECREMENT_BUTTON_ID);
            const title = page.getByTestId(TITLE_ID);
            const input = page.getByTestId(INPUT_ID);
            const inputValue = "20";

            await expect(title).toHaveText(INITIAL_TITLE_VALUE);
            await expect(input).toHaveValue(INPUT_INITIAL_VALUE);

            await input.fill(inputValue);
            await expect(input).toHaveValue(inputValue);

            await button.click();
            await expect(title).toHaveText("0");
            await expect(button).toBeDisabled();
        })

        test ("With custom value", async({ page }) => {
            await page.goto(PATH);
            const button = page.getByTestId(DECREMENT_BUTTON_ID);
            const title = page.getByTestId(TITLE_ID);
            const input = page.getByTestId(INPUT_ID);

            const initialValue = 6;
            const initialValueAsString = String(initialValue);
            const expectedResult = (countValue - initialValue) < INITIAL_AMOUNT_VALUE
                ? INPUT_INITIAL_VALUE
                : String(countValue - initialValue)

            await expect(title).toHaveText(INITIAL_TITLE_VALUE);
            await expect(input).toHaveValue(INPUT_INITIAL_VALUE);

            await input.fill(initialValueAsString);
            await expect(input).toHaveValue(initialValueAsString);

            await button.click();
            await expect(title).toHaveText(expectedResult);
        })

        test ("With initial value", async({ page }) => {
            await page.goto(PATH);
            const button = page.getByTestId(DECREMENT_BUTTON_ID);
            const title = page.getByTestId(TITLE_ID);
            const expectedResult = (countValue - INITIAL_AMOUNT_VALUE) < INITIAL_AMOUNT_VALUE
                ? INPUT_INITIAL_VALUE
                : String(countValue - INITIAL_AMOUNT_VALUE)

            await expect(title).toHaveText(INITIAL_TITLE_VALUE);

            await button.click();
            await expect(title).toHaveText(expectedResult);
        })
    })

})