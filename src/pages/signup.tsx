import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";

import Button from "components/Button";
import FormInput from "components/FormInput";
import { PageBackground, PageBottomLogoWrapper, PagePopup } from "components/MainPage";

const SignUpPage: FC = () => {
  const router = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [school, setSchool] = useState("");

  const isPasswordError = useMemo(() => rePass !== password, [password, rePass]);
  const isClickableButton = useMemo(() => id && password && rePass && school && !isPasswordError, [
    id,
    password,
    rePass,
    school,
    isPasswordError,
  ]);

  return (
    <PageBackground>
      <PagePopup>
        <PageHeader>
          <HeaderSide>
            <BackWrapper onClick={() => router.back()}>
              <Image src="/caret_left.png" width={8} height={14} />
              &nbsp;뒤로가기
            </BackWrapper>
          </HeaderSide>
          <HeaderTitle>회원가입</HeaderTitle>
          <HeaderSide />
        </PageHeader>
        <FormWrapper>
          <FormInput
            label="아이디"
            goodMessage="멋진 아이디에요!"
            errorMessage="다시 만들어주세요!"
            placeholder="6~12자 영문, 숫자 조합하여 만들어주세요."
            fontSize="14px"
            onValueChange={setId}
            value={id}
          />
          <FormInput
            mt="16px"
            type="password"
            label="비밀번호"
            placeholder="6~20자 영문, 숫자, 특수문자를 조합하여 만들어주세요."
            fontSize="14px"
            onValueChange={setPassword}
            value={password}
          />
          <FormInput
            mt="16px"
            type="password"
            label="비밀번호 확인"
            isError={isPasswordError}
            goodMessage="확인되었습니다!"
            errorMessage="비밀번호가 달라요!"
            placeholder="비밀번호 확인을 위해 한번 더 입력해주세요."
            fontSize="14px"
            onValueChange={setRePass}
            value={rePass}
          />
          {/* TODO: 학교 목록 받아서 SearchInput으로 대체해야함 */}
          <FormInput
            mt="16px"
            label="학교 설정"
            placeholder="재학 중인 학교를 선택해주세요."
            fontSize="14px"
            onValueChange={setSchool}
            value={school}
          />
          <Button mt="28px" disabled={!isClickableButton}>
            가입하기
          </Button>
        </FormWrapper>
      </PagePopup>
      <PageBottomLogoWrapper>
        <Image src="/logo_big.png" width={263} height={263} />
      </PageBottomLogoWrapper>
    </PageBackground>
  );
};

export default SignUpPage;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 34px;
`;

const HeaderTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
`;

const HeaderSide = styled.div`
  flex: 1;
  font-size: 14px;
`;

const FormWrapper = styled.form`
  margin-top: 68px;
`;

const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -4px;
  cursor: pointer;
`;
