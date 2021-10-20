import React from "react";

import { MainLayout } from "~/components/atoms";
import locators from "~/testUtils/locators";

const SearchMoviesPage = (): JSX.Element => (
  <MainLayout contentContainerTestId={locators.searchMoviesPageContainer}></MainLayout>
);

export default SearchMoviesPage;
