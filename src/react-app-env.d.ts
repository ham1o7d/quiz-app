/// <reference types="react-scripts" />
declare module "react/jsx-runtime" {
  export default any;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}