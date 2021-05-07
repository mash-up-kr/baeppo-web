import React, { FC } from "react";
import styled from "styled-components";

import ReviewItem from "types/ReviewItem";

interface ReviewItemCardProps {
  item: ReviewItem;
}

const ReviewItemCard: FC<ReviewItemCardProps> = ({ item }: ReviewItemCardProps) => (
  <ReviewItemCardWrapper>
    <Name>{item.name}</Name>
    <div>
      <CommentIcon>
        <img
          src="/icon-speech-bubble@3x.png"
          width="88px"
          height="42px"
        ></img>
        <Comment>{item.comment}</Comment>
      </CommentIcon>
      <img
        src="/icon-face-bad-active@3x.png"
        width="60px"
        height="60px"
        style={{ margin: "0 auto", display: "table" }}
      ></img>
    </div>
  </ReviewItemCardWrapper>
);

export default ReviewItemCard;

const ReviewItemCardWrapper = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

const Name = styled.p`
  margin: 0;
  margin-right: 4px;
  color: #444;
  font-weight: normal;
  font-size: 14px;
`;

const CommentIcon = styled.div`
  position: relative;
  height: 42px;
`;

const Comment = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  color: #9c9c9c;
  font-weight: normal;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
`;
