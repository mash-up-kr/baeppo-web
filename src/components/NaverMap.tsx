import Head from "next/head";
import React, { FC, useEffect } from "react";
import styled from "styled-components";

interface NaverMapProps {
  temp?: string;
}

const NaverMap: FC<NaverMapProps> = () => {
  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });
  }, []);

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
