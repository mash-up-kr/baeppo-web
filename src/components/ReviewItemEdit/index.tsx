import Image from "next/image";
import React, { FC } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import AddressOption from "components/ReviewItemEdit/AddressOption";
import Description from "components/ReviewItemEdit/Description";
import ImagesOption from "components/ReviewItemEdit/ImagesOption";
import ScoresOption from "components/ReviewItemEdit/ScoresOption";
import { sideBarDetailPopupState } from "utils/states/popupState";

interface ReviewItemEditProps {
  id?: number;
}

const ReviewItemEdit: FC<ReviewItemEditProps> = () => {
  const setPopupState = useSetRecoilState(sideBarDetailPopupState);

  return (
    <Wrapper>
      <Header>
        <Title>마이리뷰 작성하기</Title>
        <CloseButton onClick={() => setPopupState(false)}>
          <Image src="/close.svg" alt="close" width="32px" height="32px"/>
        </CloseButton>
      </Header>
      <AddressOption />
      <ScoresOption />
      <Description />
      <ImagesOption />
      <CompleteButton />
    </Wrapper>
  );
};
export default ReviewItemEdit;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 516px;
  height: 100%;
  margin-bottom: 70px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 0;
`;

const CloseButton = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #11ffee00;
`;

const CompleteButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -16px);
  width: 150px;
  height: 48px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: none;
  background-image: url('/complete_button.svg');
`;
