import React from "react";
import Router from "next/router";
import App from "next/app";
import { Provider } from "mobx-react";
import styled from "styled-components";
import GlobalStyles from "styles/global";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles/>
        <Provider>
          <Container>
            <Component {...pageProps} />  
          </Container>
        </Provider>
      </>
    );
  }
}

const Container = styled.div`
`;