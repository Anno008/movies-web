import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import UpcomingMoviesPage from "./UpcomingMoviesPage";

export default {
  title: "pages/UpcomingMoviesPage",
  component: UpcomingMoviesPage
} as ComponentMeta<typeof UpcomingMoviesPage>;

const Template: ComponentStory<typeof UpcomingMoviesPage> = () => <UpcomingMoviesPage />;

export const UpcomingMoviesPageStory = Template.bind({});
