import Image from "next/image";
import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

import Input from "components/Input";
import { PageBackground, PagePopup, PageBottomLogoWrapper } from "components/MainPage";

const LoginPage: FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
  <PageBackground>
    <PagePopup>
      <LogoWrapper>
        <Image src="/logo.png" width={60} height={60} />
        <br />
        <Image src="/logo_text.png" width="auto" height={30} />
      </LogoWrapper>
      <Input
        placeholder="아이디"
        mt="36px"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        placeholder="비밀번호"
        mt="16px"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </PagePopup>
    <PageBottomLogoWrapper>
      <Image src="/logo_big.png" width={263} height={263} />
    </PageBottomLogoWrapper>
  </PageBackground>
  );
};

export default LoginPage;

const LogoWrapper = styled.div`
  margin-top: 130px;
  text-align: center;

  > *:not(:first-child) {
    margin-top: 30px !important;
  }
`;
