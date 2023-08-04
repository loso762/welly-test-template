import React, { Component } from 'react';
import PromotionPresenter from "./PromotionPresenter";
import { observer, inject } from "mobx-react";
import PromotionStore from "stores/PromotionStore";

interface IProps {
  promotionStore?: PromotionStore;
}

@inject("promotionStore")
@observer
class PromotionContainer extends React.Component<IProps, {}> {
  constructor(props) {
    super(props);
  }
  
  async componentDidMount() {
  }

  render() {
    return (
      <>
        <PromotionPresenter
        />
      </>
    );
  }
}


export default PromotionContainer;
