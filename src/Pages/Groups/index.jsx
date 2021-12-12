import SearchBar from "../../Components/SearchBar";
import { Conteiner, NotCards, CardsBox, ContentBox, DivName } from "./style";
import CardGroups from "../../Components/CardGroups";
import { useEffect, useState, useMemo } from "react";
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
  const todosgrupos = useSelector((state) => state)
  const [popup, setPopup] = useState(false)
  const [ispage] = useState(true);
  const [nextPage, setNextPage] = useState("");
  const [atualizar, setAtualizar] = useState(true)
  const [input, setInput] = useState("Grupos")
  const [searchGroup, setSearchGroup] = useState("")

  const show_more = () =>{
    dispatch(addSubPageThunk(nextPage, groups, setNextPage))
  }

  const showSubs= () =>{
    setAtualizar(!atualizar)
  }

  const filtergroups = useMemo(() => {
    const lowerSearchGroup = searchGroup.toLowerCase()
    return groups.filter((item) => ((item.name).toLowerCase().includes(lowerSearchGroup) || (item.category).toLowerCase().includes(lowerSearchGroup) || (item.description).toLowerCase().includes(lowerSearchGroup)))
  }, [searchGroup])


  useEffect(() => {
    if(atualizar){
      dispatch(searchGroupThunk(setNextPage));
    }else{
      dispatch(searchGroupSubscriptionsThunk())
    }
  }, [atualizar]);

  return ispage ? (
    <>
    <Conteiner>
      <ContentBox>
        <DivName>
          <div>
            <img src={habitsImg} alt="habits" />
            <NativeSelect onChange={showSubs} fullWidth fullHeigth id="select" >
              <option defaultValue={(event) => setInput(event.target.value)}>Grupos</option>
              <option defaultValue={(event) => setInput(event.target.value)}>Grupos inscritos</option>
            </NativeSelect>
          </div>
          <BsPlusCircleFill onClick={() => setPopup(true)} cursor={"pointer"} size={"27px"} color="#2ECC71"/>
        </DivName>
        <SearchBar onchange={(event) => setSearchGroup(event.target.value)}  onclick={filtergroups}/>
        <CardsBox>
          {filtergroups &&
            filtergroups.map((item, index) => (
                <CardGroups
                  key={index}
                  item={item}
                  groups={groups}
                />
            ))}
        </CardsBox>
        {atualizar && <Button onclick={show_more} text={"Mostrar Mais"}></Button>}
      </ContentBox>
    </Conteiner>
      {popup && <PopUpCreateGroup setPopup={setPopup}></PopUpCreateGroup>}
      </>
  ) : (
    <Conteiner>
      <ContentBox>
        <SearchBar />
        <NotCards>
          <figure>
            <img src={noGroupsHabits} alt="noGroupsHabits" />
          </figure>
          <h2> Sem grupos... </h2>
        </NotCards>
      </ContentBox>
    </Conteiner>
  );
}

export default Groups;
