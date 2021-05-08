import Image from "next/image";
import React, { FC, useMemo, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import DetailSidebar from "./DetailSidebar";
import ReviewItemEdit from "./ReviewItemEdit";
import ReviewList from "./ReviewList";
import SearchInput from "./SearchInput";
import Tab from "./Tab";

import Review from "types/Review";
import { sideBarDetailPopupState } from "utils/states/popupState";

const Sidebar: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [detailPopupState, setDetailPopupState] = useState(false);
  const [editPopupState, setEditPopupState] = useRecoilState(sideBarDetailPopupState);

  const [selectedItem, setSelectedItem] = useState<Review>({} as Review);

  const handleItemClick = useCallback((item) => {
    setSelectedItem(item);
    setDetailPopupState(!detailPopupState);
  }, []);

  const handlePopupClear = useCallback(() => {
    setDetailPopupState(false);
    setEditPopupState(false);
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
      </ListSection>
      <ReviewAddButtonWrapper>
        <ReviewAddButton onClick={() => setEditPopupState(true)} />
      </ReviewAddButtonWrapper>
      {(detailPopupState || editPopupState) &&
        <>
          <Background onClick={handlePopupClear} />
          <DetailSection>
            {detailPopupState &&
              <DetailSidebar
                review={selectedItem}
                onClick={() => setDetailPopupState(!detailPopupState)}
              />
            }
            {editPopupState &&
              <ReviewItemEdit />
            }
          </DetailSection>
        </>
      }
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
  max-width: 1322px;
  height: 100vh;
  z-index: 997;

  flex-direction: row;
  background: white;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
`;

const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: 100%;
  padding: 28px 24px;
  background: white;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
`;

const ReviewAddButtonWrapper = styled.div`
  z-index: -2;
  position: fixed;
  bottom: 40px;
  right: 40px;
`;

const ReviewAddButton = styled.button`
  width: 150px;
  height: 48px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: none;
  background-image: url('/review_add_button.svg');
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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
