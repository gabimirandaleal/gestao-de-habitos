import styled, { keyframes } from "styled-components";

const Anim = keyframes`
from{transform:scale(0)}
to{transform:scale(1)}
`;
const Appear = keyframes`
from{opacity:0;
transform:TranslateY(100px);}
to{opacity:1;}
`;
export const Container = styled.div`
  background-color: var(--light-grey);
  width: 100%;
  font-family: "Sansita";
  box-sizing: border-box;
`;
export const Div = styled.div`
  padding: 20px 15px 40px 15px;

  @media (min-width: 790px) {
    padding: 20px 60px 40px 60px;
  }
`;

export const DivName = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding-bottom: 25px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    color: var(--dark-grey);
    font-family: "Sansita", sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-left: 15px;
    padding-bottom: 8px;
  }
  svg {
    margin-left: 20px;
  }
  .cursor {
    width: 25px;
    height: 25px;
  }
`;
export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-color: var(--light-grey);
`;

export const Card = styled.div`
  width: 210px;
  height: 265px;
  margin-bottom: 2rem;
  border-radius: 10px 10px 0 0;
  background: ${(props) =>
    props.color ? "var(--light-green)" : "var(--light-yellow)"};
  margin-right: 1.4rem;
  margin-left: 1.4rem;
  transition: 1s;
  animation: ${Anim} 1s;
  :hover {
    box-shadow: 0px 0px 30px
      ${(props) => (props.color ? "var(--light-green)" : "var(--dark-yellow)")};
  }
`;

export const Specs = styled.div`
  margin-top: 2.5rem;
  margin-left: 10px;
  font-size: 18px;
  color: var(--dark-grey);
  div {
    margin-bottom: 0.7rem;
  }
`;

export const Empty = styled.div`
  color: var(--dark-grey);
  margin-top: 2rem;
  animation: ${Appear} 2s;
  img {
    width: 200px;
    height: 190px;
  }

  p {
    font-size: 40px;
    margin-top: 2rem;
    text-align: center;
  }
  @media (min-width: 767px) {
    margin-top: 6%;
    img {
      width: 256px;
      height: 256px;
    }
  }
`;
export const Title = styled.div`
  height: 90px;
  border-radius: 10px 10px 0 0;
  background: ${(props) =>
    props.color ? "var(--dark-medium-green)" : "var(--dark-yellow)"};
  transition: 1s;

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
    font-size: 23px;
    margin-bottom: 8px;
  }
`;

export const Downside = styled.div`
  display: flex;
  justify-content: space-around;
  svg {
    cursor: pointer;
  }
`;

export const Background = styled.div`
  background: white;
  min-width: 70px;
  border-radius: 50%;
  max-width: 70px;
  height: 70px;
`;

export const Close = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 5px 0 5px;
  box-sizing: border-box;
  color: var(--white);
  svg {
    cursor: pointer;
  }
`;
