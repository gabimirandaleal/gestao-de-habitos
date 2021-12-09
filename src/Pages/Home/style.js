import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: var(--dark-purple);
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
  @media (min-width: 1015px) {
    background-image: linear-gradient(
      to right,
      var(--light-green) 70%,
      var(--dark-purple) 30%
    );
    overflow-y: hidden;
    height: 100vh;
  }
`;
export const DivInfos = styled.div`
  max-width: 300px;
  p {
    font-family: "Anton", sans-serif;
    color: var(--white);
    font-size: 50px;
    margin-top: 100px;
  }
`;

export const DivLinks = styled.div`
  margin-top: 30px;
  a {
    display: flex;
    justify-content: flex-end;
    font-family: "Dancing Script", cursive;
    text-decoration: none;
    font-size: 30px;
    color: var(--white);
    margin-top: 10px;
  }
`;

export const ContainerAcess = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: end;
  overflow-y: hidden;
`;

export const DivImage = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100vh;

  img {
    display: none;
  }

  @media (min-width: 1015px) {
    img {
      display: flex;
      max-width: 700px;
      max-height: 600px;
      margin-right: 0.5em;
      margin-bottom: 4em;
      object-fit: cover;
      object-position: center;
    }
  }
  @media (min-width: 1295px) {
    img {
      display: flex;
      max-width: 700px;
      max-height: 900px;
      margin-right: 5em;
      margin-bottom: 4em;
      object-fit: cover;
      object-position: center;
    }
  }
`;
