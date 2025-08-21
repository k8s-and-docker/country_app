import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {App} from "components/App.tsx";
import {Provider} from "react-redux";
import {initReduxStore} from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={ initReduxStore() }>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);

