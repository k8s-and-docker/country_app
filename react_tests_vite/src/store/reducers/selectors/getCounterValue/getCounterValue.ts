import type {RootState} from "../../../store.ts";

export const getCounterValue = (state: RootState) =>  {
    return state.counter.value;
}