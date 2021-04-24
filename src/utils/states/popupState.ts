import { atom } from "recoil";

import PopupContent from "types/PopupContent";

const popupState = atom<PopupContent[]>({
  key: "popupState",
  default: [],
});

export default popupState;
