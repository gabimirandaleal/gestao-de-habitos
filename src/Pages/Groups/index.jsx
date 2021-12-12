import SearchBar from "../../Components/SearchBar";
import { Conteiner, NotCards, CardsBox, ContentBox, DivName} from "./style";
import CardGroups from "../../Components/CardGroups";
import { useEffect, useState } from "react";
import noGroupsHabits from "../../assets/img/noGroupHabits.png";
import { useSelector, useDispatch } from "react-redux";
 import {addSubPageThunk} from "../../Store/modules/groups/thunk"
import { searchGroupThunk, searchGroupSubscriptionsThunk } from "../../Store/modules/groups/thunk";
import { BsPlusCircleFill } from "react-icons/bs";
import habitsImg from "../../assets/img/habits.png";
import Button from "../../Components/Button";
import PopUpCreateGroup from "../../Components/PopUpCreateGroup"
import {NativeSelect} from "@mui/material"

function Groups() {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.group);
  const [popup, setPopup] = useState(false)
  const [ispage] = useState(true);
  const [nextPage, setNextPage] = useState("");
  const [atualizar, setAtualizar] = useState(true)
  const [input, setInput] = useState("Grupos")

  const show_more = () =>{
    dispatch(addSubPageThunk(nextPage, groups, setNextPage))
  }

  const showSubs= () =>{
    setAtualizar(!atualizar)
  }


  useEffect(() => {
    if(atualizar){
      dispatch(searchGroupThunk(setNextPage));
    }else{
      dispatch(searchGroupSubscriptionsThunk())
    }
  }, [atualizar]);

  return ispage ? (
    <Conteiner>
      {/* <section> */}
      <ContentBox>
        <DivName>
          <div>
            <img src={habitsImg} alt="habits" />
            <NativeSelect onChange={showSubs} fullWidth id="select" >
              <option defaultValue={(event) => setInput(event.target.value)}>Grupos</option>
              <option defaultValue={(event) => setInput(event.target.value)}>Grupos inscritos</option>
            </NativeSelect>
          </div>
          <BsPlusCircleFill onClick={() => setPopup(true)} size={"20px"} color="#2ECC71"/>
        </DivName>
        <SearchBar />
        <CardsBox>
          {groups &&
            groups.map((item, index) => (
                <CardGroups
                  key={index}
                  item={item}
                  groups={groups}
                />
            ))}
        </CardsBox>
        {atualizar && <Button onclick={show_more} text={"Mostrar Mais"}></Button>}
      </ContentBox>
      {popup && <PopUpCreateGroup setPopup={setPopup}></PopUpCreateGroup>}
      {/* </section> */}
    </Conteiner>
  ) : (
    <Conteiner>
      {/* <section> */}
      <ContentBox>
        <SearchBar />
        <NotCards>
          <figure>
            <img src={noGroupsHabits} alt="noGroupsHabits" />
          </figure>
          <h2> Sem grupos... </h2>
        </NotCards>
      </ContentBox>
      {/* </section> */}
    </Conteiner>
  );
}

export default Groups;
