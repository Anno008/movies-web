import React from "react";

import { Route, Switch } from "react-router";

import SearchMoviesPage from "~/pages/SearchMoviesPage";
import UpcomingMoviesPage from "~/pages/UpcomingMoviesPage";

const AppRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={UpcomingMoviesPage} />
    <Route path="/search" exact component={SearchMoviesPage} />
  </Switch>
);
export default AppRoutes;
