import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
  background: white;
  border-radius: 30px;
  padding: 1rem 1rem;

  label {
    margin-top: 1rem;
  }

  button {
    margin-top: 2rem;
    height: 60px;
  }
`;

export const AddTitle = styled.p`
  font-size: 36px;
  color: var(--dark-grey);
  margin-bottom: 2rem;
  text-align: center;
`;
