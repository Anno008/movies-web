import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import { FlexGrid } from "./FlexGrid";

export default {
  title: "components/atoms/Grids/FlexGrid",
  component: FlexGrid
} as ComponentMeta<typeof FlexGrid>;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  border: 1px solid black;
`;

const Template: ComponentStory<typeof FlexGrid> = args => (
  <FlexGrid {...args}>
    <Box />
    <Box />
  </FlexGrid>
);

export const ColumnFlexGrid = Template.bind({});
ColumnFlexGrid.args = {
  flexDirection: "column"
};

export const ColumnFlexGridWithGap = Template.bind({});
ColumnFlexGridWithGap.args = {
  flexDirection: "column",
  gap: "10px"
};

export const RowFlexGrid = Template.bind({});
RowFlexGrid.args = {
  flexDirection: "row"
};

export const RowFlexGridWithGap = Template.bind({});
RowFlexGridWithGap.args = {
  flexDirection: "row",
  gap: "10px"
};
