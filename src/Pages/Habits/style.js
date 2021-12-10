import styled from "styled-components";

export const Container = styled.div`
  font-family: Sansita;
  background-color: var(--light-grey);
  width: 100vw;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Extra = styled.div`
  background-color: var(--dark-red);
  width: 100vw;
  height: 120px;
  margin-bottom: 3rem;
`;

export const Header = styled.div`
  background-color: var(--light-green);
  width: 100vw;
  height: 280px;
  margin-bottom: 1rem;
`;

export const Cards = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 83%;
  margin-bottom: 2rem;
`;

export const Title = styled.p`
  height: 90px;
  background: var(--dark-medium-green);
  color: white;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
`;

export const Specs = styled.div`
  height: 180px;
  background: var(--light-green);
  color: var(--dark-grey);
  font-size: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  padding-top: 2rem;
  padding-bottom: 1rem;
  div {
    margin-left: 1rem;
  }
`;

export const Empty = styled.div`
  font-size: 40px;
  color: var(--dark-grey);
`;

export const DelHab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84%;
  height: 250px;
  background: white;
  border-radius: 30px;
  p {
    font-size: 30px;
    margin-bottom: 3rem;
    color: var(--dark-grey);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  button {
    border: none;
    color: white;
    width: 90px;
    height: 40px;
    font-size: 19px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export const GreenBut = styled.button`
  background: var(--light-green);
`;

export const RedBut = styled.button`
  background: var(--dark-red);
`;
