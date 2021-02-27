import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import RecentKeywords from "./RecentKeywords";
import SearchResults from "./SearchResults";

import KeywordSearchResult from "types/KeywordSearchResult";
import LatLng from "types/LatLng";
import searchKeyword from "utils/apis/SearchApi";
import { centerState } from "utils/states/naverMapState";

const RECENT_KEYWORD_KEY = "recentKeywords";

const SearchInput: FC = () => {
  const [, setCenter] = useRecoilState(centerState);

  const [keyword, setKeyword] = useState("");
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const [results, setResults] = useState<KeywordSearchResult[]>([]);

  useEffect(() => {
    setRecentKeywords(
      localStorage
        .getItem(RECENT_KEYWORD_KEY)
        ?.split(",")
        .filter((x) => x) || [],
    );
  }, []);

  const search = async (k: string) => {
    const res = await searchKeyword(k);
    setIsSearched(true);
    setKeyword(k);
    setResults(res);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    setIsSearched(false);
  };

  const handleSearch = useCallback(async () => {
    search(keyword);

    const newRecentKeywords = [keyword, ...recentKeywords];
    localStorage.setItem(
      RECENT_KEYWORD_KEY,
      newRecentKeywords.filter((x) => x).join(","),
    );
    setRecentKeywords(newRecentKeywords);
  }, [keyword, recentKeywords]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [keyword],
  );

  const handleItemClick = useCallback((k: string, position?: LatLng) => {
    if (position) {
      setCenter(position);
      setKeyword(k);
      setIsDropdownShown(false);
    } else {
      search(k);
    }
  }, []);

  const handleRecentKeywordAllRemove = () => {
    localStorage.setItem(RECENT_KEYWORD_KEY, "");
    setRecentKeywords([]);
  };

  const handleRecentKeywordRemove = useCallback(
    (index: number) => {
      const newRecentKeyword = [...recentKeywords];
      newRecentKeyword.splice(index, 1);
      setRecentKeywords(newRecentKeyword);
    },
    [recentKeywords],
  );

  return (
    <Wrapper>
      <InputWrapper isDropdownShown={isDropdownShown}>
        <StyledInput
          value={keyword}
          placeholder="어느 곳의 입담 리뷰를 찾아볼까요?"
          onChange={handleKeywordChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownShown(true)}
        />
        <Image
          src="/search.svg"
          alt="search"
          width={20}
          height={20}
          onClick={handleSearch}
        />
      </InputWrapper>
      {isDropdownShown &&
        (isSearched ? (
          <SearchResults
            results={results}
            onClick={handleItemClick}
            keyword={keyword}
          />
        ) : (
          <RecentKeywords
            keywords={recentKeywords}
            onRemoveAll={handleRecentKeywordAllRemove}
            onKeywordClick={handleItemClick}
            onRemoveItem={handleRecentKeywordRemove}
          />
        ))}
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 25px;
`;

const InputWrapper = styled.div<{ isDropdownShown?: boolean }>`
  display: flex;
  padding: 14px 20px;

  ${(props) => props.isDropdownShown && "border-bottom: 1px solid #EAEAEA;"}
  img {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;
