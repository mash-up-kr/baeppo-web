import Image from "next/image";
import React, { FC, useCallback, useState } from "react";
import Rating from "react-rating";
import styled from "styled-components";

interface ScoresOptionProps {
  id?: number;
}

const ScoresOption: FC<ScoresOptionProps> = () => {
  const detailOptions = [
    { title: "통학거리", levels: ["멀어요", "괜찮아요", "가까워요"] },
    { title: "치안", levels: ["위험해요", "괜찮아요", "안전해요"] },
    { title: "집주인", levels: ["전쟁이에요", "보통이에요", "친절해요"] },
    { title: "청결", levels: ["더러워요", "괜찮아요", "깨끗해요"] },
  ];
  const [totalScore, setTotalScore] = useState<number>(3.5);
  const [detailScores, setDetailScores] = useState<(number|null)[]>([1, 0, 2, 1]);

  const getScoreImageUrl = (detailIndex:number, levelIndex: number) => {
    let fileName = `/level${levelIndex + 1}`;
    fileName += detailScores[detailIndex] === levelIndex ? "_active" : "";

    return `${fileName}.svg`;
  };

  const handleScoreLevelChange = useCallback(
    (detailIndex:number, levelIndex: number) => {
      const newDetailScores = [...detailScores];
      const score = newDetailScores[detailIndex];
      newDetailScores[detailIndex] = (score === null || score !== levelIndex) ? levelIndex : null;

      setDetailScores(newDetailScores);
    },
    [detailScores, setDetailScores],
  );

  return (
    <Wrapper>
      <Header>
        <Title>총 점수</Title>
        <Rating
          fractions={2}
          placeholderRating={totalScore}
          emptySymbol={<img src="/empty_star.svg" className="icon" />}
          placeholderSymbol={<img src="full_star.svg" className="icon" />}
          fullSymbol={<img src="full_star.svg" className="icon" />}
          onClick={setTotalScore}
        />
        <TotalScore>{totalScore}점</TotalScore>
      </Header>
      <DetailWrapper>
        {detailOptions.map((detail, detailIndex) => (
          <DetailItemWrapper key={`detail_score_wrapper${detailIndex}`} index={detailIndex}>
            <DetailTitle index={detailIndex}>{detail.title}</DetailTitle>
            <DetailLevels>
              {detail.levels.map((level, levelIndex) => (
                <DetailLevel key={`detail${detailIndex}_score${levelIndex}`} onClick={() => handleScoreLevelChange(detailIndex, levelIndex)}>
                  <Image src={getScoreImageUrl(detailIndex, levelIndex)} alt="close" width="40px" height="40px"/>
                  {level}
                </DetailLevel>
              ))}
            </DetailLevels>
          </DetailItemWrapper>
        ))}
      </DetailWrapper>
    </Wrapper>
  );
};
export default ScoresOption;

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  font-size: 18px;
  margin: -1.7px 33px 0 0;
`;

const TotalScore = styled.span`
  font-size: 18px;
  color: #7E7E7E;
  margin: -3.6px 0 0 9px;
`;

const DetailWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const DetailItemWrapper = styled.div<{index: number }>`
  display: flex;
  justify-content: ${(props) => (props.index % 2 === 0 ? "flex-start" : "flex-end")};
  padding: 10px 0;
`;

const DetailTitle = styled.div<{ index: number }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: ${(props) => (props.index % 2 === 0 ? 60 : 30)}px;
`;

const DetailLevels = styled.div`
  display: flex;
`;

const DetailLevel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 80px;
`;