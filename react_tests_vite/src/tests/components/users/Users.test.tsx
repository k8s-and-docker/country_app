import {screen} from "@testing-library/react";
import {afterEach, beforeEach, describe, expect, test, vi} from "vitest";
import {USERS_DATA} from "test_constants";
import $api from "api";
import {UtilityTests} from "test_utils";
import {Users} from "components/users";

vi.mock("api", () => (
    {
        default: {
            get: vi.fn()
        }
    }
));

describe("Test UsersComp", () => {

    beforeEach(() => {
        UtilityTests.mockApiGetMethod($api, USERS_DATA);
    })

    test("Show content", async () => {
        UtilityTests.customizedRender(<Users />);

        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        expect($api.get).toHaveBeenCalledTimes(1);
        screen.debug();
    })

    test("Show content case when list is empty", async () => {
        UtilityTests.mockApiGetMethod($api, []);
        UtilityTests.customizedRender(<Users />);

        expect(screen.queryByTestId("user-item")).not.toBeInTheDocument();
        expect($api.get).toHaveBeenCalledTimes(1);
        screen.debug();
    })

    afterEach(() => {
        vi.clearAllMocks();
    })
})