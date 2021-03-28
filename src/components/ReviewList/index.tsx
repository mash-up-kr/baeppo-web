import React, { FC } from "react";
import styled from "styled-components";

import Item from "./Item";
import ItemData from "./itemData.json";

const ReviewList: FC = () => (
  <div>
    <Head>
      <ListTitle>
        <PinIcon src="/black@3x.png"></PinIcon>
        <University>대학명</University>
        <DetailAddress>상세주소</DetailAddress>
      </ListTitle>
      <ListInfo>
        대학명 자취방 리뷰{" "}
        <span style={{ color: "#4d30ff" }}>{ItemData.items.length}</span>개
        <Bar />
      </ListInfo>
    </Head>
    {ItemData.items.map((item, i) => (
      <Item key={i} review={item}></Item>
    ))}
  </div>
);

export default ReviewList;

const Head = styled.div`
  margin-left: 10px;
`;

const ListTitle = styled.div`
  display: flex;
  margin-top: 29px;
  font-weight: bold;
  font-size: 28px;
`;

const PinIcon = styled.img`
  width: 19px;
  height: 26px;
`;

const University = styled.p`
  margin: 0 8px;
  font-weight: bold;
  font-size: 28px;
`;

const DetailAddress = styled.p`
  margin-left: 8px;
  font-weight: normal;
  font-size: 14px;
`;

const ListInfo = styled.p`
  display: flex;
  margin: 18px 0 20px 0;
  font-weight: normal;
  font-size: 16px;
`;

const Bar = styled.div`
  justify-content: left;
  width: 1px;
  height: 16px;
  margin: 0 20px;
  background: #cbcbcb;
`;
