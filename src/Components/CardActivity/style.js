import styled from "styled-components";

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
  background: var(--light-light-orange);
  margin-right: 1.4rem;
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
  background: var(--dark-orange);
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
    margin-top: 20px;
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
  }
`;

export const Background = styled.div`
  background: white;
  min-width: 70px;
  border-radius: 50%;
  max-width: 70px;
  height: 70px;
  img {
<<<<<<< HEAD
    width: 45px;
    height: 45px;
    margin-left: 17%;
    margin-top: 15px;
=======
    width: 37px;
    height: 47px;
    margin-left: 15px;
    margin-top: 12px;
>>>>>>> 2c1dd57a9dac7d2ca1d74f9d5bedf4d13083a192
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5px 5px 0 0;
  box-sizing: border-box;
  color: var(--white);
`;
