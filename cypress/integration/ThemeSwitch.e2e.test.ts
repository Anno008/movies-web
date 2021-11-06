import locators from "~/testUtils/locators";
import { DarkTheme } from "~/theme/DarkTheme";
import { LightTheme } from "~/theme/LightTheme";

describe("Theme switch e2e tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should change icon on theme change", () => {
    const darkThemeIcon = cy.findByTestId(locators.themeSwitchDarkThemeIcon);
    const navbarBeforeThemeChange = cy.findByTestId(locators.navbar);

    navbarBeforeThemeChange.should("have.backgroundColor", LightTheme.primaryBackgroundColor);

    darkThemeIcon.should("exist");

    const toggleButton = cy.findByTestId(locators.themeSwitchToggleButton);
    toggleButton.click();

    const lightThemeIcon = cy.findByTestId(locators.themeSwitchLightThemeIcon);
    const navbarAfterThemeChange = cy.findByTestId(locators.navbar);
    navbarAfterThemeChange.should("have.backgroundColor", DarkTheme.primaryBackgroundColor);

    lightThemeIcon.should("exist");
  });
});
