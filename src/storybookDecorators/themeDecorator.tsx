import React from "react";

import { Story } from "@storybook/react";

import AppThemeProvider from "~/providers/AppThemeProvider";

const themeDecorator = (Story: Story, theme: "light" | "dark"): JSX.Element => {
  localStorage.setItem("theme", theme);
  return (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  );
};

export default themeDecorator;
