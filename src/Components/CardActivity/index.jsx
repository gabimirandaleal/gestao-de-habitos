import {
  Card,
  Cards,
  Specs,
  Title,
  Upside,
  Downside,
  Background,
} from "./style";
import { BsPencil } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import activite from "../../assets/img/activite.png";
import PopUpEditActivity from "../PopUpEditActivity";
import PopUpRemove from "../PopUpRemove";
import { useState } from "react";

const CardActivity = ({ item, name, group }) => {
  const [popupEditActivities, setPopupEditActivities] = useState(false);
  const [popupRemove, setPopupRemove] = useState(false);

  const data = () => {
    const split = item.realization_time.split("T");
    const date = split[0].split("-");
    return ` ${date[2]}/${date[1]}/${date[0]}`;
  };

  return (
    <Cards>
      {popupEditActivities && (
        <PopUpEditActivity
          item={item}
          idActivity={item.id}
          setPopup={setPopupEditActivities}
          group={group}
        />
      )}
      {popupRemove && (
        <PopUpRemove
          id={item.id}
          item={item}
          setPopup={setPopupRemove}
          text={"atividade"}
          group={group}
        ></PopUpRemove>
      )}
      <Card>
        <Title>
          <Upside>
            <h3>
              {item.title.length > 15
                ? `${item.title.substring(0, 15)}...`
                : item.title}
            </h3>
          </Upside>

          <Downside>
            <BsPencil
              size="19px"
              onClick={() => setPopupEditActivities(true)}
            />
            <Background>
              <img src={activite} alt="habits" />
            </Background>
            <IoCloseCircle size="20px" onClick={() => setPopupRemove(true)} />
          </Downside>
        </Title>
        <Specs>
          <div>Realização: {data()}</div>
          <div>Grupo: {name}</div>
        </Specs>
      </Card>
    </Cards>
  );
};

export default CardActivity;
