import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useCalculateAmount } from "hooks";
import React from "react";

describe("Test useCalculateAmount hook", () => {

    describe("Test reset amount", () => {

        test("Case when amount is initial value", () => {
            const { result } = renderHook(() => useCalculateAmount());

            expect(result.current.amount).toBe(result.current.INITIAL_AMOUNT_VALUE);

            act(() => {
                result.current.resetAmount();
            })

            expect(result.current.amount).toBe(result.current.INITIAL_AMOUNT_VALUE);
        })

        test("Default case", () => {
            const { result } = renderHook(() => useCalculateAmount());

            const mockValue = { target: { value: "10" } } as React.ChangeEvent<HTMLInputElement>;

            act(() => {
                result.current.updateAmount(mockValue);
            })

            expect(result.current.amount).toBe(10);

            act(() => {
                result.current.resetAmount();
            })

            expect(result.current.amount).toBe(result.current.INITIAL_AMOUNT_VALUE);
        })
    })

    describe("Test update amount", () => {

        test("Case when value is less than initial", () => {
            const { result } = renderHook(() => useCalculateAmount());

            expect(result.current.amount).toBe(result.current.INITIAL_AMOUNT_VALUE);

            const mockValue = { target: { value: "-10" } } as React.ChangeEvent<HTMLInputElement>;

            act(() => {
                result.current.updateAmount(mockValue);
            })

            expect(result.current.amount).toBe(result.current.INITIAL_AMOUNT_VALUE);
        })

        test("Default case", () => {
            const { result } = renderHook(() => useCalculateAmount());

            expect(result.current.amount).toBe(result.current.INITIAL_AMOUNT_VALUE);

            const mockValue = { target: { value: "15" } } as React.ChangeEvent<HTMLInputElement>;

            act(() => {
                result.current.updateAmount(mockValue);
            })

            expect(result.current.amount).toBe(15);
        })

    })

    describe("Test decrement function", () => {

        test("Case when value is equal initial", () => {
            const { result } = renderHook(() => useCalculateAmount());
            const RESULT_CURRENT = result.current;

            expect(result.current.amount).toBe(RESULT_CURRENT.INITIAL_AMOUNT_VALUE);

            act(() => {
                RESULT_CURRENT.decrementAmount();
            })

            expect(RESULT_CURRENT.amount).toBe(RESULT_CURRENT.INITIAL_AMOUNT_VALUE);
        })

        test("Default case", () => {
            const { result } = renderHook(() => useCalculateAmount());

            const mockEvent = { target: { value: "5" } } as React.ChangeEvent<HTMLInputElement>;

            act(() => {
                result.current.updateAmount(mockEvent);
                result.current.decrementAmount();
            })

            expect(result.current.amount).toBe(4);
        })

    })

    test("Should initialize with default value", () => {
        const { result } = renderHook(() => useCalculateAmount());

        expect(result.current.amount).not.toBe(5);
        expect(result.current.amount).toBe(result.current.INITIAL_AMOUNT_VALUE);
    })

    test("Should increment amount", () => {
        const { result } = renderHook(() => useCalculateAmount());

        expect(result.current.amount).toBe(2);

        act(() => {
            result.current.incrementAmount();
        })

        expect(result.current.amount).toBe(3);
    })
})