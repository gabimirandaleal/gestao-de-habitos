import SearchBar from "../../Components/SearchBar";
import { Conteiner, Content, CardsBox } from "./style";
import CardGroups from "../../Components/CardGroups";
import Header from "../../Components/Header";

function Groups() {
  return (
    <Conteiner>
      <Header />
      <Content>
        <SearchBar />
        <CardsBox>
          <CardGroups />
          <CardGroups />
          <CardGroups />
        </CardsBox>
      </Content>
    </Conteiner>
  );
}

export default Groups;
