import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: var(--dark-purple);
    padding: 20px;
    overflow-y: hidden;
    @media (min-width:1190px){
        background-image: linear-gradient(to right, var(--light-green) 70%, var(--dark-purple) 30%);
    }
    box-sizing: border-box;
`;
export const DivInfos = styled.div`
    max-width: 300px;
    p{
        font-family: 'Anton', sans-serif;
        color: var(--white);    
        font-size: 50px;
        margin-top: 100px;
    }
    
`;

export const DivLinks = styled.div`
    margin-top: 30px;
    a{
        display:flex;
        justify-content: flex-end;
        font-family: 'Dancing Script', cursive;
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
`;

export const DivImage = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height:100vh;
    overflow: hidden;
    img{
        display: none;
    }

    @media (min-width:1190px){
        
        img{
            display: flex;
            width: 850px;
            height: 100%;
            object-fit: contain;
            margin-right:0px;
        }
    }
    @media (min-width:1295px){
        img{
            display: flex;
            width: 850px;
            height: 100%;
            object-fit: contain;
            margin-right:100px;
        }
    }
`;