import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paragraph } from "./Typography";

export default {
  title: "components/atoms/Typography/Paragraph",
  component: Paragraph
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = args => (
  <Paragraph {...args}>Paragraph</Paragraph>
);

export const BoldParagraph = Template.bind({});
BoldParagraph.args = {
  bold: true
};

export const ParagraphWithMargin = Template.bind({});
ParagraphWithMargin.args = {
  margin: "40px"
};

export const RedParagraph = Template.bind({});
ParagraphWithMargin.args = {
  color: "red"
};

export const ParagraphWithTextShadow = Template.bind({});
ParagraphWithTextShadow.args = {
  useTextShadow: true
};
