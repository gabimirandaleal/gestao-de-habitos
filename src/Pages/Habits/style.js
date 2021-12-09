import styled from "styled-components";

export const Container = styled.div`
  font-family: Sansita;
  background-color: var(--light-grey);
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
  height: 220px;
  margin-bottom: 2rem;
  background-color: var(--light-green);
  border-radius: 20px;
  color: white;
  border: solid 2px white;
`;

export const State = styled.div`
  border-bottom: 1px white solid;
  padding-bottom: 1rem;
  font-size: 28px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  h3 {
    margin-left: 1.5rem;
    margin-top: 1rem;
  }

  p {
    align-self: flex-end;
    margin-right: 1.5rem;
  }
`;

export const About = styled.div`
  margin-left: 1.5rem;
`;

export const Title = styled.p`
  font-size: 22px;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

export const Specs = styled.div`
  width: 100%;
  font-size: 18px;
  div {
    margin-bottom: 0.5rem;
  }
`;
