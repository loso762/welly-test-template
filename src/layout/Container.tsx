import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  height: ${(props) => props.height || "100%"};
  max-width: 420px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "center"};
  align-items: center;
  background-color: ${(props) => props.background || "#f0f0f0"};
  color: ${(props) => props.color || "black"};
`;

export default Container;
