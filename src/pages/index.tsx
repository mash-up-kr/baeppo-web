import React, { FC, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import NaverMap from "components/NaverMap";
import Popup from "components/Popup";
import RightPopup from "components/RightPopup";
import Sidebar from "components/Sidebar";
import popupState from "utils/states/popupState";

const IndexPage: FC = () => {
  const [popupList, setPopupList] = useRecoilState(popupState);

  const handlePopupRemove = useCallback(
    (index: number) => {
      const newList = [...popupList];
      newList.splice(index, 1);
      setPopupList(newList);
    },
    [popupList],
  );

  return (
    <PageWrapper>
      <Sidebar />
      <NaverMap />
      <RightPopup />
      {popupList.map((p, index) => (
        <Popup key={index} onClose={() => handlePopupRemove(index)} popup={p} />
      ))}
    </PageWrapper>
  );
};

export default IndexPage;

const PageWrapper = styled.div`
  display: flex;
`;
