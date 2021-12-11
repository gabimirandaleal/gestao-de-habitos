import { red } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--medium-grey);
  font-family: "Sansita One";
  .cardHolder {
    max-width: 95vw;
    overflow-x: scroll;
    display: flex;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  svg {
    margin: 0 5px;
  }
  #goals {
    margin: 20px;
    color: var(--dark-medium-red);
  }
  #activities {
    margin: 20px;
    color: var(--dark-orange);
  }
  .cardHolder::-webkit-scrollbar {
    width: 12px;
    height: 9px;
  }

  .cardHolder::-webkit-scrollbar-track {
    background: var(--light-yellow);
  }

  .cardHolder::-webkit-scrollbar-thumb {
    background-color: var(--dark-medium-red);
    border-radius: 20px;
  }
  header {
    //PODE APAGAR DEIXEI APENAS PARA IR TESTANDO
    width: 100vw;
    background-color: black;
    height: 10vh;
  }
`;

export const Title = styled.div`
  color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-left: 800px;
  h1 {
    font-size: 32px;
  }
  margin: 20px 20px 10px 20px;
`;

export const Description = styled.div`
  color: var(--dark-grey);
  text-align: end;
  margin-left: 80vw;
  h3 {
    font-size: 26px;
  }
  margin: 5px 20px;
`;
