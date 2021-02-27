import React, { FC } from "react";
import styled from "styled-components";

interface ImagesOptionProps {
  id?: number;
}

const ImagesOption: FC<ImagesOptionProps> = () => (
  <Wrapper><h3>사진등록</h3></Wrapper>
);

export default ImagesOption;

const Wrapper = styled.div`
  width: 100%;
`;
