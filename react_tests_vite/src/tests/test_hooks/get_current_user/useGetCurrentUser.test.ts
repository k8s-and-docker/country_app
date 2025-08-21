import {describe, expect, test, vi} from "vitest";
import {MOCKED_USER} from "test_constants";
import {renderHook, waitFor} from "@testing-library/react";
import {useGetCurrentUser} from "hooks";
import {UtilityTests} from "test_utils";
import $api from "api";

vi.mock("api", () => (
    {
        default: {
            get: vi.fn()
        }
    }
));

describe("Test useGetCurrentUser", () => {

    test("Should throws an exception", async() => {
        UtilityTests.mockApiGetMethodWithException($api, undefined);
        const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

        const { result } = renderHook(() => useGetCurrentUser());

        expect(result.current.loading).toBe(true);
        expect(result.current.user).toBeUndefined();

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.user).toBeUndefined();
        })

        expect(consoleSpy).toHaveBeenCalled();
    })

    test("Should get mocked user", async () => {
        UtilityTests.mockApiGetMethod($api, MOCKED_USER);

        const { result } = renderHook(() => useGetCurrentUser());

        expect(result.current.loading).toBe(true);
        expect(result.current.user).toBeUndefined();

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.user).toEqual(MOCKED_USER);
        })
    })

})