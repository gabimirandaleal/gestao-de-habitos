import {
  CardHeader,
  Container,
  Content,
  DescriptionGroup,
  Details,
  Div,
} from "./style";
import Button from "../Button";
import LogoCardGroup from "../../assets/Icons/LogoCardGroup.png";
import { useState } from "react";
import {
  subscribeGroupThunk,
  unsubscribeGroupThunk,
} from "../../Store/modules/groups/thunk";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { BsPencil } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import api from "../../Services/api";
import PopUpRemove from "../PopUpRemove"
const CardGroups = ({
  item,
  groups,
  onclick,
  filteredProducts,
  setFilteredProducts,
  setPopupEdit,
  setItemGroup,
  setPopupRemove
}) => {
  const dispatch = useDispatch();

  const [token] = useState(
    JSON.parse(localStorage.getItem("@GestaoHabitos:token")) || ""
  );

  const userID = jwt_decode(token).user_id;
  // const [text, setText] = useState("oi");

  const verificaInscrito = () => {
    if (item.users_on_group[0] === userID) {
      return false;
    } else if (
      item.users_on_group.filter((itens) => itens.id === userID).length === 0
    ) {
      return true;
    }
    return false;
  };

  const openPopEdit = () =>{
    setPopupEdit(true)
    setItemGroup(item)
  }

  const openPopDelete = () =>{
    setPopupRemove(true)
    setItemGroup(item)
  }

  const [change, setChange] = useState(verificaInscrito());
  const onChange = () => {
    if (change) {
      setChange(!change);
      dispatch(subscribeGroupThunk(item.id, groups, userID));
    } else {
      setChange(!change);
      dispatch(unsubscribeGroupThunk(item.id, groups, userID));
    }
  };

  return (
      
      <Container
        text={verificaInscrito() ? "Junte-se" : "Inscrito"}
        color={verificaInscrito() ? "true" : ""}
      >
        <span className="icone">
          <IoCloseCircle className="animation" onClick={openPopDelete}/>
          <BsPencil className="animation" onClick={openPopEdit} />
        </span>
        <Content onClick={() => onclick(item)}>
          <CardHeader>
            <figure>
              <img src={LogoCardGroup} alt="LogoCardGroup" />
            </figure>
            <DescriptionGroup>
              <h2>{item.name}</h2>
              <span> {item.category} </span>
            </DescriptionGroup>
          </CardHeader>
          <p> {item.creator.username} </p>
        </Content>
        <Details>
          <span>
            <p>Incritos</p> <p>{item.users_on_group.length}</p>
          </span>
          <span>
            <p>Metas</p> <p>{item.goals.length}</p>
          </span>
          <span>
            <p>Atividades</p> <p>{item.activities.length}</p>
          </span>
        </Details>
        <Button
          onclick={onChange}
          color={verificaInscrito() ? "true" : ""}
          text={verificaInscrito() ? "Junte-se" : "Inscrito"}
        />
      </Container>
  );
};

export default CardGroups;
