import React from "react";
import {
  Container,
  Header,
  Extra,
  Card,
  Cards,
  Specs,
  Title,
  Empty,
  DelHab,
  RedBut,
  GreenBut,
  Buttons
} from "./style";

const Habits = () => {
  return (
    <Container>
      {/* <Header />
      <Extra />
      <Cards>
        {habits ? (
          habits.map((habit) => (
            <Card key={habit.id}>
              <Title>{habit.title}</Title>
              <Specs>
                <div>Categoria: {habit.category}</div>
                <div>Dificuldade: {habit.difficulty}</div>
                <div>Frequência: {habit.frequency}</div>
                <div>Progresso: {habit.how_much_achieved}%</div>
              </Specs>
            </Card>
          ))
        ) : (
          <Empty>Sem Hábitos</Empty>
        )}
      </Cards> */}
      <DelHab>
        <p>Remover Hábito?</p>
        <Buttons>
          <GreenBut>Sim</GreenBut>
          <RedBut>Não</RedBut>
        </Buttons>
      </DelHab>
    </Container>
  );
};

export default Habits;
