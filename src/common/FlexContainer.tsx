import styled from "styled-components";

interface ContainerProps {
  w?: string;
  h?: string;
  m?: string;
  p?: string;
  d?: DPType;
  jc?: JCType;
  ai?: AIType;
  fd?: FDType;
  fw?: FWType;
}

type DPType = "block" | "flex" | "inline" | "inline-block";

type JCType =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-around"
  | "space-between"
  | "space-evenly";

type AIType = "center" | "flex-end" | "flex-start";

type FDType = "column" | "row";

type FWType = "wrap" | "nowrap";

export const ITContainer = styled("div")<ContainerProps>`
  display: ${({ d }) => d || "flex"};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  margin: ${({ m }) => m || "0"};
  padding: ${({ p }) => p || "0"};
  justify-content: ${({ jc }) => jc || "center"};
  align-items: ${({ ai }) => ai || "center"};
  flex-direction: ${({ fd }) => fd || "column"};
  flex-wrap: ${({ fw }) => fw || "nowrap"};
`;
