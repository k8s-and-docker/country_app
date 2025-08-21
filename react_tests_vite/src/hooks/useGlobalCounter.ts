import {CounterReducer} from "my_reducers";
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "my_selectors";

export const useGlobalCounter = () => {
    const { increment, decrement, incrementByAmount, decrementByAmount, resetCounter } = CounterReducer.getReducers();

    //This is to prevent TS2555: Expected at least 1 argument, but got 0 on dispatch functions without arguments
    const _ = undefined;

    const dispatch = useDispatch();
    const countValue: number = useSelector(getCounterValue);

    const incr = () => {
        dispatch(increment(_))
    }

    const decr = () => {
        dispatch(decrement(_))
    }

    const incrByAmount = (amount: number) => {
        dispatch(incrementByAmount(amount));
    }

    const decrByAmount = (amount: number) => {
        dispatch(decrementByAmount(amount))
    }

    const reset = () => {
        dispatch(resetCounter(_));
    }

    return { incr, decr, countValue, incrByAmount, decrByAmount, reset }
}