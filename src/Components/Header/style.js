import styled, { keyframes } from "styled-components";

const LeafMove = keyframes`
from{transform:TranslateY(5px)}
to{transform:TranslateY(-5px)}
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  font-family: "Sansita One";
  font-size: 30px;
  cursor: pointer;
  transition: 1s;
  :hover {
    transition: 1s;
    transform: scale(1.1);
  }
`;

export const H1 = styled.h1`
  margin: 10px 0 10px 10px;
  color: var(--dark-green);
  :hover {
    margin-right: 20px;
  }
`;
export const Leaf = styled.img`
  width: 30px;
  padding: 0px 5px 0px 0px;
  margin-left: 5px;
  animation: ${LeafMove} 2s alternate infinite;
`;
export const SpanLogo = styled.span`
  background-color: var(--medium-green);
  color: var(--white);
  padding: 10px 12px 10px 10px;
  border-radius: 5px;
`;
