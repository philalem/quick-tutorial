import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import PageLayout from "./PageLayout";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, Router } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={PageLayout} />
        <Route exact path="/posts" component={PageLayout} />
        <Route exact path="/phillip" component={PageLayout} />
        <Route exact path="/contact" component={PageLayout} />
      </Switch>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
