import styled from "styled-components";

export const ButtonStyled = styled.button`

    background-color: var(--medium-green);
    color:  ${props => props.color ? "#fff" : "#000000"};
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
`;