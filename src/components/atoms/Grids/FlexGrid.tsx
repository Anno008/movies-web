import styled from "styled-components";

interface Props {
  flexDirection?: "column" | "row";
  gap?: string;
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  alignItems?: string;
  justifyContent?: string;
  flex?: string;
  border?: string;
  borderRadius?: string;
  useBoxShadow?: boolean;
  flexWrap?: string;
  boxSizing?: string;
  position?: string;
  overflow?: string;
}

export const FlexGrid: React.FC<Props> = styled.div<Props>`
  display: flex;
  box-sizing: border-box;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ useBoxShadow, theme }) => useBoxShadow && `box-shadow: 0 0px 4px 1px ${theme.shadowColor};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ boxSizing }) => boxSizing && `box-sizing: ${boxSizing};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
`;
