import styled from "styled-components";

interface Props {
  round?: boolean;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
}

export const FloatingButton = styled.button<Props>`
  position: fixed;
  cursor: pointer;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 9px;
  background: var(--primaryBackground);
  width: 100%;
  height: 100%;
  ${props => props.round && "border-radius: 50%;"}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  transition: .2s transform ease-in-out,
              .2s color ease-in-out;
  & > * {
    vertical-align: bottom;
  }

  &:hover:not([disabled]) {
    transform: scale(1.1);
    color: var(--buttonBackground);
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--disabledBackground);
  }
`;
