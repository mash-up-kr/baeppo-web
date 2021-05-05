import Image from "next/image";
import React from "react";
import styled from "styled-components";

import PopupContent from "types/PopupContent";

const CreatorPopupHead = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  text-align: left;

  > span {
    margin-left: 15px;
  }
`;

const PopupBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 50%;
  margin: 10px 0;
`;

const SectionTitle = styled.div`
  color: #212226;
  font-weight: 700;
  font-size: 14px;
`;

const SectionContent = styled.div`
  margin-top: 8px;
  color: #212226;
  font-weight: 400;
  font-size: 16px;
`;

const creatorPopup: PopupContent = {
  Title: (
    <CreatorPopupHead>
      <Image src="/logo_circle.png" width={40} height={40} />
      <span>MASH UP 10기 Team 6 배뽀</span>
    </CreatorPopupHead>
  ),
  Content: (
    <PopupBody>
      <Section>
        <SectionTitle>Design</SectionTitle>
        <SectionContent>박수아 황지은</SectionContent>
      </Section>
      <Section>
        <SectionTitle>Web</SectionTitle>
        <SectionContent>김지혜 박민수 박영진</SectionContent>
      </Section>
      <Section>
        <SectionTitle>Android</SectionTitle>
        <SectionContent>강다현 최민정 양민욱</SectionContent>
      </Section>
      <Section>
        <SectionTitle>Spring</SectionTitle>
        <SectionContent>김승현 김종현 김대윤 김지희</SectionContent>
      </Section>
    </PopupBody>
  ),
};

export default creatorPopup;
