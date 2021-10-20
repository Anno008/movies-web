import React from "react";

import { fireEvent, screen } from "@testing-library/react";

import ThemeSwitch from "../ThemeSwitch";
import locators from "~/testUtils/locators";
import { renderWithContext } from "~/testUtils/renderWithContext";

describe("ThemeSwitch component tests", () => {
  const getItemSpy = jest.spyOn(Storage.prototype, "getItem");
  beforeEach(() => {
    getItemSpy.mockReset();
  });
  it("Should display default light theme", async () => {
    renderWithContext(<ThemeSwitch />);

    const lightThemeIcon = screen.queryByTestId(locators.themeSwitchLightThemeIcon);
    const darkThemeIcon = screen.getByTestId(locators.themeSwitchDarkThemeIcon);

    expect(lightThemeIcon).not.toBeInTheDocument();
    expect(darkThemeIcon).toBeInTheDocument();
  });

  it("Should display dark theme if it is in local storage", () => {
    getItemSpy.mockImplementation(() => "dark");
    renderWithContext(<ThemeSwitch />);

    const lightThemeIcon = screen.getByTestId(locators.themeSwitchLightThemeIcon);
    const darkThemeIcon = screen.queryByTestId(locators.themeSwitchDarkThemeIcon);

    expect(lightThemeIcon).toBeInTheDocument();
    expect(darkThemeIcon).not.toBeInTheDocument();
  });

  it("Should switch themes", () => {
    const playSpy = jest
      .spyOn(global.window.HTMLMediaElement.prototype, "play")
      .mockImplementation();
    renderWithContext(<ThemeSwitch />);

    let lightThemeIcon = screen.queryByTestId(locators.themeSwitchLightThemeIcon);
    let darkThemeIcon = screen.queryByTestId(locators.themeSwitchDarkThemeIcon);

    expect(lightThemeIcon).not.toBeInTheDocument();
    expect(darkThemeIcon).toBeInTheDocument();

    const toggleButton = screen.getByTestId(locators.themeSwitchToggleButton);
    fireEvent.click(toggleButton);

    lightThemeIcon = screen.getByTestId(locators.themeSwitchLightThemeIcon);
    darkThemeIcon = screen.queryByTestId(locators.themeSwitchDarkThemeIcon);

    expect(lightThemeIcon).toBeInTheDocument();
    expect(darkThemeIcon).not.toBeInTheDocument();

    fireEvent.click(toggleButton);

    lightThemeIcon = screen.queryByTestId(locators.themeSwitchLightThemeIcon);
    darkThemeIcon = screen.getByTestId(locators.themeSwitchDarkThemeIcon);

    expect(lightThemeIcon).not.toBeInTheDocument();
    expect(darkThemeIcon).toBeInTheDocument();

    expect(playSpy).toHaveBeenCalledTimes(2);
  });
});
