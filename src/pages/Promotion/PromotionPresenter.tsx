import React from "react";
import styled from "styled-components";
import {PromotionDetails} from "stores/PromotionStore";
import {toJS} from "mobx";
import Container from "src/layout/Container";
import TabContainer from "src/layout/Tab";
import Loader from "./Loader";
import CountDown from "../Count/CountDown";

const Img = styled.img`
  width: 100%;
`;

const PromotionPresenter = ({promotion}: {promotion: PromotionDetails}) => {
  const {image_section, use_counter, counter_target_time, counter_bg_color, main_button_text, open_payment} =
    toJS(promotion);

  return (
    <>
      {promotion ? (
        <Container>
          {image_section.map(({url}, idx: number) => {
            return <Img key={idx} src={url}></Img>;
          })}

          {/* 카운트 다운하는 컴포넌트 */}
          <CountDown
            targetTime={counter_target_time}
            bgColor={counter_bg_color}
            mainButtonText={main_button_text}
            openPayment={open_payment}
            useCounter={use_counter}
          />
          <TabContainer />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PromotionPresenter;
