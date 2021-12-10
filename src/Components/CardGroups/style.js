import styled from "styled-components";

export const Conteiner = styled.div`
    width: 285px;
    height: 370px;
    background-color: var(--light-medium-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    font: unset;
    color: var(--white);
    border-radius: 30px;
    Button{
        width: 130px;
        font: bold;
        font-weight: bold;
        font-size: 19px;
        background-color: ${(props) => (props.color ?  "var(--Dark-orange)" : "#9E9E9E")};
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
    font-family: 'Sansita', sans-serif;
    figure{
        margin: 15px 0px;
        cursor: pointer;
    }
    h2{
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 10px;
    }
    span{
        margin-bottom: 10px;
        font: unset;
    }
    p{
        margin-bottom: 15px;
    }
`

export const Details = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0px;
    span{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    p{
        font-weight: bold;
    }
`