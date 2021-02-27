import React, { FC } from "react";
import styled from "styled-components";

import KeywordSearchResult from "types/KeywordSearchResult";
import LatLng from "types/LatLng";

interface SearchResultsProps {
  keyword: string;
  results: KeywordSearchResult[];
  onClick: (keyword: string, position: LatLng) => void;
}

const SearchResults: FC<SearchResultsProps> = ({
  keyword,
  results,
  onClick,
}: SearchResultsProps) => (
  <Wrapper>
    <SearchResultsHead>
      &apos;{keyword}&apos;에 대해 <span>{results.length}건</span>이
      검색되었습니다.
    </SearchResultsHead>
    <ResultList>
      {results.map((r, index) => (
        <ResultItem
          key={`${r.name}_${index}`}
          onClick={() => onClick(r.name, r.position)}
        >
          <ItemName>{r.name}</ItemName>
          <ItemAddress>{r.address}</ItemAddress>
        </ResultItem>
      ))}
    </ResultList>
  </Wrapper>
);

export default SearchResults;

const Wrapper = styled.div`
  max-height: 300px;
  padding: 16px 0;
  overflow-y: scroll;
`;

const SearchResultsHead = styled.div`
  padding: 0 24px;
  font-weight: 500;
  font-size: 14px;

  > span {
    font-weight: 700;
  }
`;

const ResultList = styled.ul`
  margin: 3px 0 0 0;
  padding: 0;
  list-style: none;
`;

const ResultItem = styled.li`
  padding: 11px 24px;
  cursor: pointer;

  &:hover {
    background: rgba(196, 196, 196, 0.2);
  }
`;

const ItemName = styled.div`
  font-size: 16px;
  line-height: 19px;
`;

const ItemAddress = styled.div`
  margin-top: 12px;
  font-size: 13px;
`;
