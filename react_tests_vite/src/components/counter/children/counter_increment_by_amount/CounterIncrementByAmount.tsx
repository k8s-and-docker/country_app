import {useCalculateAmount} from "hooks";
import './CounterIncrementByAmount.css';
import {AmountBox, AmountButtonsBox} from "components/counter/children";

export const CounterIncrementByAmount = () => {
    const {
        amount, incrementAmount, decrementAmount, INITIAL_AMOUNT_VALUE, resetAmount, updateAmount
    } = useCalculateAmount();

    return (
        <div
            className="increment-by-amount"
            data-testid="increment-by-amount"
        >
            <AmountBox
                amount={ amount }
                incrementAmount={ incrementAmount }
                decrementAmount={ decrementAmount }
                initialValue = { INITIAL_AMOUNT_VALUE }
                resetAmount={resetAmount}
                updateAmount={updateAmount}
            />

            <AmountButtonsBox amount={ amount }/>
        </div>
    )
}