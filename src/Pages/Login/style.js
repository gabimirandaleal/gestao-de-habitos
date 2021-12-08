import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: var(--light-grey);
    
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: 2px solid #F5F5F5;
    padding: 0px 19px 26px 19px;
    width: 100%;
    box-sizing: border-box;
    max-width: 400px;

    button{
        margin-top: 15px;
    }
`;

export const Span = styled.span`
    font-size: 12px;
    color: #999999;
    margin-top: 10px;
`;
export const SpanH = styled(Span)`
    margin: 0px;
    color: black;
`;

export const DivSpan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;