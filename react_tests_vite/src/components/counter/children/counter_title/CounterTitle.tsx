import {useGlobalCounter} from "hooks";
import './CounterTitle.css';

export const CounterTitle = () => {
    const { countValue, reset } = useGlobalCounter();

    return (
        <div
            className="counter-title"
            data-testid="counter-title"
        >
            <h1
                className="counter-title__value"
                data-testid="counter-title__value"
            >
                Counter
            </h1>

            <button
                onClick={reset}
                disabled={countValue === 0}
                className="counter-title__btn"
                data-testid="counter-title__reset-btn"
            >
                Clear
            </button>
        </div>
    )
}