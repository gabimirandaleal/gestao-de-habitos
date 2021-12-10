import SearchBar from "../../Components/SearchBar";
import { Conteiner, Content, NotCards, CardsBox, ContentBox } from "./style";
import CardGroups from "../../Components/CardGroups";
import Header from "../../Components/Header";
import { useState } from "react";
import noGroupsHabits from "../../assets/img/noGroupHabits.png"

function Groups() {

  const [ispage, setIspage] = useState(false)

  return ispage ? (
    <Conteiner id="conteiner">
      <Header />
      <section>
      <ContentBox  id="box">
        <SearchBar />
        <CardsBox>
          <CardGroups />
          <CardGroups />
          <CardGroups />
        </CardsBox>
      </ContentBox>
      </section>
    </Conteiner>
  ) : (
    <Conteiner id="conteiner">
    <Header />
    <section>
    <ContentBox  id="box">
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
