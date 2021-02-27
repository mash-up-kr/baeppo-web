import React, { FC } from "react";
import styled from "styled-components";

interface AddressOptionProps {
  id?: number;
}

const AddressOption: FC<AddressOptionProps> = () => (
    <Wrapper>
      <h3>주소 검색</h3>
    </Wrapper>
);
export default AddressOption;

const Wrapper = styled.div`
  width: 100%;
`;
