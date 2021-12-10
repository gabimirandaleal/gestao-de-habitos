import { Conteiner, Content, Details } from "./style";
import Button from "../Button";
import LogoCardGroup from "../../assets/Icons/LogoCardGroup.png"
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import GroupsThunk from "../../Store/modules/groups/thunk"

const CardGroups = () => {

  //  const dispatch = useDispatch()
  const [change, setChange] = useState(true)
  const [text, setText] = useState("Junte-se")

  const onChange = () => {
    if (change === false){
      setChange(true)
      setText("Junte-se")
    } else {
      setChange(false)
      setText("Inscrito")
    }
  }
  
  return (
    <Conteiner text={text} color={change}>
      <Content>
        <figure>
        <img src={LogoCardGroup} alt="LogoCardGroup" />
        </figure>
        <h2>Família</h2>
        <span> Saúde </span>
        <p> Criado por NomeDoCriador </p>
      </Content>
      <Details>
        <span><p>Incritos</p> <p>5</p></span>
        <span><p>Metas</p> <p>6</p></span>
        <span><p>Atividades</p> <p>10</p></span>
      </Details>
      <Button onclick={onChange} color={change} text={text}/>
    </Conteiner>
  );
};

export default CardGroups;
