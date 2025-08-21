import type {ReactNode} from "react";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../store";

export interface IChildren {
    children: ReactNode
}

export const initTestStore = ((preloadedState?: Partial<ReturnType<typeof rootReducer>>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState
    })
)