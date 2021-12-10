import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    width: 100%;
    button{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        color: var(--white);
        font-size: 20px;
        width: 100%;
        border: 0px;
        padding: 15px;
        background: #6FC070;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        box-sizing:border-box;
    }
    button:not(button:last-child){
        margin-right:20px;
        background: #FF1010;
    }
`;