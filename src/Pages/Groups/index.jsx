import SearchBar from "../../Components/SearchBar";
import { Conteiner, NotCards, CardsBox, ContentBox } from "./style";
import CardGroups from "../../Components/CardGroups";
import { useEffect, useState } from "react";
import noGroupsHabits from "../../assets/img/noGroupHabits.png"
import { useSelector, useDispatch } from "react-redux";
// import GroupsThunk from "../../Store/modules/groups/thunk"
import searchGroupThunk from "../../Store/modules/groups/thunk"

function Groups() {

  const dispatch = useDispatch()
  const groups = useSelector((state) => state);
  const [ispage] = useState(false)

  // const groupList = groups.map((item) => {
  //   return(
  //     <CardGroups 
  //     name={item.name} 
  //     category={item.category} 
  //     creator={item.creator.username}
  //     inscribed={item.users_on_group.length}
  //     goals={item.goals.length}
  //     activities={item.activities.length}
  //     />
  //   )
  // })

  console.log(groups)

  useEffect(() => {
    dispatch(searchGroupThunk());
  }, []);

  return ispage ? (
    <Conteiner>
      <section>
      <ContentBox>
        <SearchBar />
        <CardsBox>
        {/* {groupList} */}
        </CardsBox>
      </ContentBox>
      </section>
    </Conteiner>
  ) : (
    <Conteiner>
    <section>
    <ContentBox>
      <SearchBar />
      <NotCards>
        <figure>
          <img src={noGroupsHabits} alt="noGroupsHabits"/>
        </figure>
          <h2> Sem grupos... </h2>
      </NotCards>
    </ContentBox>
    </section>
  </Conteiner>
  )
}

export default Groups;
