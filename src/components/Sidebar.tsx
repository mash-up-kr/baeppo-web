import React, { FC } from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";

const Sidebar: FC = () => (
  <SidebarWrapper>
    <Logo />
    <KeySentence>입주자들의 솔직한 이야기를 만나보세요</KeySentence>
    <SearchInput />
  </SidebarWrapper>
);

export default Sidebar;

const Logo = styled.div`
  height: 68px;
  background-color: gray;
`;

const KeySentence = styled.h2`
  margin: 18px 0 20px 0;
  font-weight: normal;
  font-size: 16px;
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 590px;
  height: 100%;
  padding: 22px 24px;
  background: white;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
`;
