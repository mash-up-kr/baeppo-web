import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useCallback, useMemo, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import Button from "./Button";
import creatorPopup from "./PopupContents/creatorPopup";
import termsPopup from "./PopupContents/termsPopup";

import PopupContent from "types/PopupContent";
import { useFirebaseAuth, useFirebaseDb } from "utils/states/firebaseState";
import popupState from "utils/states/popupState";
import { ellipsisText } from "utils/style/commonStyle";

const TEMP_SCHOOL = "서울시립대학교";

const RightPopup: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const setPopupList = useSetRecoilState(popupState);
  const fAuth = useFirebaseAuth();
  const router = useRouter();

  const handlePopupShow = useCallback(
    (popup: PopupContent) => {
      setPopupList((prevList) => [
        ...prevList,
        {
          ...popup,
          zIndex: prevList.length + 1,
        },
      ]);
    },
    [setPopupList],
  );

  const handleLogout = useCallback(() => {
    fAuth?.signOut().then(() => {
      router.replace("/login");
    });
  }, [fAuth]);

  const userName = useMemo(() => fAuth.currentUser?.displayName, [fAuth]);
  const userImage = useMemo(() => fAuth.currentUser?.photoURL, [fAuth]);

  if (!fAuth.currentUser) {
    return null;
  }

  return (
    <Wrapper>
      <Main>
        <MainProfileImage src={userImage!} />
        <MainProfileName>{userName}</MainProfileName>
        <Chevron
          onClick={() => setIsOpened(!isOpened)}
          isOpened={isOpened}
          src="/chevron.png"
          alt="chevron"
          width={34}
          height={28}
        />
      </Main>
      <Dropdown isOpened={isOpened}>
        <ProfileArea>
          <ProfileImageArea>
            <BigProfile src={userImage!} />
            <ProfileEdit src="/capture.png" />
          </ProfileImageArea>
          <DropdownProfileName>{userName}</DropdownProfileName>
          <SchoolName>{TEMP_SCHOOL}</SchoolName>
        </ProfileArea>
        <PopupArea onClick={() => handlePopupShow(creatorPopup)}>
          만든이
          <span>배뽀</span>
        </PopupArea>
        <PopupArea>
          버전
          <span>1.0</span>
        </PopupArea>
        <PopupArea onClick={() => handlePopupShow(termsPopup)}>
          이용약관
          <span>
            <Image src="/caret_right.png" width={6} height={9} />
          </span>
        </PopupArea>
        <PopupArea>
          <Button
            py="12px"
            bgColor="white"
            color="#696969"
            withBorder
            fontWeight="400"
            onClick={handleLogout}
          >
            로그아웃
          </Button>
        </PopupArea>
      </Dropdown>
    </Wrapper>
  );
};

export default RightPopup;

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 50px;
  width: 210px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
`;

const Dropdown = styled.div<{ isOpened?: boolean }>`
  max-height: ${(props) => (props.isOpened ? "500px" : "0px")};
  padding: ${(props) => (props.isOpened ? 16 : 0)}px 0;
  overflow: hidden;
  border-top: 1px solid #f2f2f2;
  transition: max-height 0.3s, padding 0.4s;
`;

const MainProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const MainProfileName = styled.div`
  ${ellipsisText}
  flex: 1;
  margin: 0 10px;
  font-size: 16px;
`;

const Chevron = styled(Image)<{ isOpened?: boolean }>`
  padding: 10px !important;
  transform: rotateZ(${(props) => (props.isOpened ? "180deg" : "0")});
  cursor: pointer;
  transition: transform 1s;
`;

const ProfileArea = styled.div`
  padding: 24px 0 20px 0;
  text-align: center;
`;

const ProfileImageArea = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

const BigProfile = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const ProfileEdit = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const DropdownProfileName = styled.div`
  ${ellipsisText}
  margin-top: 12px;
  padding: 0 16px;
  font-weight: 700;
  font-size: 16px;
`;

const SchoolName = styled.div`
  ${ellipsisText}
  margin-top: 8px;
  padding: 0 16px;
  font-size: 14px;
`;

const PopupArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #f2f2f2;
  cursor: pointer;

  > span {
    color: rgba(33, 34, 38, 0.6);
  }
`;
