import Image from "next/image";
import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

import SearchResults from "components/SearchInput/SearchResults";
import KeywordSearchResult from "types/KeywordSearchResult";
import searchKeyword from "utils/apis/SearchApi";

interface AddressOptionProps {
  id?: number;
}

const AddressOption: FC<AddressOptionProps> = () => {
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [searchResults, setSearchResults] = useState<KeywordSearchResult[]>([]);

  const handleAddress = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  }, [address, setAddress]);

  const handleDetailAddress = useCallback((e) => {
    setDetailAddress(e.currentTarget.value);
  }, [detailAddress, setDetailAddress]);

  const handleSearch = useCallback(async () => {
    const res = await searchKeyword(address);
    setIsDropdownShown(true);
    setSearchResults(res);
  }, [address, setAddress]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [address, setAddress],
  );

  const handleItemClick = useCallback((buildingName: string, _, buildingAddress: string) => {
    setAddress(`${buildingAddress}, ${buildingName}`);
    setIsDropdownShown(false);
  }, []);

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDropdownShown(false);
    }
  };

  return (
    <Wrapper>
      <AddressInputWrapper
        onBlur={handleBlur}
        tabIndex={-1}
        isDropdownShown={isDropdownShown}
      >
        <DropdownWrapper>
          <Input
            value={address}
            placeholder="리뷰 남길 주소를 입력해주세요"
            onChange={handleAddress}
            onKeyDown={handleKeyDown}
          />
          <Image
            src="/search.svg"
            alt="search"
            width="20px"
            height="20px"
            onClick={handleSearch}
          />
          <Dropdown isDropdownShown={isDropdownShown}>
            <SearchResults
              results={searchResults}
              onClick={handleItemClick}
              keyword={address}
            />
          </Dropdown>
        </DropdownWrapper>
      </AddressInputWrapper>
      <DetailAddressInputWrapper>
        <Input
          value={detailAddress}
          placeholder="상세 주소 작성"
          onChange={handleDetailAddress}
        />
      </DetailAddressInputWrapper>
    </Wrapper>
  );
};

export default AddressOption;

const Wrapper = styled.div`
  width: 100%;
  margin: 24px 0;
`;

const AddressInputWrapper = styled.div<{ isDropdownShown?: boolean }>`
  position: relative;
  border: 1px solid #D8D8D8;
  background-color: #fff;
  border-radius: 8px;
  z-index: 1;

  ${(props) =>
    (props.isDropdownShown && `
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      `
    )}
`;

const DropdownWrapper = styled.div`
  display: flex;
  padding: 14px 20px;

  img {
    cursor: pointer;
  }
`;

const DetailAddressInputWrapper = styled.div`
  display: flex;
  height: 56px;
  padding: 14px 20px;
  border: 1px solid #D8D8D8;
  border-radius: 8px;
  margin: 10px 0;
  background-color: #F5F5F5;
`;

const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #11ffee00;

  &::placeholder {
    color: #BBBBBB;
  }
`;

const Dropdown = styled.div<{ isDropdownShown?: boolean }>`
  position: absolute;
  top: 100%;
  left: -1px;
  width: calc(100% + 2px);
  background: white;

  ${(props) =>
    (props.isDropdownShown ? `
        display: block;
        border: 1px solid #D8D8D8;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      ` :
      "display: none;"
    )}
`;
