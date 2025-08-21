import {CounterIncrementAndDecrement, CounterIncrementByAmount, CounterTitle} from "components/counter/children";
import './Counter.css';

export const Counter = () => {
    return (
        <div className="global-counter" data-testid="global-counter">
            <CounterTitle />
            <CounterIncrementAndDecrement />
            <CounterIncrementByAmount />
        </div>
    )
}