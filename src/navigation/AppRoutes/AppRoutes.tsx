import React from "react";

import { Route, Switch } from "react-router";

import { searchMoviesRoute, upcomingMoviesRoute } from "../routes";
import SearchMoviesPage from "~/pages/SearchMoviesPage";
import UpcomingMoviesPage from "~/pages/UpcomingMoviesPage";

const AppRoutes = (): JSX.Element => (
  <Switch>
    <Route path={upcomingMoviesRoute} exact component={UpcomingMoviesPage} />
    <Route path={searchMoviesRoute} exact component={SearchMoviesPage} />
  </Switch>
);
export default AppRoutes;
