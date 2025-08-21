import {describe, expect, test, vi} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useSetData} from "hooks";
import React from "react";
import type {IValue} from "models";

describe("Test useSetData", () => {

    test("Test change value after timeout", async() => {
        vi.useFakeTimers();
        const { result } = renderHook(() => useSetData());

        expect(result.current.value).toEqual({});

        await act(async() => {
            await vi.advanceTimersByTimeAsync(100);
        })

        expect(result.current.value).toEqual({
            firstname: "hedgerock",
            lastName: "testovich"
        } as IValue)

        vi.useRealTimers();
    })

    test("Test change", () => {
        const { result } = renderHook(() => useSetData());
        const value = "Test value";
        const mockValue = { target: { value } } as React.ChangeEvent<HTMLInputElement>;

        expect(result.current.target).toBe("");

        act(() => {
            result.current.change(mockValue);
        })

        expect(result.current.target).toBe(value);
    })

    test("Test set status", () => {
        const { result } = renderHook(() => useSetData());

        expect(result.current.status).toBe(false);

        act(() => {
            result.current.click();
        })

        expect(result.current.status).toBe(true);

        act(() => {
            result.current.click();
        })

        expect(result.current.status).toBe(false);
    })

    test("Test initial states", () => {
        const { result } = renderHook(() => useSetData());

        expect(result.current.status).toBe(false);
        expect(result.current.value).toEqual({});
        expect(result.current.target).toBe("");
    })

})