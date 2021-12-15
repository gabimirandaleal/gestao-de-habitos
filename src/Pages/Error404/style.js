import styled, { keyframes } from "styled-components";

const LeafMove = keyframes`
from{transform:TranslateY(5px)}
to{transform:TranslateY(-5px)}
`;

export const Leaf = styled.img`
  width: 150px;
  padding: 0px 5px 0px 0px;
  margin-left: 5px;
  animation: ${LeafMove} 2s alternate infinite;
  position: absolute;
  z-index:2;
`;

export const Div = styled.div`
    width: 300px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-family: 'Sansita One', sans-serif;
    color: var(--dark-grey);
    span{
        margin-bottom:10px;
        z-index: 4;
        font-size:20px;
    }
    button{
        z-index: 4;
        width: 80%;
    }
   
`;

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: var(--light-grey);
    z-index:1;
`;