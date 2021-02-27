import React, { FC } from "react";
import styled from "styled-components";

const Container: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
