import React from "react";
import {
  Container,
  Header,
  Extra,
  Card,
  Cards,
  State,
  Specs,
  Title,
  About,
} from "./style";

const Habits = () => {
  return (
    <Container>
      <Header />
      <Extra />
      <Cards>
        <Card>
          <State>
            <h3>Concluído</h3>
            <p>x</p>
          </State>
          <About>
            <Title>Comer frutas</Title>
            <Specs>
              <div>Categoria: Alimentação</div>
              <div>Frequência: Diária</div>
              <div>Dificuldade: Fácil</div>
              <div>Progresso: 30%</div>
            </Specs>
          </About>
        </Card>
        <Card />
        <Card />
      </Cards>
    </Container>
  );
};

export default Habits;
