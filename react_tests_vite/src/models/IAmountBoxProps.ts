import type {IAmountButtonsBoxProps} from "./IAmountButtonsBoxProps.ts";

export interface IAmountBoxProps extends IAmountButtonsBoxProps {
    incrementAmount: () => void,
    decrementAmount: () => void,
    initialValue: number,
    resetAmount: () => void,
    updateAmount: (e: React.ChangeEvent<HTMLInputElement>) => void
}