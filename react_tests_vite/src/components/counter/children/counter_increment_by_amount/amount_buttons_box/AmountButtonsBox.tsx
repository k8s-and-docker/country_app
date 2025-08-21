import {useGlobalCounter} from "hooks";
import {memo} from "react";
import type {IAmountButtonsBoxProps} from "models";

export const AmountButtonsBox = memo(({ amount }: IAmountButtonsBoxProps) => {
    const { countValue } = useGlobalCounter();
    const {incrByAmount, decrByAmount} = useGlobalCounter();

    return (
        <div
            className="amount-buttons-box"
            data-testid="amount-buttons-box"
        >
            <button
                className="amount-buttons-box__button"
                data-testid="amount-buttons-box__decrement-btn"
                onClick={() => decrByAmount(amount)}
                disabled={ countValue === 0 }
            >
                Decrement by amount
            </button>

            <button
                className="amount-buttons-box__button"
                data-testid="amount-buttons-box__increment-btn"
                onClick={() => incrByAmount(amount)}
            >
                Increment by amount
            </button>
        </div>
    )
})