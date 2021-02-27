import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC } from "react";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

import Container from "components/Container";

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
}

input,
textarea {
  font-family: 'Noto Sans KR', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyle />
    <Container>
      <Component {...pageProps} />
    </Container>
  </RecoilRoot>
);

export default MyApp;
