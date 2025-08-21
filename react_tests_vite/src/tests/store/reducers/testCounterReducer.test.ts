import {describe, expect, test} from "vitest";
import {CounterReducer} from "my_reducers";
import {UtilityTests} from "test_utils";

describe("Test CounterReducer", () => {
    const _ = undefined;
    const REDUCER = CounterReducer.getReducer();
    const GET_SPECIFIED_MOCK_STATUS = UtilityTests.getSpecifiedMockStatus;

    describe("Test reset counter", () => {
        const { resetCounter } = CounterReducer.getReducers();
        const inboundParams = GET_SPECIFIED_MOCK_STATUS(5);
        const outboundParams = GET_SPECIFIED_MOCK_STATUS();
        const unexpectedValue = GET_SPECIFIED_MOCK_STATUS(4);

        test("Success result", () => {
            expect(REDUCER(inboundParams, resetCounter(_))).toEqual(outboundParams);
        })

        test("Expect incorrect result", () => {
            expect(REDUCER(inboundParams, resetCounter(_))).not.toEqual(unexpectedValue);
        })
    })

    describe("Test decrement by amount", () => {
        const { decrementByAmount } = CounterReducer.getReducers();

        test("Case when value is less than amount", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS(1);
            const outboundParams = GET_SPECIFIED_MOCK_STATUS();
            const testingAmount = 4;

            expect(REDUCER(inboundParams, decrementByAmount(testingAmount))).toEqual(outboundParams);
        })

        test("Success result", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS(4);
            const outboundParams = GET_SPECIFIED_MOCK_STATUS(2);
            const testingAmount = 2;

            expect(REDUCER(inboundParams, decrementByAmount(testingAmount))).toEqual(outboundParams);
        })

        test("Expect incorrect result", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS(4);
            const outboundParams = GET_SPECIFIED_MOCK_STATUS(1);
            const testingAmount = 2;

            expect(REDUCER(inboundParams, decrementByAmount(testingAmount))).not.toEqual(outboundParams);
        })

    })

    describe("Test increment function", () => {
        const { increment } = CounterReducer.getReducers();

        test("Test increment function", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS();
            const outboundParams = GET_SPECIFIED_MOCK_STATUS(1);

            expect(REDUCER(inboundParams, increment(_))).toEqual(outboundParams);
        })

        test("Expect incorrect result", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS();
            const unexpectedValue = GET_SPECIFIED_MOCK_STATUS(2);

            expect(REDUCER(inboundParams, increment(_))).not.toEqual(unexpectedValue)
        })
    })

    describe("Test decrement function", () => {
        const { decrement } = CounterReducer.getReducers();

        test("Case when value is 0", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS();
            const outboundParams = GET_SPECIFIED_MOCK_STATUS();

            expect(REDUCER(inboundParams, decrement(_))).toEqual(outboundParams);
        })

        test("Success", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS(1);
            const outboundParams = GET_SPECIFIED_MOCK_STATUS();

            expect(REDUCER(inboundParams, decrement(_))).toEqual(outboundParams);
        })

        test("Case when expect wrong value", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS(1);
            const unexpectedValue = GET_SPECIFIED_MOCK_STATUS(10);

            expect(REDUCER(inboundParams, decrement(_))).not.toEqual(unexpectedValue);
        })
    })

    describe("Test increment by amount", () => {
        const { incrementByAmount } = CounterReducer.getReducers();

        test("Success", () => {
            expect(REDUCER({value: 1}, incrementByAmount(2))).toEqual({ value: 3 });
        })

        test("Case when expect wrong value", () => {
            const inboundParams = GET_SPECIFIED_MOCK_STATUS(1);
            const unexpectedValue = GET_SPECIFIED_MOCK_STATUS(10);
            const testingAmount = 2;

            expect(REDUCER(inboundParams, incrementByAmount(testingAmount))).not.toEqual(unexpectedValue);
        })
    })

})