import { HTMLProps } from "react";
import styled from "styled-components";

interface Props {
  fS?: string;
  w: string;
  p?: string;
  br?: string;
  bg?: string;
  c?: string;
  m?: string;
}

const ButtonST = styled("button")<Props>`
  padding: ${({ p }) => (p ? p : "0")};
  font-size: ${({ fS }) => (fS ? fS : "2rem")};
  width: ${({ w }) => (w ? w : "auto")};
  background-color: ${({ bg }) => (bg ? bg : "white")};
  border-radius: ${({ br }) => (br ? br : "5px")};
  border: none;
  transition: transform 0.3s;
  color: ${({ c }) => c || "black"};
  margin: ${({ m }) => m || 0};

  &:hover {
    transform: translateY(-0.2rem) scale(1.05);
  }
`;

interface PropsBut extends HTMLProps<HTMLButtonElement> {
  title: string;
  component?: any;
  m?: string;
  fS?: string;
  w?: string;
  p?: string;
  br?: string;
  bg?: string;
  c?: string;
  isTrue?: boolean;
}

export const Button = ({
  title,
  component,
  fS,
  br,
  w,
  p,
  c,
  bg,
  m,
  isTrue,
  ...rest
}: PropsBut) => {
  return (
    <ButtonST
      as={component}
      bg={bg}
      c={c}
      isTrue={isTrue}
      {...rest}
      fS={fS}
      br={br}
      w={w}
      p={p}
      m={m}
    >
      {title}
    </ButtonST>
  );
};

/*

interface Props extends HTMLProps<HTMLButtonElement>{
  title: string,
  onClickHandler?: ()=> void
  fontS?: string;
  padding?: string;
  component?: any
}
const Button = ({title, component, onClickHandler, fontS, padding, ...rest}: Props) => {
  return (
      <CustomButton as={component} {...rest} fontS={fontS} padding={padding} onClick={onClickHandler}>
        {title}
      </CustomButton>
  )
}

export default Button;

*/
