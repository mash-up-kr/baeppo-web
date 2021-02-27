import React, { FC } from "react";
import styled from "styled-components";

interface ScoresOptionProps {
  id?: number;
}

const ScoresOption: FC<ScoresOptionProps> = () => (
  <Wrapper>
    <h3>총 점수</h3>
  </Wrapper>
);
export default ScoresOption;

const Wrapper = styled.div`
  width: 100%;
`;
