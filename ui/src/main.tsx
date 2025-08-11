import {createRoot} from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import {BrowserRouter} from "react-router-dom";
import {AppContext, contextData} from "./factory";

createRoot(document.getElementById('root')!).render(
  <AppContext.Provider value={ contextData }>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </AppContext.Provider>
)
