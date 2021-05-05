import styled from "styled-components";

const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6b37ff;
`;

const PagePopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 560px;
  height: 680px;
  padding: 0 50px;
  background: white;
  border-radius: 8px;
  transform: translate(-50%, -50%);
`;

const PageBottomLogoWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export { PageBackground, PagePopup, PageBottomLogoWrapper };
