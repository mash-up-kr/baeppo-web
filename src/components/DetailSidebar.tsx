import React, { FC } from "react";
import styled from "styled-components";

import ImageView from "./ReviewList/ImageView";
import ReviewItemCard from "./ReviewList/ReviewItemCard";

import Review from "types/Review";

interface DetailSidebarProps {
  review: Review|null;
  onClick: () => void;
}

const DetailSidebar: FC<DetailSidebarProps> = ({
  review,
  onClick,
}: DetailSidebarProps) => (
        <div>
          <Head>
            <Place>{review.buildingName}</Place>
            <Address>서울 노원구 동일로 1021(공릉동), 303동 201호</Address>
            <img
              src="/icon-close@3x.png"
              width="24px"
              height="24px"
              style={{
                padding: "2px",
                lineHeight: "40px",
                margin: "auto 0 auto auto",
              }}
              onClick={onClick}
            ></img>
          </Head>
          <ImageView images={review.images} />
          <ItemInfo>
            <UserId>dowel**</UserId>
            <Bar />
            <Building>{review.buildingName}</Building>
            <Bar />
            <span>{review.rating}</span>
            <span style={{ color: "#bbbbbb" }}>/5</span>
            <img
              src="/star@3x.png"
              width="18px"
              height="18px"
              style={{ margin: "0 1px 0 7px" }}
            ></img>
            <Bar />
            <Date>{review.createdDate}</Date>
            <img
              src="/default@3x.png"
              width="14px"
              height="18px"
              style={{
                marginRight: "16px",
                justifyContent: "right",
              }}
            ></img>
          </ItemInfo>
          <ContentTitle>{review.content}</ContentTitle>
          <Line />
          <ReviewSummary>
            <div style={{
              justifyContent: "space-between",
              display: "flex",
            }}>
              {review.items.map((item, i) => (
              <ReviewItemCard key={i} item={item}></ReviewItemCard>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <Name>주변상권</Name>
              {review.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </div>
          </ReviewSummary>
          <Line />
          <ContentBody>
            {review.contentDetail}
          </ContentBody>
          <Line />
        </div>
);

export default DetailSidebar;

const Head = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Place = styled.div`
  justify-content: left;
  font-weight: bold;
  font-size: 28px;
`;

const Address = styled.div`
  justify-content: left;
  margin-left: 14px;
  color: #696969;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
`;

const ReviewSummary = styled.div`
  padding: 14px 23px;
`;

const Name = styled.p`
  height: 20px;
  margin: 0 10px 0 0;
  color: #444;
  font-weight: normal;
  font-size: 14px;
`;

const Tag = styled.div`
  height: 20px;
  margin: 0 5px;
  padding: 1px 5px;
  color: white;
  font-weight: normal;
  font-size: 12px;
  background: #3a3a3a;
  border-radius: 4px;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-weight: normal;
  font-size: 14px;
`;

const UserId = styled.p`
  justify-content: left;
  margin: 0;
  font-weight: normal;
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

const Bar = styled.div`
  justify-content: left;
  width: 1px;
  height: 16px;
  margin: 0 15px;
  background: #cbcbcb;
`;

const ContentTitle = styled.div`
  margin: 0;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
`;

const ContentBody = styled.div`
  padding: 20px;
  color: #222;
  font-weight: normal;
  font-size: 14px;
`;

const Line = styled.hr`
  border: solid 1px #d0d0d0;
`;
