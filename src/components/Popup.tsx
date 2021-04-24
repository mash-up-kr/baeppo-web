import React, { FC } from "react";
import styled from "styled-components";

import PopupContent from "types/PopupContent";

export interface PopupProps {
  onClose: () => void;
  popup: PopupContent;
}

const Popup: FC<PopupProps> = ({ onClose, popup }: PopupProps) => (
  <PopupBackground onClick={onClose} zIndex={popup.zIndex}>
    <PopupWrapper width={popup.width} onClick={(e) => e.stopPropagation()}>
      <PopupHead>
        <PopupTitle>{popup.title}</PopupTitle>
        <CloseButton src="/close.png" onClick={onClose} />
      </PopupHead>
      <PopupBody>{popup.content}</PopupBody>
    </PopupWrapper>
  </PopupBackground>
);

export default Popup;

const PopupBackground = styled.div<{ zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => 1000 + (props.zIndex ?? 0)};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const PopupWrapper = styled.div<{ width?: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.width || "500px"};
  padding: 38px 46px;
  background: white;
  border-radius: 12px;
  transform: translate(-50%, -50%);
`;

const PopupHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.img`
  width: 20px;
  height: 20px;
  padding: 3px;
  cursor: pointer;
`;

const PopupTitle = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;

const PopupBody = styled.div`
  margin-top: 25px;
  color: rgba(33, 34, 38, 0.5);
`;
