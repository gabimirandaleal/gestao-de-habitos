import {
  Container,
  Card,
  Cards,
  Specs,
  Title,
  Upside,
  Downside,
  Background,
  Close,
} from "./style";

import { GrSubtractCircle } from "react-icons/gr";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import medal from "../../assets/img/medal.png";
import PopUpEditActivity from "../PopUpEditActivity";
import { useState } from "react";
const CardGoals = ({ item, name }) => {
  const [popupEditActivities, setPopupEditActivities] = useState(false);

  return (
    <Cards>
      {popupEditActivities && (
        <PopUpEditActivity
          item={item}
          idActivity={item.id}
          setPopup={setPopupEditActivities}
        />
      )}
      <Card>
        <Title>
          <Close>
            <IoCloseCircle size="20px" />
          </Close>
          <Upside>
            <h3>
              {item.title.length > 15
                ? `${item.title.substring(0, 15)}...`
                : item.title}
            </h3>
          </Upside>

          <Downside>
            <GrSubtractCircle size="19px" />
            <Background>
              <img src={medal} alt="habits" />
            </Background>
            <AiOutlinePlusCircle size="19px" />
          </Downside>
        </Title>
        <Specs>
          <div>Categoria: {item.category}</div>
          <div>Dificuldade: {item.difficulty}</div>
          <div>Progresso: {item.how_much_achieved}%</div>
        </Specs>
      </Card>
    </Cards>
  );
};

export default CardGoals;
