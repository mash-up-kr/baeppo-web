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

  const [map, setMap] = useState<naver.maps.Map>();
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);

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
            content: [
              "<div class='marker-wrapper'>",
              "<div class='marker-info'>",
              `${info.name}`,
              "<span class='marker-review'>",
              `리뷰 ${info.reviews?.length ?? 0}개`,
              "</span>",
              "</div>",
              "<img class='marker-img' src='/marker.png' />",
              "</div>",
            ].join(""),
            anchor: new naver.maps.Point(22, 60),
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

  return <MapWrapper id="map" />;
};

export default NaverMap;

const MapWrapper = styled.div`
  flex: 1;
  height: 100vh;

  .marker-wrapper {
    position: relative;
  }

  .marker-info {
    position: absolute;
    bottom: calc(100% + 25px);
    left: 50%;
    width: max-content;
    padding: 20px 18px 22px 18px;
    font-weight: 700;
    font-size: 16px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.1);
    transform: translateX(-50%);

    /* 말풍선의 꼭짓점 */
    &::after {
      position: absolute;
      top: 100%;
      left: 50%;
      border-top: 13px solid white;
      border-right: 8px solid transparent;
      border-bottom: 0 solid transparent;
      border-left: 8px solid transparent;
      transform: translateX(-50%);
      content: "";
    }
  }

  .marker-review {
    margin-left: 10px;
    padding: 3px 7px 5px 7px;
    color: #8b8b8b;
    font-weight: 500;
    font-size: 15px;
    background-color: rgba(196, 196, 196, 0.15);
    border-radius: 8px;
  }

  .marker-img {
    width: 44px;
    height: 60px;
  }
`;
