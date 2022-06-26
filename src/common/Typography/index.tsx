import { HTMLProps } from "react";
import styled from "styled-components";

interface Props {
  fS?: string;
  w: string;
  p?: string;
  br?: string;
  c?: string;
  b?: string;
  m?: string;
  isAnimated: boolean;
}

const TypographyST = styled("h1")<Props>`
  padding: ${({ p }) => (p ? p : "0")};
  font-size: ${({ fS }) => (fS ? fS : "2rem")};
  width: ${({ w }) => (w ? w : "auto")};
  border-radius: ${({ br }) => (br ? br : "0")};
  border: ${({ b }) => (b ? b : "none")};
  color: ${({ c }) => (c || "black")};
  margin: ${({ m }) => (m ? m : "0")};
  transition: transform 0.3s;
  position: relative;

  ${({ isAnimated }) => isAnimated && ""}
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 0;
    transition: width 0.5s;
    transition-timing-function: ease-in-out;
  }
  &:hover::after {
    content: "";
    width: 100%;
    /* background-color: #962eb9; */
  }
`;

interface PropsTypography extends HTMLProps<HTMLElement> {
  text: string;
  component?: any;
  fS?: string;
  w?: string;
  p?: string;
  br?: string;
  c?: string;
  b?: string;
  m?: string;
}

export const Typography = ({
  text,
  component,
  fS,
  br,
  w,
  p,
  c,
  ...rest
}: PropsTypography) => {
  return (
    <TypographyST as={component} {...rest} c={c} fS={fS} br={br} w={w} p={p}>
      {text}
    </TypographyST>
  );
};
