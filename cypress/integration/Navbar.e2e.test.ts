import locators from "~/testUtils/locators";

describe("Navbar e2e tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should display upcoming movies, search movies and theme switch", () => {
    const upcomingMoviesLink = cy.findByTestId(locators.navbarUpcomingMovies);
    const searchMoviesLink = cy.findByTestId(locators.navbarSearchMovies);
    const themeSwitch = cy.findByTestId(locators.themeSwitchToggleButton);

    upcomingMoviesLink.should("exist");
    searchMoviesLink.should("exist");
    themeSwitch.should("exist");
  });
  it("Should navigate to upcoming movies on click", () => {
    const upcomingMoviesLink = cy.findByTestId(locators.navbarUpcomingMovies);

    upcomingMoviesLink.click();

    const upcomingMoviesContainer = cy.findByTestId(locators.upcomingMoviesPageContainer);

    upcomingMoviesContainer.should("exist");
  });

  it("Should navigate to search movies on click", () => {
    const searchMoviesLink = cy.findByTestId(locators.navbarSearchMovies);

    searchMoviesLink.click();

    const searchMoviesContainer = cy.findByTestId(locators.searchMoviesPageContainer);

    searchMoviesContainer.should("exist");
  });
});
