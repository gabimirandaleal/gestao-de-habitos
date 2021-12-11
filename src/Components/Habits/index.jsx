import React from "react";
import {
  Container,
  Card,
  Cards,
  Specs,
  Title,
  Empty,
  Upside,
  Downside,
  Close,
  Background,
} from "./style";

import PopUpCreateHabits from "../../Components/PopUpCreateHabits";
import { IoCloseCircle } from "react-icons/io5";
import { GrAdd, GrSubtract } from "react-icons/gr";
import habitsImg from "../../assets/img/habits.png";
import noGroupHabits from "../../assets/img/noGroupHabits.png";
import { delHabitThunk } from "../../Store/modules/habits/thunk";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addHabitThunk,
  attHabitThunk,
  updateHabitsThunk,
} from "../../Store/modules/habits/thunk";

const Habits = () => {
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  useEffect(() => {
    dispatch(updateHabitsThunk());
  }, [attHabitThunk, delHabitThunk, addHabitThunk]);

  return (
    <Container>
      {popUp && <PopUpCreateHabits setPopup={setPopUp} />}
      <Cards>
        {habits &&
          habits.map((habit, index) => (
            <Card key={index}>
              <Title>
                <Upside>
                  <h3>
                    {habit.title.substring(0, 16)}
                    {habit.title.length > 16 && "..."}
                  </h3>
                  <Close onClick={delHabitThunk}>
                    <IoCloseCircle size="1.3em" />
                  </Close>
                </Upside>

                <Downside>
                  <GrSubtract size="1.3em" />

                  <Background>
                    <img src={habitsImg} alt="habits" />
                  </Background>
                  <GrAdd size="1.3em" />
                </Downside>
              </Title>

              <Specs>
                <div>Categoria: {habit.category}</div>
                <div>Dificuldade: {habit.difficulty}</div>
                <div>Frequência: {habit.frequency}</div>
                <div>Progresso: {habit.how_much_achieved}%</div>
              </Specs>
            </Card>
          ))}
        {habits.length === 0 && (
          <Empty>
            <img src={noGroupHabits} alt="habits" />
            <p>Sem Hábitos</p>
          </Empty>
        )}
      </Cards>
    </Container>
  );
};

export default Habits;
