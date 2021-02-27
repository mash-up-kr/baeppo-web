import Image from "next/image";
import React, { FC, useCallback } from "react";
import styled from "styled-components";

interface RecentKeywordsProps {
  keywords: string[];
  onRemoveAll: () => void;
  onKeywordClick: (keyword: string) => void;
  onRemoveItem: (index: number) => void;
}

const RecentKeywords: FC<RecentKeywordsProps> = ({
  keywords,
  onRemoveAll,
  onKeywordClick,
  onRemoveItem,
}: RecentKeywordsProps) => {
  const handleRemove = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      onRemoveItem(index);
      e.stopPropagation();
    },
    [keywords],
  );

  return (
    <Wrapper>
      <RecentKeywordHead>
        <RecentKeywordTitle>최근 검색어 ({keywords.length})</RecentKeywordTitle>
        <RecentKeywordRemoveLabel onClick={onRemoveAll}>
          모두 지우기
        </RecentKeywordRemoveLabel>
      </RecentKeywordHead>
      <KeywordList>
        {keywords.map((k, index) => (
          <KeywordItem key={`${k}_${index}`} onClick={() => onKeywordClick(k)}>
            {k}
            <Image
              src="/remove.png"
              alt="remove"
              width={16}
              height={16}
              onClick={handleRemove(index)}
            />
          </KeywordItem>
        ))}
      </KeywordList>
    </Wrapper>
  );
};

export default RecentKeywords;

const Wrapper = styled.div`
  max-height: 300px;
  padding: 26px 0;
  overflow-y: scroll;
`;

const RecentKeywordHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;

const RecentKeywordTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

const RecentKeywordRemoveLabel = styled.span`
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;
`;

const KeywordList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const KeywordItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33px;
  margin-top: 10px;
  padding: 0 32px;
  cursor: pointer;

  &:hover {
    background: rgba(196, 196, 196, 0.2);
  }
`;
