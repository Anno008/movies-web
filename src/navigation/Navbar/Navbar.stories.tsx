import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";
import GlobalStyle from "~/App/globalStyles";
import AppThemeProvider from "~/providers/AppThemeProvider";

export default {
  title: "navigation/Navbar",
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <AppThemeProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </AppThemeProvider>
);

export const NavbarStory = Template.bind({});
NavbarStory.storyName = "Navbar";
