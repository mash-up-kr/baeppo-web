import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";

const Sidebar: FC = () => (
  <SidebarWrapper>
    <MainSection>
      <Logo>
        <Image src="/logo.png" alt="logo" width="68px" height="68px" />
        <Image
          src="/logo_text.png"
          alt="logo_text"
          width="auto"
          height="31px"
        />
      </Logo>
      <SearchInput />
    </MainSection>
  </SidebarWrapper>
);

export default Sidebar;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;

  > *:not(:first-child) {
    margin-left: 20px !important;
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  padding: 22px 24px;
  background: white;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
`;

const MainSection = styled.div`
  width: 590px;
  height: 100%;
`;
