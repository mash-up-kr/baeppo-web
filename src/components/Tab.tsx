import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface TabProps {
  currentTab: number;
  onTabChange: (index: number) => void;
}

const Tab: FC<TabProps> = ({
  children,
  currentTab,
  onTabChange,
}: PropsWithChildren<TabProps>) => (
  <TabWrapper>
    {React.Children.map(children, (c, index) => (
      <TabItem
        key={index}
        isActive={currentTab === index}
        onClick={() => onTabChange(index)}
      >
        {c}
      </TabItem>
    ))}
  </TabWrapper>
);

export default Tab;

const TabWrapper = styled.div`
  display: flex;
  margin-top: 34px;
  border-bottom: 1px solid #9c9c9c;
`;

const TabItem = styled.div<{ isActive?: boolean }>`
  position: relative;
  width: 115px;
  padding-bottom: 10px;
  font-size: 18px;
  text-align: center;

  div {
    margin-right: 6px;
  }

  ${(props) =>
    (props.isActive ?
      `
    color: black;
    font-weight: 700;

    &:after {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background: black;
      content: "";
    }
    ` :
      `
    color: #696969;
    font-weight: 500;

    img {
      display: none !important;
    }
    `)}
`;
