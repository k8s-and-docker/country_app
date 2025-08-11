import './App.css'
import {Route, Routes} from "react-router-dom";
import {CountriesLoading, CurrentCountryLoading, ValidateCountry, ValidatePath} from "../hoc";
import {MainTemplate} from "./templates/MainTemplate.tsx";
import {CountriesCurrentPage, CountriesPage} from '../pages/countries';
import {NotFoundPage} from "../pages";
function App() {

  return (
      <Routes>
          <Route path={'/'} element={
              <ValidatePath>
                  <MainTemplate />
              </ValidatePath>
          }>
              <Route path={'countries/'} element={
                  <CountriesLoading>
                      <CountriesPage />
                  </CountriesLoading>
              }
              />
              <Route path={'countries/:id'} element={
                  <CurrentCountryLoading>
                      <ValidateCountry>
                          <CountriesCurrentPage />
                      </ValidateCountry>
                  </CurrentCountryLoading>
              } />

              <Route path={'404'} element={<NotFoundPage />}/>
          </Route>
      </Routes>
  )
}

export default App
