import React, {useState} from "react";

export const useCalculateAmount = () => {
    const INITIAL_AMOUNT_VALUE: number = 2;
    const [amount, setAmount] = useState<number>(INITIAL_AMOUNT_VALUE);

    const updateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setAmount(() => value < INITIAL_AMOUNT_VALUE ? INITIAL_AMOUNT_VALUE : value)
    }

    const incrementAmount = () => {
        setAmount(prev => prev + 1)
    }

    const decrementAmount = () => {
        setAmount(prev => (prev - 1) > INITIAL_AMOUNT_VALUE ? (prev - 1) : INITIAL_AMOUNT_VALUE);
    }

    const resetAmount = () => {
        if (amount > INITIAL_AMOUNT_VALUE) {
            setAmount(INITIAL_AMOUNT_VALUE);
        }
    }

    return { amount, updateAmount, incrementAmount, decrementAmount, resetAmount, INITIAL_AMOUNT_VALUE }
}