import React, { useState } from "react";

import * as StyledComponents from "styled-components";
import { ThemeProvider } from "styled-components";

import AppThemeContext, { AppThemeVariants } from "~/contexts/AppThemeContext";
import { DarkTheme } from "~/theme/DarkTheme";
import { LightTheme } from "~/theme/LightTheme";

const getIsThemeVariant = (theme: string | null): theme is AppThemeVariants =>
  theme === "light" || theme === "dark";

const AppThemeProvider: React.FC = ({ children }) => {
  const themes: Record<AppThemeVariants, StyledComponents.DefaultTheme> = {
    light: LightTheme,
    dark: DarkTheme
  };
  const [theme, setTheme] = useState<AppThemeVariants>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (getIsThemeVariant(storedTheme)) {
      return storedTheme as AppThemeVariants;
    }

    return "light";
  });

  const handleSetTheme = (theme: AppThemeVariants) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <AppThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme
      }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;
