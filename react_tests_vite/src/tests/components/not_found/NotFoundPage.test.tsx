import {describe, expect, test} from "vitest";
import {UtilityTests} from "test_utils";
import {within} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

describe("Test NotFoundPage", () => {
    const PATH = "some-weird-path";

    test("Case when user clicked on link return to the main page", async() => {
        const { getByTestId, queryByTestId } = UtilityTests.customizedRenderByPath(`/${ PATH }`);
        const user = userEvent.setup();

        const notFoundBox = getByTestId("not-found-page-box");
        const link = within(notFoundBox).getByRole("link");

        expect(queryByTestId("core")).not.toBeInTheDocument();

        await user.click(link);

        expect(queryByTestId("core")).toBeInTheDocument();
        expect(notFoundBox).not.toBeInTheDocument();
    })

    test("Validate elements", () => {
        const { getByTestId } = UtilityTests.customizedRenderByPath(`/${ PATH }`);

        const notFoundBox = getByTestId("not-found-page-box");
        expect(notFoundBox).toBeInTheDocument();

        const title = within(notFoundBox).getByRole("heading", { level: 1 });
        const link = within(notFoundBox).getByRole("link");

        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(`Page with path ${ PATH } not found`);

        expect(link).toBeInTheDocument();
        expect(link).toHaveTextContent("Return to the main page");
    })

})