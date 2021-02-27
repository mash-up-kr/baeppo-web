import React, { Component } from "react";
import styled from "styled-components";

import ImageView from "./ImageView";

interface ItemProps {
  review: {
    id: string;
    buildingName: string;
    userId: number;
    nickName: string;
    rating: number;
    createdDate: string;
    images: [string];
    isBookmark: string;
    content: string;
  }
}

class Item extends Component<ItemProps> {
  render() {
    const { review } = this.props;

    return (
      <div style={{ marginBottom: "25px" }}>
        <ImageView images={review.images}/>
        <ItemInfo>
          <Building>{review.buildingName}</Building>
          <Bar/>
          <span>{review.rating}</span><span style={{ color: "#bbbbbb" }}>/5</span>
          <img src="/star@3x.png" width="18px" height="18px" style={{ margin: "0 1px 0 7px" }}></img>
          <Bar/>
          <Date>{review.createdDate}</Date>
          <img src="" width="14px" height="18px" style={{ marginRight: "16px", background: "#4d30ff", justifyContent: "right" }} ></img>
        </ItemInfo>
        <Content>{review.content}</Content>
      </div>
    );
  }
}

export default Item;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-weight: normal;
  font-size: 14px;
`;

const Bar = styled.div`
  justify-content: left;
  width: 1px;
  height: 16px;
  margin: 0 15px;
  background: #cbcbcb;
`;

const Building = styled.p`
  justify-content: left;
  margin: 0;
  font-weight: normal;
`;

const Date = styled.p`
  flex: 1;
  justify-content: left;
  margin: 0;
  font-weight: lighter;
`;

const Content = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 18px;
`;
