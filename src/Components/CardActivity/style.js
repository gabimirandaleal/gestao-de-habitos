import styled from "styled-components";

export const Conteiner = styled.div`
  width: 255px;
  height: 345px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: var(--black);
  border-radius: 30px;
  text-align: center;
  font-family: "Sansita";
`;

export const ContentHeader = styled.div`
  position: relative;
  background: var(--dark-orange);
  padding-top: 20px;
  height: 30%;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  text-align: center;
  color: var(--white);
  font-size: 23px;
  font-weight: bold;
  .prancheta,
  .removed {
    position: absolute;
  }
  .prancheta,
  .removed:hover {
    cursor: pointer;
  }
  .prancheta {
    bottom: 15px;
    left: 20px;
  }
  .removed {
    bottom: 15px;
    right: 20px;
  }
  figure {
    position: relative;
    width: 45px;
    background-color: black;
    text-align: center;
    left: 77px;
    padding: 10p;
    border-radius: 45px;
    background: white;
    top: 45px;
    padding: 24px;
  }
`;

export const ContentDescription = styled.div`
  background: var(--light-light-orange);
  height: 70%;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #5b5b5b;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: baseline;
  padding-top: 75px;
  .dateOfActividie {
    width: 9rem;
    text-align: initial;
    padding-bottom: 10px;
  }
  span {
    padding-left: 10px;
  }
`;
