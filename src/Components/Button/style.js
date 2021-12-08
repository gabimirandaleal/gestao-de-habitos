import styled from "styled-components";

export const ButtonStyled = styled.button`

    background-color: ${props => props.color ? "#6FC070" : "#A2EEA3"};
    color:  ${props => props.color ? "#fff" : "#000000"};
    width: 50px;
    border-radius: 6px;
    cursor: pointer;
`;