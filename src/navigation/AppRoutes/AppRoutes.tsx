import React from "react";

import { Route, Switch } from "react-router";

import { kathyLeavingRoute, searchMoviesRoute, upcomingMoviesRoute } from "../routes";
import KathyLeavingPage from "~/pages/KathyLeavingPage";
import SearchMoviesPage from "~/pages/SearchMoviesPage";
import UpcomingMoviesPage from "~/pages/UpcomingMoviesPage";

const AppRoutes = (): JSX.Element => (
  <Switch>
    <Route path={upcomingMoviesRoute} exact component={UpcomingMoviesPage} />
    <Route path={searchMoviesRoute} exact component={SearchMoviesPage} />
    <Route path={kathyLeavingRoute} exact component={KathyLeavingPage} />
  </Switch>
);
export default AppRoutes;
