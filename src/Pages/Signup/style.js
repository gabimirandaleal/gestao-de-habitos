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
  padding: 0px 20px;
  form {
    display: flex;
    flex-direction: column;
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
  a{
    display: flex;
    justify-content: center;
  }
`;

export const Error = styled.ul`
  text-align: start;
  font-size: 10px;
  color: rgb(240, 42, 42);
  li {
    list-style: none;
    padding-left: 10px;
  }
`;
