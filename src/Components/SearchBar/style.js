import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    Button {
        height: 100%;
        max-width: 160px;
        border-radius: 0px 8px 8px 0px;
    }

`;

export const Input = styled.input`
    border: none;
    outline: none;
    padding: 0px 10px 0px 15px;   
    background-color: var(--light-grey);
    width: 100%;
`;