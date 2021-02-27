import Image from "next/image";
import React, { FC, useState } from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";
import Tab from "./Tab";

const Sidebar: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
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
        <Tab
          currentTab={currentTab}
          onTabChange={(index) => setCurrentTab(index)}
        >
          <div>
            <Image src="/tab_list.svg" alt="list" width={16} height={16} />
            입담리스트
          </div>
          <div>
            <Image src="/tab_pick.svg" alt="list" width={16} height={16} />
            관심리뷰
          </div>
          <div>
            <Image src="/tab_my.svg" alt="list" width={16} height={16} />
            마이리뷰
          </div>
        </Tab>
      </MainSection>
    </SidebarWrapper>
  );
};

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
  height: 100vh;
  padding: 22px 24px;
  background: white;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
`;

const MainSection = styled.div`
  width: 590px;
  height: 100%;
`;
