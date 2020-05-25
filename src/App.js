import React from 'react';
import HomePage from './HomePage/HomePage.js';
import styles from './Static/scss/styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DashboardPage from './DashboardPage/DashboardPage.js';

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/byCountry">
            <DashboardPage />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
