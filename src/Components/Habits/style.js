import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light-grey);
  width: 100vw;
  min-height: 100vh;
  font-family: "Sansita";
`;

export const Cards = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 767px) {
    flex-flow: row wrap;
  }
`;

export const Card = styled.div`
  width: 210px;
  height: 265px;
  margin-bottom: 2rem;
  border-radius: 10px 10px 0 0;
  background: ${props => props.color? "var(--light-green)" : "var(--light-yellow)"};
  @media (min-width: 767px) {
    margin-right: 1.4rem;
    margin-left: 1.4rem;
  }
`;

export const Specs = styled.div`
  margin-top: 2.5rem;
  margin-left: 10px;
  font-size: 18px;
  color:  var(--dark-grey);
  div {
    margin-bottom: 0.7rem;
  }
`;

export const Empty = styled.div`
  color: var(--dark-grey);
  margin-top: 2rem;
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
  background: ${props => props.color? "var(--dark-medium-green)" : "var(--dark-yellow)"};
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
    margin-bottom:8px;
  }
  
`;

export const Downside = styled.div`
  display: flex;
  justify-content: space-around;
  svg{
    cursor:pointer;
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
  justify-content: flex-end;
  width: 100%;
  padding: 5px 5px 0 0;
  box-sizing: border-box;
  color: var(--white);
`;
