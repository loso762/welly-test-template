import React from "react";
import App from "next/app";
import {Provider} from "mobx-react";
import styled from "styled-components";
import GlobalStyles from "styles/global";
import initializeStore from "stores";
import promotionStore from "stores/PromotionStore";

export default class MyApp extends App {
  mobxStore = null;

  static async getInitialProps(appContext) {
    //Initialize mobx
    const mobxStore = initializeStore();

    appContext.ctx.mobxStore = mobxStore;

    let appProps: any = {};
    if (appContext.Component.getInitialProps) {
      appProps = await App.getInitialProps(appContext);
    }

    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  promotion = new promotionStore();

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer ? props.initialMobxState : initializeStore();
  }

  async componentDidMount() {}

  render() {
    const {Component, pageProps} = this.props;
    const mobxStoreList = {...this.mobxStore};
    return (
      <Provider {...mobxStoreList}>
        <GlobalStyles />
        <Provider promotion={this.promotion}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Provider>
      </Provider>
    );
  }
}

const Container = styled.div``;
