import FontFaceObserver from "fontfaceobserver";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC } from "react";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

import "firebase/auth";
import "firebase/firestore";

import Container from "components/Container";

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.fonts-loaded {
  body,
  input,
  textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }
}
`;

const font = new FontFaceObserver("Noto Sans KR");

font.load().then(() => {
  document.documentElement.className += " fonts-loaded";
});

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fqmdjzxln0"
      ></script>
    </Head>
    <GlobalStyle />
    <Container>
      <Component {...pageProps} />
    </Container>
  </RecoilRoot>
);

export default MyApp;
