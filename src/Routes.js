import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";
import MovieDetails from "./components/MovieDetails";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/movie/:id" component={MovieDetails}></Route>
        </Switch>
      </Router>
    );
  }
}
