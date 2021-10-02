import React from 'react';
import ReactDOM from 'react-dom';
import classes from 'index.module.scss';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
// import reportWebVitals from 'reportWebVitals';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import BreweryController from "controllers/BreweryController";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={classes.App}>
        <Header
          color="blueviolet"
          onClickHandler={() => void undefined}
        />

        <Switch>
          <Route path="/" exact >
            <Redirect to='/Breweries' />
          </Route>
          <Route path="/Breweries/:id?" component={BreweryController} />
        </Switch>

        <Footer color="blueviolet" />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
