import React, { FC } from "react";
import styled from "styled-components";

import NaverMap from "components/NaverMap";
import PopupContext from "components/PopupContext";
import RightPopup from "components/RightPopup";
import Sidebar from "components/Sidebar";

const IndexPage: FC = () => (
  <PageWrapper>
    <Sidebar />
    <NaverMap />
    <RightPopup />
    <PopupContext />
  </PageWrapper>
);

export default IndexPage;

const PageWrapper = styled.div`
  display: flex;
`;
