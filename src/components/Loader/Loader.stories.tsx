import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loader from "./Loader";

export default {
  title: "components/Loader",
  component: Loader
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const LoaderStory = Template.bind({});
LoaderStory.storyName = "Loader";
