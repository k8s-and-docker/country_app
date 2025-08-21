import {useGlobalCounter, useInitNotification} from "hooks";
import './CounterIncrementAndDecrement.css';
import {Notification} from "components/notification";

export const CounterIncrementAndDecrement = () => {
    const { incr, decr, countValue } = useGlobalCounter();
    const { initNotification, resetNotification, notificationStatus } = useInitNotification();

    const copyText = () => {
        const value: string = String(countValue);

        navigator.clipboard.writeText(value).then();
        initNotification(value);
    }

    return (
        <div
            data-testid="global-counter-block"
            className="counter-main"
        >
            { notificationStatus.status &&
                <Notification
                    notificationStatus={ notificationStatus }
                    resetNotification={ resetNotification }
                />
            }

            <button
                disabled={ countValue === 0 }
                onClick={decr}
                data-testid="global-counter-decrement-button"
                className="counter-main__btn"
            >
                -
            </button>
            <h2
                data-testid="global-counter-value"
                className="counter-main__value"
                onClick={ copyText }
            >
                { countValue }
            </h2>
            <button
                onClick={incr}
                data-testid="global-counter-increment-button"
                className="counter-main__btn"
            >
                +
            </button>
        </div>
    )
}