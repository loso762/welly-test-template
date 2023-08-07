import React, {useState, useEffect} from "react";
import Mybutton from "src/layout/Button";
import styled from "styled-components";

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

const P = styled.p`
  display: flex;
  align-items: end;
  font-size: 11px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const calcTime = (targetDate: Date) => {
  const currentTime: number = new Date().getTime();
  const difference: number = targetDate.getTime() - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {days, hours, minutes, seconds};
};

const CountDown = ({targetDate}: {targetDate: Date}) => {
  const [remainingTime, setRemainingTime] = useState(calcTime(targetDate));
  const [openPayment, setOpenPayment] = useState(true);
  const main_button_text = "구매하기";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calcTime(targetDate));
    }, 1000);

    const difference = targetDate.getTime() - new Date().getTime();

    if (difference < 0) {
      setOpenPayment(false);
    }

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <>
      <Div>
        <p style={{fontSize: "15px", textAlign: "center", margin: "0 0 40px"}}>
          {targetDate.getMonth() + 1}월 {targetDate.getDate()}일 자정까지만 구매 가능!
        </p>
        <P>
          <Span>{remainingTime.days}</Span>일 <Span>{remainingTime.hours}</Span>시{" "}
          <Span>{remainingTime.minutes}</Span>분 <Span>{remainingTime.seconds}</Span>초
        </P>
      </Div>

      <Mybutton
        width="80%"
        onClick={() => {
          !openPayment && alert("이 상품은 현재 판매 상품이 아닙니다.");
        }}>
        {main_button_text}
      </Mybutton>
    </>
  );
};

export default CountDown;
