import React from "react";
import styled from "styled-components";
import {PromotionDetails} from "stores/PromotionStore";
import {toJS} from "mobx";
import Container from "src/layout/Container";
import TabContainer from "src/layout/Tab";
import Loader from "./Loader";

const Img = styled.img`
  width: 100%;
`;

const PromotionPresenter = ({promotion}: {promotion: PromotionDetails}) => {
  const Details = toJS(promotion);

  return (
    <>
      {Details ? (
        <Container>
          {Details?.image_section.map(({url}, idx: number) => {
            return <Img key={idx} src={url}></Img>;
          })}

          <TabContainer />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PromotionPresenter;
