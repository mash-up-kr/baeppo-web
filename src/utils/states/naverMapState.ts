import { atom, selector } from "recoil";

import LatLng from "types/LatLng";
import Marker from "types/Marker";

interface NaverMapStateProps {
  markers: Marker[];
  center: LatLng;
}

const naverMapState = atom<NaverMapStateProps>({
  key: "naverMapState",
  default: {
    // 임시 좌표(영진's house)
    markers: [{
      position: {
        lat: 37.47699619488476,
        lng: 126.95409135525202,
      },
      name: "서울대학교",
      reviews: [1, 2, 3],
    }],
    center: {
      lat: 37.47699619488476,
      lng: 126.95409135525202,
    },
  },
});

export const markerState = selector({
  key: "markerState",
  get: ({ get }) => {
    const state = get(naverMapState);

    return state.markers;
  },
});

export const centerState = selector<LatLng>({
  key: "centerState",
  get: ({ get }) =>
    get(naverMapState).center,
  set: ({ set }, center) => set(naverMapState, (prevState) => ({
    ...prevState,
    center: center as LatLng,
  })),
});

export default naverMapState;
