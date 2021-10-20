import React from "react";

import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import ThemeSwitch from "./ThemeSwitch";
import ThemeDecorator from "~/storybookDecorators/themeDecorator";

export default {
  title: "components/ThemeSwitch",
  component: ThemeSwitch
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = () => <ThemeSwitch />;

export const ThemeSwitchStoryLight = Template.bind({});
ThemeSwitchStoryLight.storyName = "Theme Switch Light";
ThemeSwitchStoryLight.decorators = [(Story: Story) => ThemeDecorator(Story, "light")];

export const ThemeSwitchStoryDark = Template.bind({});
ThemeSwitchStoryDark.storyName = "Theme Switch Dark";
ThemeSwitchStoryDark.decorators = [(Story: Story) => ThemeDecorator(Story, "dark")];
