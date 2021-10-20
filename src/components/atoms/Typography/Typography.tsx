import styled from "styled-components";

interface ParagraphProps {
  bold?: boolean;
  color?: string;
  inline?: boolean;
  margin?: string;
  padding?: string;
  useTextShadow?: boolean;
  transition?: string;
  zIndex?: string;
}

export const Paragraph: React.FC<ParagraphProps> = styled.p<ParagraphProps>`
  ${({ bold }) => bold && "font-weight: bold;"}
  ${({ color, theme }) => `color: ${color ? color : theme.primaryTextColor};`}
  ${({ inline }) => inline && "display: inline;"}
  ${({ margin }) => `margin: ${margin ? margin : 0};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ useTextShadow, theme }) =>
    useTextShadow &&
    `text-shadow: -1px -1px 0 ${theme.textShadowColor}, 1px -1px 0 ${theme.textShadowColor}, -1px 1px 0 ${theme.textShadowColor}, 1px 1px 0 ${theme.textShadowColor}`};
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
`;

interface HeadingProps {
  margin?: string;
  color?: string;
}

export const H1 = styled.h1<HeadingProps>`
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ color, theme }) => `color: ${color ? color : theme.primaryTextColor};`}
`;

export const H2 = styled.h2<HeadingProps>`
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ color, theme }) => `color: ${color ? color : theme.primaryTextColor};`}
`;
interface LabelProps {
  bold?: boolean;
  color?: string;
}

export const Label = styled.label<LabelProps>`
  margin: 0 0 5px 0;
  ${({ bold }) => bold && "font-weight: bold;"}
  ${({ color }) => color && `color: ${color};`}
`;
