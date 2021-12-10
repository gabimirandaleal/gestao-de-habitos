import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    width: 85%;
`

export const CardsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const NotCards = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 40px;
        font-family: "Sansita", sans-serif;
    } 
`