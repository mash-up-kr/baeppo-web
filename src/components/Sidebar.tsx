import Image from "next/image";
import React, { FC, useMemo, useState, useCallback } from "react";
import styled from "styled-components";

import DetailSidebar from "./DetailSidebar";
import ReviewList from "./ReviewList";
import SearchInput from "./SearchInput";
import Tab from "./Tab";

const Sidebar: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [hidden, setHidden] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = useCallback((item) => {
    setSelectedItem(item);
    setHidden(false);
  }, []);

  const handleCloseClick = useCallback(() => {
    setHidden(true);
  }, []);

  const renderTabContent = useMemo(() => {
    switch (currentTab) {
      case 1:
        return <>관심리뷰</>;
      case 2:
        return <>마이리뷰</>;
      case 0:
      default:
        return <ReviewList onClick={handleItemClick} />;
    }
  }, [currentTab]);

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
        <TabContent>{renderTabContent}</TabContent>
      </MainSection>
      {!hidden && (
      <DetailSection>
        <DetailSidebar review={selectedItem} onClick={handleCloseClick}/>
      </DetailSection>
      )}
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
  flex-direction: row;
  height: 100vh;
  background: white;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: 100%;
  padding: 22px 24px;
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 732px;
  height: 100%;
  padding: 60px 58px;
  overflow-y: scroll;
  background: #f9f9f9;
`;

const TabContent = styled.div`
  flex: 1;
  overflow-y: scroll;
`;
