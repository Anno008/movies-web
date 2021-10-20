import MovieCardLocators from "./components/MovieCardLocators";
import ThemeSwitchLocators from "./components/ThemeSwitchLocators";
import NavigationLocators from "./navigation/NavigationLocators";
import SearchMoviesPageLocators from "./pages/SearchMoviesPageLocators";
import UpcomingMoviesPageLocators from "./pages/UpcomingMoviesPageLocators";

export default {
  // common
  mainLayout: "mainLayout",
  ...NavigationLocators,

  // components
  ...MovieCardLocators,
  ...ThemeSwitchLocators,

  // pages
  ...SearchMoviesPageLocators,
  ...UpcomingMoviesPageLocators
};
