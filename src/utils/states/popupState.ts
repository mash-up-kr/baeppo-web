import { atom } from "recoil";

import PopupContent from "types/PopupContent";

export const popupState = atom<PopupContent[]>({
  key: "popupState",
  default: [],
});

export const sideBarDetailPopupState = atom<boolean>({
  key: "sideBarDetailPopupState",
  default: false,
});
