import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";

import ReviewItemEdit from "components/ReviewItemEdit";

const Sidebar: FC = () => (
  <SidebarWrapper>
    <ListSection>
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
    </ListSection>
    <ItemSection>
      <ReviewItemEdit />
    </ItemSection>
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
  z-index: 1;
  display: flex;
  max-width: 1322px;
  width: 100%;
  height: 100vh;
  z-index: 997;
`;

const ListSection = styled.div`
  width: 44.63%;
  height: 100%;
  padding: 28px 24px;
  background: white;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
`;

const ItemSection = styled.div`
  width: 55.37%;
  height: 100%;
  padding: 60px 58px;
  background-color: #F9F9F9;
`;
