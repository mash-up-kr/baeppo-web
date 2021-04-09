import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

const RightPopup: FC = () => (
  <Wrapper>
    <Main>
      <ProfileImage src="https://www.flaticon.com/svg/vstatic/svg/20/20673.svg?token=exp=1617989638~hmac=91b642a45c59494b6fc71b5db3b6e056" />
      <ProfileName>Temp</ProfileName>
      <Chevron src="/chevron.png" alt="chevron" width={34} height={28} />
    </Main>
  </Wrapper>
);

export default RightPopup;

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 50px;
  width: 210px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const ProfileName = styled.div`
  flex: 1;
  margin: 0 10px;
  font-size: 16px;
`;

const Chevron = styled(Image)`
  padding: 10px !important;
  cursor: pointer;
`;
