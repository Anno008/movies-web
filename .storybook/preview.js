import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../src/theme/DarkTheme";
import { LightTheme } from "../src/theme/LightTheme";

const lightTheme = {
  name: "Light",
  ...LightTheme
}

const darkTheme = {
  name: "Dark",
  ...DarkTheme
}
const themes = [lightTheme, darkTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: 'grey',
      },
      {
        name: 'black',
        value: 'black',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}