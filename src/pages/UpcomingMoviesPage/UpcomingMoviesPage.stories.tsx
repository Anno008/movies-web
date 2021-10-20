import React from "react";

import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import UpcomingMoviesPage from "./UpcomingMoviesPage";
import themeDecorator from "~/storybookDecorators/themeDecorator";

export default {
  title: "pages/UpcomingMoviesPage",
  component: UpcomingMoviesPage
} as ComponentMeta<typeof UpcomingMoviesPage>;

const Template: ComponentStory<typeof UpcomingMoviesPage> = () => <UpcomingMoviesPage />;

export const UpcomingMoviesPageLightTheme = Template.bind({});
UpcomingMoviesPageLightTheme.decorators = [(Story: Story) => themeDecorator(Story, "light")];

export const UpcomingMoviesPageDarkTheme = Template.bind({});
UpcomingMoviesPageDarkTheme.decorators = [(Story: Story) => themeDecorator(Story, "dark")];
