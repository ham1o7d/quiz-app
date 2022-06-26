import WorkVidoe from "../../assets/work-v2.mp4";
import styled from "styled-components";

const VideoST = styled.video`
  width: 100%;
  height: 100vh;
  opacity: 0.65;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;


export const BackgroundVideo = () => {
  return <VideoST src={WorkVidoe} autoPlay muted loop id="myVideo" />;
};
