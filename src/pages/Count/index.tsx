import Container from "src/layout/Container";
import Header from "src/layout/Header";
import CountDown from "./CountDown";
import styled from "styled-components";
import TabContainer from "src/layout/Tab";

const P = styled.p`
  margin-top: 200px;
  font-size: 28px;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
`;

function CountPage() {
  return (
    <Container background="black" color="white" height="100vh" justify="baseline" pt="60">
      <Header />
      <P>
        9월에는 우리 꼭 <br />
        건강한 루틴 만들어요!
      </P>
      <CountDown targetDate={new Date(1693493999999)} />
      <TabContainer position="absolute" />
    </Container>
  );
}

export default CountPage;
