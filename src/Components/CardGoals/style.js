import styled, { keyframes } from "styled-components";

const Anim = keyframes`
from{transform:TranslateX(1500px)}
to{transform:TranslateX(0px)}
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-color: var(--light-grey);
  margin-top: 10px;
`;

export const Card = styled.div`
  width: 210px;
  height: 265px;
  margin-bottom: 2rem;
  border-radius: 10px 10px 0 0;
  background: var(--light-light-red);
  margin-right: 1.4rem;
  animation: ${Anim} 1s;
  transition: 0.5s;
  :hover {
    transform: scale(1.04);
  }
`;

export const Specs = styled.div`
  margin: 50px 10px 0px 10px;
  font-size: 18px;
  color: var(--dark-grey);
  box-sizing: border-box;
  font-family: "Sansita", sans-serif;
  font-weight: 400;
  font-style: normal;

  div {
    margin: 20px 0;
  }
`;

export const Title = styled.div`
  height: 90px;
  border-radius: 10px 10px 0 0;
  background: var(--dark-medium-red);
  img {
    width: 45px;
    height: 45px;
    margin-left: 17%;
    margin-top: 10%;
  }
`;

export const Upside = styled.div`
  display: flex;
  justify-content: center;
  color: var(--white);

  h3 {
    font-size: 18px;
  }
`;

export const Downside = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  svg {
    cursor: pointer;
    color: black;
    transition: 0.5s;
    :hover {
      transform: scale(1.04);
    }
  }
`;

export const Background = styled.div`
  background: white;
  min-width: 70px;
  border-radius: 50%;
  max-width: 70px;
  height: 70px;
  img {
    width: 45px;
    height: 45px;
    margin-left: 17%;
    margin-top: 15px;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 5px 0 5px;
  box-sizing: border-box;
  color: var(--white);
`;

export const GrSubtractCirButton = styled.button`
  border: none;
  background: transparent;
  height: 5px;
`;

export const AiOutlinePlusCircleButton = styled.button`
  border: none;
  background: transparent;
  height: 5px;
`;
