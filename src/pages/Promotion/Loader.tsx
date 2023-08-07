import React from "react";
import {SyncLoader} from "react-spinners";
import Container from "src/layout/Container";

function Loader() {
  return (
    <Container height="100vh">
      <SyncLoader color="#36d7b7" margin={4} />
    </Container>
  );
}

export default Loader;
