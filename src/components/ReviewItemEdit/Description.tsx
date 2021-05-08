import React, { FC } from "react";
import styled from "styled-components";

interface DescriptionProps {
  id?: number;
}

const Description: FC<DescriptionProps> = () => (
  <Wrapper>
    <h3>후기쓰기</h3>
  </Wrapper>
);

export default Description;

const Wrapper = styled.div`
  width: 100%;
`;
