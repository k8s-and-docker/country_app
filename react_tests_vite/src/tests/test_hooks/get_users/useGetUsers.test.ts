import {describe, expect, test, vi} from "vitest";
import {UtilityTests} from "test_utils";
import $api from "api";
import {USERS_DATA} from "test_constants";
import {renderHook, waitFor} from "@testing-library/react";
import {useGetUsers} from "hooks";

vi.mock("api", () => ({
    default: {
        get: vi.fn()
    }
}))

describe("Test useGetUsers", () => {

    test("Should return empty list", async() => {
        UtilityTests.mockApiGetMethod($api, []);

        const { result } = renderHook(() => useGetUsers());

        expect(result.current.users).toHaveLength(0);

        await waitFor(() => {
            expect(result.current.users).not.toHaveLength(3);
            expect(result.current.users).toHaveLength(0);
        })
    })

    test("Should return three mocked users", async() => {
        UtilityTests.mockApiGetMethod($api, USERS_DATA);

        const { result } = renderHook(() => useGetUsers());

        expect(result.current.users).toHaveLength(0);

        await waitFor(() => {
            expect(result.current.users).toHaveLength(3);
        })
    })

})