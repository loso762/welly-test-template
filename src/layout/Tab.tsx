import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {BsAirplane, BsCalendarCheck, BsTicket} from "react-icons/bs";
import {BiUser, BiHomeAlt2} from "react-icons/bi";

const Tab = styled.nav`
  width: 100%;
  position: ${(props) => props.position || "relative"};
  bottom: 0;
  height: 65px;
  background-color: white;
  border: none;
  padding: 15px 0 10px;
  display: flex;
  justify-content: space-around;
  border-top: rgb(240, 240, 240) 1px solid;
`;

const P = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  color: black;

  &:hover {
    color: rgb(65, 65, 238);
    font-weight: 500;
  }
`;
const Span = styled.span`
  font-size: 11px;
  margin-top: 8px;
`;

function TabContainer({position}: {position?: string}) {
  return (
    <Tab position={position}>
      <Link href={"/"}>
        <P>
          <BiHomeAlt2 />
          <Span>홈</Span>
        </P>
      </Link>
      <Link href={"/trip"}>
        <P>
          <BsAirplane />
          <Span>트립</Span>
        </P>
      </Link>
      <Link href={"/count"}>
        <P>
          <BsTicket />
          <Span>수강권</Span>
        </P>
      </Link>
      <Link href={"/reserve"}>
        <P>
          <BsCalendarCheck />
          <Span>수업예약</Span>
        </P>
      </Link>
      <Link href={"/profile"}>
        <P>
          <BiUser />
          <Span>내정보</Span>
        </P>
      </Link>
    </Tab>
  );
}

export default TabContainer;
