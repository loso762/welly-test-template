import styled from "styled-components";

const Mybutton = styled.button`
  width: ${(props) => props.width || "auto"};
  height: 40px;
  color: white;
  background-color: rgb(65, 65, 238);
  border-radius: 20px;
  border: none;
  margin: 5px;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export default Mybutton;
