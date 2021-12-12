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
  DivName,
  Div
} from "./style";
import SearchBar from "../SearchBar"
import PopUpCreateHabits from "../../Components/PopUpCreateHabits";
import { IoCloseCircle } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import habitsImg from "../../assets/img/habits.png";
import noGroupHabits from "../../assets/img/noGroupHabits.png";
import { delHabitThunk } from "../../Store/modules/habits/thunk";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { BsPlusCircleFill } from "react-icons/bs";
import {
  addHabitThunk,
  attHabitThunk,
  updateHabitsThunk,
  plusProgressHabitsThunk,
  subtractProgressHabitsThunk
} from "../../Store/modules/habits/thunk";

const Habits = () => {
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);
  const [atualizar, setAtualizar] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(habits)
  const [searchBar, setSearchBar] = useState("")
  
  const addProgress = (id, progress) =>{
    dispatch(plusProgressHabitsThunk(id, progress))
  }

  const subProgress = (id, progress) =>{
    dispatch(subtractProgressHabitsThunk(id, progress))
  }
  
  const deleteHabit = (id) => {
    dispatch(delHabitThunk(id))
    setAtualizar(!atualizar)
  }

  const filtrarItens = (text) =>{
    setSearchBar(text)
    setFilteredProducts(habits.filter((item) => {
      return ((item.title).toUpperCase().indexOf(text.toUpperCase()) > -1 || (item.category).toUpperCase().indexOf(text.toUpperCase()) > -1) && item.title
    }));
  }

  const submit = () => {
    setSearchBar("")
  }

  useEffect(() => {
    setFilteredProducts(habits)
  }, [habits]);

  useEffect(() => {
    dispatch(updateHabitsThunk());
  }, [atualizar]);
  

  return (
    <Container>
      {popUp && <PopUpCreateHabits setPopup={setPopUp} />}
        <Div>
        <DivName>
          <div>
            <img src={habitsImg} alt="habits" />
            <h3>Seus Hábitos</h3>
          </div>
          <BsPlusCircleFill onClick={() => setPopUp(true)} size={"20px"} color="#2ECC71"/>
        </DivName>
        <SearchBar onclick={submit} searchBar={searchBar} onchange={filtrarItens}></SearchBar>
        </Div>
      <Cards>
        {filteredProducts &&
          filteredProducts.map((habit, index) => (
            <Card color={habit.achieved ? "true" : ""} key={index}>
              <Title color={habit.achieved ? "true" : ""}>
                <Close onClick={() => deleteHabit(habit.id)}>
                    <IoCloseCircle size="20px" />
                </Close>
                <Upside>
                  <h3>
                    {habit.title.substring(0, 16)}
                    {habit.title.length > 16 && "..."}
                  </h3>
                  
                </Upside>

                <Downside>
                  <GrSubtractCircle size="19px" onClick={() => subProgress(habit.id, habit.how_much_achieved)}/>
                  <Background>
                    <img src={habitsImg} alt="habits" />
                  </Background>
                  <AiOutlinePlusCircle size="20px" onClick={() => addProgress(habit.id, habit.how_much_achieved)}/>
                </Downside>
              </Title>

              <Specs color={habit.achieved ? "true" : "false"}>
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
