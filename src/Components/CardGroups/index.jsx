import { CardHeader, Conteiner, Content, DescriptionGroup, Details } from "./style";
import {HighlightOff} from "@mui/icons-material"
import Button from "../Button";
import LogoCardGroup from "../../assets/Icons/LogoCardGroup.png";
import { useState, useEffect } from "react";
import {subscribeGroup, unsubscribeGroup} from "../../Store/modules/groups/thunk"
import { useDispatch } from "react-redux";


const CardGroups = ({name, category, creator, inscribed, goals, activities, id}) => {
  const dispatch = useDispatch()
  const [change, setChange] = useState(true);
  const [text, setText] = useState("Junte-se");
  // const [popUp, setPopUp] = useState(false);


  const onChange = () => {
    if (change === false) {
      setChange(true);
      dispatch(subscribeGroup(id))
      setText("Junte-se");
    } else {
      setChange(false);
      dispatch(unsubscribeGroup(id))
      setText("Inscrito");
    }
  };

  useEffect(() => {
    onChange();
  }, []);

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
            <h2>{name}</h2>
            <span> {category} </span>
          </DescriptionGroup>
        </CardHeader>
        <p> {creator} </p>
      </Content>
      <Details>
        <span>
          <p>Incritos</p> <p>{inscribed}</p>
        </span>
        <span>
          <p>Metas</p> <p>{goals}</p>
        </span>
        <span>
          <p>Atividades</p> <p>{activities}</p>
        </span>
      </Details>
      <Button onclick={onChange} color={change} text={text} />
    </Conteiner>
  );
};

export default CardGroups;
