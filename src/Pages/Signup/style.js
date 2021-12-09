import styled from "styled-components";
export const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Div = styled.div`
  background-color: var(--light-grey);
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
  }
  input {
    background: var(--white);
    border-radius: 5px;
  }
  button {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const Error = styled.ul`
  margin: 0px;
  text-align: start;
  margin-bottom: 15px;
  margin-top: ${(props) => (props.margin ? `${props.margin}px` : "-5px")};
  font-size: 10px;
  color: rgb(240, 42, 42);
  padding: 0px 0px 0px 5px;
  li {
    list-style: inside;
  }
`;
