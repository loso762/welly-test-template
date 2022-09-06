/* eslint-disable import/no-anonymous-default-export */
import styled, {css} from "styled-components";

export const FontStyle = {
  H1: css`
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -2.7px;
  `,
  H2Bold: css`
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -2.1px;
  `,
  H2: css`
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -2.1px;
  `,
  H3Bold: css`
    line-height: 26px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.31px;
  `,
  H3: css`
    line-height: 26px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.31px;
  `,
  S1Bold: css`
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -1.2px;
  `,
  S1: css`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -1.2px;
  `,
  BodyBold: css`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -1.2px;
    line-height: 24px;
  `,
  Body: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -1.2px;
  `,
  CaptionBold: css`
    line-height: 20px;
    font-size: 14px;
    letter-spacing: -1px;
    font-weight: 700;
  `,
  Caption: css`
    line-height: 20px;
    font-size: 14px;
    letter-spacing: -1px;
    font-weight: 400;
  `,
  SmallBold: css`
    line-height: 18px;
    font-size: 12px;
    letter-spacing: -0.4px;
    font-weight: 700;
  `,
  Small: css`
    line-height: 18px;
    font-size: 12px;
    letter-spacing: -0.4px;
    font-weight: 400;
  `,
  Tiny: css`
    line-height: 14px;
    font-size: 10px;
    letter-spacing: -0.3px;
  `,
};


export default {
  H1: styled.h1`
    ${FontStyle.H1};
  `,
  H2Bold: styled.h2`
    ${FontStyle.H2Bold};
  `,
  H2: styled.h2`
    ${FontStyle.H2};
  `,
  H3Bold: styled.h3`
    ${FontStyle.H3Bold};
  `,
  H3: styled.h3`
    ${FontStyle.H3};
  `,
  S1Bold: styled.div`
    ${FontStyle.S1Bold};
  `,
  S1: styled.div`
    ${FontStyle.S1};
  `,
  BodyBold: styled.div`
    ${FontStyle.BodyBold};
  `,
  Body: styled.div`
    ${FontStyle.Body};
  `,
  CaptionBold: styled.div`
    ${FontStyle.CaptionBold};
  `,
  Caption: styled.div`
    ${FontStyle.Caption};
  `,
  SmallBold: styled.div`
    ${FontStyle.SmallBold};
  `,
  Small: styled.div`
    ${FontStyle.Small};
  `,
  Tiny: styled.div`
    ${FontStyle.Tiny};
  `,
};


