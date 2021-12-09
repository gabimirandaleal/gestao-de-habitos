import styled from "styled-components";

export const HeaderDashboard = styled.div`
    padding-top: 2vh;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: var(--light-grey);
    @media (min-width:790px){
    padding-top: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 10vh;
      padding-left: 2vw;
    }
`;

export const ButtonsDashboard = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 10vh;
    width: 100vw;
    font-family: 'Sansita';

    font-weight: lighter;
      ul {
        display: flex;
        flex-direction: row;
        li {
          padding: 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
      img {
        margin: 0px 5px 0 20px;
        width: 20px

      }
    @media (min-width:790px){
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding-left: 2vw;
      ul {
        
        display: flex;
        flex-direction: row;

}
    }
    
`;

export const UserBox = styled.div`
    margin-right: 2vw;
    height: 10vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-family: 'Sansita';

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0px 5px 0 20px;
        font-size: 15px;
          img {
            margin-left: 20px;
            width: 15px
          }
        
      }

      img {
        margin-left: 20px;
        width: 40px
      }
    @media (min-width:790px){
      padding-left: 2vw;
    }
`;


export const Container = styled.div`
    padding: 20px 20px 0px 20px;
    box-sizing: border-box;
    height: 90vh;
    background-color: var(--light-grey);
    @media (min-width:1190px){
      height: 90vh;
      }
`;