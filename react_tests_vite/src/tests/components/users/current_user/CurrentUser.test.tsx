import {afterEach, beforeEach, describe, expect, test, vi} from "vitest";
import {UtilityTests} from "test_utils";
import {screen, waitFor} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import $api from "api";
import {USER_DATA, USERS_DATA} from "test_constants";

vi.mock("api", () => (
    {
        default: {
            get: vi.fn()
        }
    }
));

describe("Test current user", () => {

    beforeEach(() => {
        UtilityTests.mockApiGetMethod($api, USERS_DATA);
    })

    afterEach(() => {
        vi.clearAllMocks();
    })

    test("Test to click on current user from list", async () => {
        UtilityTests.customizedRenderByPath("/users");

        const users = await screen.findAllByTestId("path-to-current-user");
        expect(users).toHaveLength(3);
        const user = userEvent.setup();
        await user.click(users[0]);

        expect(await screen.findByTestId("current-user-details")).toBeInTheDocument();
    });

    test("Case when user not found", async () => {
        UtilityTests.mockApiGetMethod($api, null);
        UtilityTests.customizedRenderByPath("/users/9999999999999");

        UtilityTests.mockApiGetMethod($api, USERS_DATA);
        expect(await screen.findByTestId("user-list-page")).toBeInTheDocument();

        const users = await screen.findAllByTestId("path-to-current-user");
        expect(users).toHaveLength(3);
        expect(screen.queryByTestId("current-user-details")).not.toBeInTheDocument();
        expect($api.get).toHaveBeenCalledTimes(2);
    })

    test("Case when throws exception", async () => {
        UtilityTests.mockApiGetMethodWithException($api, USER_DATA);
        UtilityTests.customizedRenderByPath("/users/1");

        await waitFor(() => {
            expect(screen.queryByTestId("current-user-details")).not.toBeInTheDocument();
            expect($api.get).toHaveBeenCalledTimes(1);
        })
    })

    test("Case when user found", async () => {
        UtilityTests.mockApiGetMethod($api, USER_DATA);
        UtilityTests.customizedRenderByPath("/users/1");

        expect(await screen.findByTestId("current-user-details")).toBeInTheDocument();
        expect($api.get).toHaveBeenCalledTimes(1);
    })

})