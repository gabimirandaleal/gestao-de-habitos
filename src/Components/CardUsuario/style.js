import styled from "styled-components";

export const Ul = styled.ul`
    margin: 0px 5px 0 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: var(--dark-grey);
        font-size: 12px;
        font-style: normal;
          img {
            margin-left:10px;
            width: 15px
          }
          li {
            font-size: 12px;
            span {
              font-size: 17px;
            }
          }
          svg{
            cursor: pointer;
          }

`