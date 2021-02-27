import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

import AddressOption from "components/ReviewItemEdit/AddressOption";
import Description from "components/ReviewItemEdit/Description";
import ImagesOption from "components/ReviewItemEdit/ImagesOption";
import ScoresOption from "components/ReviewItemEdit/ScoresOption";

interface ReviewItemEditProps {
  id?: number;
}

const ReviewItemEdit: FC<ReviewItemEditProps> = () => (
    <Wrapper>
      <Header>
        <Title>마이리뷰 작성하기</Title>
        <CloseButton>
          <Image src="/close.svg" alt="close" width="32px" height="32px"/>
        </CloseButton>
      </Header>
      <AddressOption />
      <ScoresOption />
      <Description />
      <ImagesOption />
    </Wrapper>
);
export default ReviewItemEdit;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
