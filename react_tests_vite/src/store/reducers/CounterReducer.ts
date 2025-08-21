import {createSlice, type PayloadAction, type Slice} from "@reduxjs/toolkit";
import type {ICounterState} from "models/states";
import type {WritableDraft} from "immer";

export class CounterReducer {
    private static slice: Slice<ICounterState> | null = null;
    private static initialState: ICounterState = {
        value: 0
    }

    private constructor() {}

    private static counterSlice() {
        if (CounterReducer.slice) return CounterReducer.slice;

        CounterReducer.slice = createSlice({
            name: 'counter',
            initialState: CounterReducer.initialState,
            reducers: {
                increment: CounterReducer.incrMethod,
                decrement: CounterReducer.decrMethod,
                incrementByAmount: CounterReducer.incrByAmountMethod,
                decrementByAmount: CounterReducer.decrByAmountMethod,
                resetCounter: CounterReducer.resetMethod
            },
        })

        return CounterReducer.slice;
    }

    private static incrMethod(state: WritableDraft<ICounterState>) {
        state.value += 1;
    }

    private static decrMethod(state: WritableDraft<ICounterState>) {
        if (state.value > 0) {
            state.value -= 1;
        }
    }

    private static decrByAmountMethod(state: WritableDraft<ICounterState>, action: PayloadAction<number>) {
        const result: number = state.value - action.payload;
        state.value = result < 0 ? 0 : result;
    }

    private static incrByAmountMethod(state: WritableDraft<ICounterState>, action: PayloadAction<number>) {
        state.value += action.payload
    }

    private static resetMethod(state: WritableDraft<ICounterState>) {
        state.value = 0;
    }

    public static getReducers() {
        const {increment, decrement, incrementByAmount, resetCounter, decrementByAmount} =
            CounterReducer.counterSlice().actions;

        return { increment, decrement, incrementByAmount, decrementByAmount, resetCounter }
    }

    public static getReducer() {
        return CounterReducer.counterSlice().reducer;
    }

}