import firebase from "firebase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Button from "components/Button";
import Input from "components/Input";
import { PageBackground, PagePopup, PageBottomLogoWrapper } from "components/MainPage";
import { useFirebaseAuth } from "utils/states/firebaseState";

const LoginPage: FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const fAuth = useFirebaseAuth();

  useEffect(() => {
    fAuth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/");
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }, [fAuth]);

  const handleLoginClick = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    fAuth.signInWithRedirect(provider).then(() => {
      router.replace("/");
    });
  }, [fAuth]);

  return (
    <PageBackground>
      <PagePopup>
        <LogoWrapper>
          <Image src="/logo.png" width={60} height={60} />
          <br />
          <Image src="/logo_text.png" width="auto" height={30} />
        </LogoWrapper>
        <Input placeholder="아이디" mt="36px" value={id} onValueChange={setId} />
        <Input
          placeholder="비밀번호"
          mt="16px"
          value={password}
          type="password"
          onValueChange={setPassword}
        />
        <Button mt="28px" onClick={handleLoginClick}>
          로그인하기
        </Button>
        <ForgotInfo>
          <Link href="/forgot">아이디 혹은 비밀번호를 잊으셨나요?</Link>
        </ForgotInfo>
        <SignUp>
          <Link href="/signup">입담 회원가입</Link>
        </SignUp>
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

const ForgotInfo = styled.div`
  margin-top: 43px;
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
`;

const SignUp = styled.div`
  margin-top: 32px;
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
`;
