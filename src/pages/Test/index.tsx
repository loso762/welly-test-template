import React, {useState, useContext} from "react";
import styled from "styled-components";
import Fonts from "styles/fonts";
import TestContext from "stores/TestStore";


const TestPage = () => {
  const testStore = useContext(TestContext);

  return (
    <Container>
    </Container>
  );
};

export default TestPage;

const Container = styled.div``;
