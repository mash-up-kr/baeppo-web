import LatLng from "./LatLng";

interface Marker {
  position: LatLng;
  name: string;
  // 마커 클릭시 바로 확인 가능하도록 마커에 review의 id들을 수집할 예정
  reviews: number[];
}

export default Marker;
