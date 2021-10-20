import React, { useContext } from "react";

import { Moon, Sun } from "react-feather";
import styled, { useTheme } from "styled-components";

import lightOff from "~/assets/light-off.mp3";
import lightOn from "~/assets/light-on.mp3";
import { FlexGrid } from "~/components/atoms";
import AppThemeContext from "~/contexts/AppThemeContext";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";

const RoundButton = styled.button`
  ${({ theme }) => `border: 3px solid ${theme.secondaryTextColor};`}
  ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  border-radius: 50%;
  padding: 10px;
  transform: scale(0.7);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.8);
  }
`;

const ThemeSwitch = (): JSX.Element => {
  const { theme, setTheme } = useContext(AppThemeContext);
  const switchSound = new Audio(theme === "light" ? lightOff : lightOn);
  const appTheme = useTheme();

  return (
    <FlexGrid>
      <RoundButton
        {...setTestId(locators.themeSwitchToggleButton)}
        onClick={() => {
          switchSound.play();
          setTheme(theme === "light" ? "dark" : "light");
        }}>
        {theme === "light" ? (
          <Moon
            color={appTheme.primaryTextColor}
            {...setTestId(locators.themeSwitchDarkThemeIcon)}
          />
        ) : (
          <Sun
            color={appTheme.primaryTextColor}
            {...setTestId(locators.themeSwitchLightThemeIcon)}
          />
        )}
      </RoundButton>
    </FlexGrid>
  );
};

export default ThemeSwitch;
