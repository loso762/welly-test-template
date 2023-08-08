import React, {useState, useEffect} from "react";
import Mybutton from "src/layout/Button";
import styled from "styled-components";

const Div = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: column;
  justify-contents: center;
  width: 100%;
  height: 600px;
  align-items: center;
  background-color: ${(props) => props.bg || "black"};
`;

const P1 = styled.p`
  margin: 250px 0 0;
  font-size: 28px;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  color: white;
`;

const P2 = styled.p`
  display: flex;
  margin: 30px 0 30px;
  align-items: end;
  font-size: ${(props) => props.fontSize || "11px"};
  color: white;
`;

const Span = styled.span`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: block;
  margin: 0 2px;
  background-color: white;
  text-align: center;
  color: black;
  line-height: 48px;
  font-size: 24px;
`;

type Props = {
  targetTime: string;
  bgColor: string;
  mainButtonText: string;
  openPayment: boolean;
  useCounter: boolean;
};

const CountDown = ({targetTime, bgColor, mainButtonText, openPayment, useCounter}: Props) => {
  //useCounter가 false면 영역 hide
  const displayDiv = useCounter ? "flex" : "none";

  const [remainTime, setRemainTime] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  const date = new Date(targetTime);

  let nextMonth = date.getMonth() + 2;
  if (nextMonth === 13) {
    nextMonth = 1;
  }

  // 남은 시간 구하는 함수
  function calcTimeRemaining(targetTime: string) {
    const timeDifference = new Date(targetTime).getTime() - new Date().getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // 초마다 카운팅
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime(calcTimeRemaining(targetTime));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [calcTimeRemaining]);

  return (
    <Div bg={bgColor} display={displayDiv}>
      <P1>
        {nextMonth}월에는 우리 꼭 <br /> 건강한 루틴 만들어요!
      </P1>
      <P2 fontSize="18px">
        {date.getMonth() + 1}월 {date.getDate()}일 자정까지만 구매 가능!
      </P2>
      <P2>
        <Span>{remainTime.days}</Span>일 <Span>{remainTime.hours}</Span>시 <Span>{remainTime.minutes}</Span>분{" "}
        <Span>{remainTime.seconds}</Span>초
      </P2>

      <Mybutton
        width="80%"
        onClick={() => {
          !openPayment && alert("이 상품은 현재 판매 상품이 아닙니다.");
        }}>
        {mainButtonText}
      </Mybutton>
    </Div>
  );
};

export default CountDown;
