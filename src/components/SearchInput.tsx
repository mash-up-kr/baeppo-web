import Image from "next/image";
import React, { FC, HTMLProps, useCallback, useState } from "react";
import styled from "styled-components";

type SearchInputProps = HTMLProps<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback(() => {
    console.log(keyword, "SEARCH 연동 예정");
  }, [keyword]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [keyword],
  );

  return (
    <Wrapper>
      <StyledInput
        value={keyword}
        placeholder="어느 곳의 입담 리뷰를 찾아볼까요?"
        onChange={(e) => setKeyword(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
      <Image
        src="/search.png"
        alt="search"
        width={20}
        height={20}
        onClick={handleSearch}
      />
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  display: flex;
  padding: 14px 20px;
  border: 1px solid #cbcbcb;
  border-radius: 68px;

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
