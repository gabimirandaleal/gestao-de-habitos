import { CardHeader, Conteiner, Content, DescriptionGroup, Details } from "./style";
import {HighlightOff} from "@mui/icons-material"
import Button from "../Button";
import LogoCardGroup from "../../assets/Icons/LogoCardGroup.png";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import GroupsThunk from "../../Store/modules/groups/thunk"

const CardGroups = () => {
  //  const dispatch = useDispatch()
  const [change, setChange] = useState(true);
  const [text, setText] = useState("Junte-se");

  const onChange = () => {
    if (change === false) {
      setChange(true);
      setText("Junte-se");
    } else {
      setChange(false);
      setText("Inscrito");
    }
  };

  return (
    <Conteiner text={text} color={change}>
       <span className="icone">
            <HighlightOff />
        </span>
      <Content>
        <CardHeader>
          <figure>
            <img src={LogoCardGroup} alt="LogoCardGroup" />
          </figure>
          <DescriptionGroup>
            <h2>Família</h2>
            <span> Saúde </span>
          </DescriptionGroup>
        </CardHeader>
        <p> Criado por NomeDoCriador </p>
      </Content>
      <Details>
        <span>
          <p>Incritos</p> <p>5</p>
        </span>
        <span>
          <p>Metas</p> <p>6</p>
        </span>
        <span>
          <p>Atividades</p> <p>10</p>
        </span>
      </Details>
      <Button onclick={onChange} color={change} text={text} />
    </Conteiner>
  );
};

export default CardGroups;
