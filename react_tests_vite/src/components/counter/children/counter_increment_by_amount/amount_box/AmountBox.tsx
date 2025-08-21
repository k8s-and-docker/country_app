import type {IAmountBoxProps} from "models";
import {memo} from "react";

export const AmountBox = memo((
    {
        amount,
        incrementAmount,
        resetAmount,
        updateAmount,
        decrementAmount,
        initialValue: INITIAL_AMOUNT_VALUE
    }: IAmountBoxProps) => {

    return (
        <div
            className="amount-box"
            data-testid="amount-box"
        >
            <button
                onClick={decrementAmount}
                className="amount-box__button"
                data-testid="amount-box__decrement-btn"
                disabled={amount === INITIAL_AMOUNT_VALUE}
            >
                decrement
            </button>

            <input
                type="number"
                value={ amount }
                className="amount-box__value"
                data-testid="amount-box__value"
                onChange={updateAmount}
            />

            { amount > INITIAL_AMOUNT_VALUE &&
                <button
                    onClick={resetAmount}
                    className="amount-box__button amount-box__button_reset"
                    data-testid="amount-box__reset-btn"
                >
                    Reset amount
                </button>
            }

            <button
                onClick={incrementAmount}
                className="amount-box__button"
                data-testid="amount-box__increment-btn"
            >
                increment
            </button>
        </div>
    )
})