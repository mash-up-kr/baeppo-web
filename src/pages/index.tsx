import React, { FC } from "react";
import styled from "styled-components";

import NaverMap from "components/NaverMap";
import Sidebar from "components/Sidebar";

const IndexPage: FC = () => (
  <PageWrapper>
    <Sidebar />
    <NaverMap />
  </PageWrapper>
);

export default IndexPage;

const PageWrapper = styled.div`
  display: flex;
`;
