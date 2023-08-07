import {createGlobalStyle} from "styled-components";
import "reset-css";
import {common} from "styles/common";
import {colorPalette} from "styles/colors";

export default createGlobalStyle`
  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  ${common}
  ${colorPalette}

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .swiper{
    width:100%
  }

  .swiper-slide{
    height: 425px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color:white;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after{
    font-size:11px;
    color:rgb(5, 5, 5);
  }
`;
