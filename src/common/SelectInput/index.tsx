import React, { HTMLProps } from "react";
import styled from "styled-components";
import { ITContainer } from "../FlexContainer";
import { Typography } from "../Typography";

interface Props extends HTMLProps<HTMLElement> {
  lable: string;
  name: string;
  options: { name: string; value: string }[];
  setValue: any;
  component?: any;
}

const SelectI = styled.select`
  width: 100%;
  height: 4rem;
  font-size: 1.8rem;
  margin: 1rem 0 2rem;
  border-radius: 5px;
  outline: none;
  background-color: #6ea6c7;
  color: white;
`;

const OptionI = styled.option`
  background-color: white;
  color: #0f1617;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const SelectInput = ({
  component,
  lable,
  name,
  options,
  setValue,
  ...rest
}: Props) => {
  return (
    <ITContainer w="100%" ai="flex-start">
      <Typography text={lable+":"} fS="2.5rem" />
      <SelectI
        as={component}
        {...rest}
        name={name}
        onChange={(e: any) => setValue(e.target.value, "145632")}
      >
        {options.map((opt) => (
          <OptionI key={opt.value} value={opt.value}>
            {" "}
            {opt.name}{" "}
          </OptionI>
        ))}
      </SelectI>
    </ITContainer>
  );
};
