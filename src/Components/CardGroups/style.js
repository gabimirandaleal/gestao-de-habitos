import styled from "styled-components";

export const Container = styled.div`
  width: 255px;
  height: 300px;
  position: relative;
  margin-bottom: 25px;
  background-color: var(--light-medium-blue);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font: unset;
  color: var(--white);
  border-radius: 30px;
  margin-left: 10px;
  &:hover {
    background: #47d3f1;
  }
  .icone {
    position: absolute;
    margin: 0px;
    padding: 0px;
    left: 208px;
    top: 11px;
    cursor: pointer;
  }
  .icone:hover {
    color: black;
  }
  Button {
    width: 130px;
    font: bold;
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 19px;
    background-color: ${(props) =>
      props.color ? "var(--dark-orange)" : "#9E9E9E"};
  }
  @media (min-width: 768px) {
    height: 345px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
  font-family: "Sansita", sans-serif;
  cursor: pointer;
  figure {
    margin: 15px 0px;
    cursor: pointer;
  }
  h2 {
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
    font: unset;
  }
  p {
    margin-bottom: 15px;
    margin-left: 14px;
  }
  @media (min-width: 768px) {
    align-items: center;
    p {
      text-align: center;
    }
  }
`;

export const DescriptionGroup = styled.div`
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  @media (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }

  figure img {
    width: 60px;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0px;
  span {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  p {
    font-weight: bold;
  }
`;
