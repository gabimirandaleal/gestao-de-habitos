import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`


export const DivName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  box-sizing:border-box;
  margin-bottom: 10px;
  
  div{
    display: flex;
    align-items: center;
    justify-content:center;
  }
  h3{
    color: var(--dark-grey);
    font-family: 'Sansita', sans-serif;
    font-weight: 700;
    font-size: 25px;
    margin-left:15px;
    padding-bottom: 8px;
  }
  img{
      margin-right: 10px;
  }
  select{
    color: var(--dark-grey);
    font-family: 'Sansita', sans-serif;
    font-weight: 700;
    font-size: 22px;
  }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:20px;
    padding: 0px 25px;
`

export const CardsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div{margin-right:10px}
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