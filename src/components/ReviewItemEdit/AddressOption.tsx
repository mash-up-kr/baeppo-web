import Image from "next/image";
import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

interface AddressOptionProps {
  id?: number;
}

const AddressOption: FC<AddressOptionProps> = () => {
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const handleAddress = useCallback((e) => {
    setAddress(e.currentTarget.value);
  }, [address, setAddress]);

  const handleDetailAddress = useCallback((e) => {
    setDetailAddress(e.currentTarget.value);
  }, [detailAddress, setDetailAddress]);

  const handleSearch = useCallback(() => {
    // console.log(address, "SEARCH 연동 예정");
  }, [address, setAddress]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [address, setAddress],
  );

  return (
    <Wrapper>
      <AddressInputWrapper>
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

const InputWrapper = styled.div`
  display: flex;
  height: 56px;
  padding: 14px 20px;
  border: 1px solid #D8D8D8;
  border-radius: 8px;
  margin: 10px 0;

  img {
    cursor: pointer;
  }
`;

const AddressInputWrapper = styled(InputWrapper)`
  background-color: #fff;
`;

const DetailAddressInputWrapper = styled(InputWrapper)`
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
