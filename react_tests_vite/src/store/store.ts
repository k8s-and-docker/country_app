import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CounterReducer} from "./reducers";

export const rootReducer = combineReducers({
    counter: CounterReducer.getReducer()
})

export const initReduxStore = (
    initialState?: Partial<ReturnType<typeof rootReducer>>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
};

export type RootState = ReturnType<ReturnType<typeof initReduxStore>['getState']>
export type AppDispatch = ReturnType<ReturnType<typeof initReduxStore>['dispatch']>