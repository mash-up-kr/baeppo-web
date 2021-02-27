import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { centerState, markerState } from "utils/states/naverMapState";

interface NaverMapProps {
  temp?: string;
}

// 네이버 지도 관련 타입들은 여기에만 작성
const NaverMap: FC<NaverMapProps> = () => {
  const markerInfos = useRecoilValue(markerState);
  const center = useRecoilValue(centerState);

  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setMap(
      new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 15,
      }),
    );
  }, []);

  useEffect(() => {
    // 맵에서 마커를 관리하지 않기 때문에 제거하기 위해서 setMap을 사용
    markers.forEach((m) => {
      m.setMap(null);
    });

    const newMarkers = markerInfos.map(
      (info) =>
        new naver.maps.Marker({
          position: new naver.maps.LatLng(info.position.lat, info.position.lng),
          map,
          icon: {
            url: "/marker.png",
            size: new naver.maps.Size(32, 44),
            scaledSize: new naver.maps.Size(32, 44),
          },
        }),
    );

    setMarkers(newMarkers);
  }, [markerInfos, map]);

  useEffect(() => {
    if (map) {
      map.setCenter(new naver.maps.LatLng(center.lat, center.lng));
    }
  }, [center, map]);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fqmdjzxln0"
        ></script>
      </Head>
      <MapWrapper id="map" />
    </>
  );
};

export default NaverMap;

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
