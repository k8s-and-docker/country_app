import {describe, expect, test} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useGlobalCounter} from "hooks";
import {UtilityTests} from "test_utils";


describe("Test useGlobalCounter", () => {

    test("Test reset value", () => {
        const wrapper = UtilityTests.getStoreWrapper(
            UtilityTests.initDefaultPreloadedState({ initialCountervalue: 10 })
        );
        const { result } = renderHook(() => useGlobalCounter(), { wrapper });

        expect(result.current.countValue).toBe(10);

        act(() => {
            result.current.reset()
        })

        expect(result.current.countValue).toBe(0);
    })

    describe("Test decrement by amount", () => {

        test("Case when decrement by amount value is more than count value", () => {
            const wrapper = UtilityTests.getStoreWrapper();
            const { result } = renderHook(() => useGlobalCounter(), { wrapper });

            expect(result.current.countValue).toBe(0);

            act(() => {
                result.current.decrByAmount(2)
            })

            expect(result.current.countValue).not.toBe(-2);
            expect(result.current.countValue).toBe(0);
        })

        test("Default case", () => {
            const wrapper = UtilityTests.getStoreWrapper(
                UtilityTests.initDefaultPreloadedState({ initialCountervalue: 10 })
            );
            const { result } = renderHook(() => useGlobalCounter(), { wrapper });

            expect(result.current.countValue).toBe(10);

            act(() => {
                result.current.decrByAmount(5)
            })

            expect(result.current.countValue).toBe(5);
        })

    })

    describe("Test increment by amount", () => {

        test("Case when have preloaded state", () => {
            const wrapper = UtilityTests.getStoreWrapper(
                UtilityTests.initDefaultPreloadedState({ initialCountervalue: 10 })
            );
            const { result } = renderHook(() => useGlobalCounter(), { wrapper });

            expect(result.current.countValue).toBe(10);

            act(() => {
                result.current.incrByAmount(5)
            })

            expect(result.current.countValue).toBe(15);
        })

        test("Default case", () => {
            const wrapper = UtilityTests.getStoreWrapper();
            const { result } = renderHook(() => useGlobalCounter(), { wrapper });

            expect(result.current.countValue).toBe(0);

            act(() => {
                result.current.incrByAmount(5)
            })

            expect(result.current.countValue).toBe(5);
        })

    })

    describe("Test decrement value", () => {

        test("Case when value is initial", () => {
            const wrapper = UtilityTests.getStoreWrapper();

            const { result } = renderHook(() => useGlobalCounter(), { wrapper })

            expect(result.current.countValue).toBe(0);

            act(() => {
                result.current.decr();
            })

            expect(result.current.countValue).toBe(0);
        })

        test("Default case", () => {
            const wrapper = UtilityTests.getStoreWrapper(
                UtilityTests.initDefaultPreloadedState({ initialCountervalue: 10 })
            );

            const { result } = renderHook(() => useGlobalCounter(), { wrapper })

            expect(result.current.countValue).toBe(10);

            act(() => {
                result.current.decr();
            })

            expect(result.current.countValue).toBe(9);
        })
    })

    test("Test increment value", () => {
        const wrapper = UtilityTests.getStoreWrapper();

        const { result } = renderHook(() => useGlobalCounter(), { wrapper })

        expect(result.current.countValue).toBe(0);

        act(() => {
            result.current.incr();
        })

        expect(result.current.countValue).toBe(1);
    })

})