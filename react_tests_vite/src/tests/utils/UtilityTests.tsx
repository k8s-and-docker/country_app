import {render} from "@testing-library/react";
import type {ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";
import {ApplicationRoutes} from "appRoutes";
import type {AxiosInstance} from "axios";
import type {Mock} from "vitest";
import {Provider} from "react-redux";
import {initReduxStore, rootReducer} from "../../store";
import {type IChildren, initTestStore} from "../store/testStore.ts";

interface ReduxStates {
    initialCountervalue: number;
}

export class UtilityTests {

    private constructor() {}

    public static customizedRenderByPath(
        initialPath: string = "/", preloadedState?: Partial<ReturnType<typeof rootReducer>>) {
        return this.customizedRender(null, initialPath, preloadedState);
    }

    public static initDefaultPreloadedState(states: ReduxStates = {} as ReduxStates):Partial<ReturnType<typeof rootReducer>> {
        if (!states) {
            states = this.defaultInitialStateSetup();
        }

        return {
            counter: {
                value: states.initialCountervalue
            }
        }
    }

    private static defaultInitialStateSetup():ReduxStates  {
        return {
            initialCountervalue: 0
        }
    }

    public static getSpecifiedMockStatus(currentValue: number = 0) {
        return { value: currentValue }
    }

    public static getStoreWrapper(preloadedState?: Partial<ReturnType<typeof rootReducer>>) {
        const store = preloadedState
            ? initTestStore(preloadedState)
            : initTestStore();

        return ({ children }: IChildren) => {
            return <Provider store={ store }>{ children }</Provider>
        }
    }

    public static customizedRender(
        ui: ReactNode, initialPath:string = "/", preloadedState?: Partial<ReturnType<typeof rootReducer>>) {
         return render(
             <Provider store={initReduxStore(preloadedState)}>
                 <MemoryRouter initialEntries={[initialPath]}>
                     <ApplicationRoutes />
                     { ui }
                 </MemoryRouter>
             </Provider>
         );
    }

    public static mockApiGetMethod<T>(api: AxiosInstance, data: T | null) {
        return (api.get as Mock).mockResolvedValue({ data });
    }

    public static mockApiGetMethodWithException<T>(api: AxiosInstance, data: T | null) {
        return (api.get as Mock).mockRejectedValue({ data });
    }

}