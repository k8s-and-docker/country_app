import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {App} from "components/App.tsx";
import {Provider} from "react-redux";
import {initReduxStore} from "./store";

const countValue: string = import.meta.env.VITE_INITIAL_COUNTER_VALUE;

const currentStore = countValue
    ? initReduxStore({ counter: { value: parseInt(countValue) } })
    : initReduxStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={ currentStore }>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);

