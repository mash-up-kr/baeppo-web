import React, { FC } from "react";
import Rating from "react-rating";
import styled from "styled-components";

interface ScoresOptionProps {
  id?: number;
}

const ScoresOption: FC<ScoresOptionProps> = () => (
  <Wrapper>
    <Header>
      <Title>총 점수</Title>
      <Rating
        fractions={2}
        placeholderRating={3.5}
        emptySymbol={<img src="/empty_star.svg" className="icon" />}
        placeholderSymbol={<img src="full_star.svg" className="icon" />}
        fullSymbol={<img src="full_star.svg" className="icon" />}
      />
      <TotalScore>3.5점</TotalScore>
    </Header>

  </Wrapper>
);
export default ScoresOption;

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
`;

const Title = styled.span`
  font-size: 18px;
  margin: -1.7px 33px 0 0;
`;

const TotalScore = styled.span`
  font-size: 18px;
  color: #7E7E7E;
  margin: -3.7px 0 0 9px;
`;
