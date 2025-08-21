import {describe, expect, test} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useInitNotification} from "hooks";

describe("Test useInitNotification", () => {

    test("Test initial value", () => {
        const { result } = renderHook(() => useInitNotification());
        expect(result.current.notificationStatus).toEqual(result.current.initialValue);
    })

    test("Test notification reset", () => {
        const { result } = renderHook(() => useInitNotification());
        const notificationText = "This is notification text";

        act(() => {
            result.current.initNotification(notificationText);
        })

        expect(result.current.notificationStatus.status).toEqual(true);
        expect(result.current.notificationStatus.value).toEqual(notificationText);


        act(() => {
            result.current.resetNotification();
        })

        expect(result.current.notificationStatus.status).toEqual(false);
        expect(result.current.notificationStatus.value).toEqual("");
    })

    test("Test initNotification", () => {
        const { result } = renderHook(() => useInitNotification());
        const notificationText = "This is notification text";

        expect(result.current.notificationStatus.status).toEqual(false);
        expect(result.current.notificationStatus.value).toEqual("");

        act(() => {
            result.current.initNotification(notificationText);
        })

        expect(result.current.notificationStatus.status).toEqual(true);
        expect(result.current.notificationStatus.value).toEqual(notificationText);
    })

})