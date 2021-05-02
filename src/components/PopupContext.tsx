import React, { FC, useCallback } from "react";
import { useRecoilState } from "recoil";

import Popup from "components/Popup";
import popupState from "utils/states/popupState";

const PopupContext: FC = () => {
  const [popupList, setPopupList] = useRecoilState(popupState);

  const handlePopupRemove = useCallback(
    (index: number) => {
      const newList = [...popupList];
      newList.splice(index, 1);
      setPopupList(newList);
    },
    [popupList],
  );

  return (
    <>
      {popupList.map((p, index) => (
        <Popup key={index} onClose={() => handlePopupRemove(index)} popup={p} />
      ))}
    </>
  );
};

export default PopupContext;
