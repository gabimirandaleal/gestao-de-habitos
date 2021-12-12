import SearchBar from "../../Components/SearchBar";
import { Conteiner, NotCards, CardsBox, ContentBox } from "./style";
import CardGroups from "../../Components/CardGroups";
import { useEffect, useState } from "react";
import noGroupsHabits from "../../assets/img/noGroupHabits.png";
import { useSelector, useDispatch } from "react-redux";
 import {addSubPageThunk} from "../../Store/modules/groups/thunk"
import { searchGroupThunk } from "../../Store/modules/groups/thunk";
import Button from "../../Components/Button";

function Groups() {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.group);
  const [ispage] = useState(true);
  const [nextPage, setNextPage] = useState("");
  useEffect(() => {
    dispatch(searchGroupThunk(setNextPage));
  }, []);


  const show_more = () =>{
    dispatch(addSubPageThunk(nextPage, groups, setNextPage))
  }

  return ispage ? (
    <Conteiner>
      {/* <section> */}
      <ContentBox>
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
        <Button onclick={show_more} text={"Mostrar Mais"}></Button>
      </ContentBox>
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
