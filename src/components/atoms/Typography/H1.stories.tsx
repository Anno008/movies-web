import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { H1 } from "./Typography";

export default {
  title: "components/atoms/Typography/H1",
  component: H1
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = args => <H1 {...args}>Heading</H1>;

export const H1WithMargin = Template.bind({});
H1WithMargin.storyName = "H1 with margin";
H1WithMargin.args = {
  margin: "40px"
};

export const RedH1 = Template.bind({});
RedH1.storyName = "H1 with red color";
RedH1.args = {
  color: "red"
};
