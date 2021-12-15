import {
  Card,
  Cards,
  Specs,
  Title,
  Upside,
  Downside,
  Background,
  Close,
  GrSubtractCirButton,
  AiOutlinePlusCircleButton
} from "./style";

import { GrSubtractCircle } from "react-icons/gr";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {BsPencil} from "react-icons/bs"
import { IoCloseCircle } from "react-icons/io5";
import medal from "../../assets/img/medal.png";
import PopUpEditGoals from "../PopUpEditGoals";
import PopUpRemove from "../PopUpRemove"
import { useState } from "react";
import {plusProgressGoalThunk, subtractProgressGoalThunk} from "../../Store/modules/groups/thunk"
import { useDispatch } from "react-redux"; 
const CardGoals = ({ item, group }) => {
  const [popupEditGoals, setPopupEditGoals] = useState(false);
  const [popupRemoveGoals, setPopupRemovetGoals] = useState(false);
  const dispatch = useDispatch();

  const subProgress = () =>{
    dispatch(subtractProgressGoalThunk(item.id, item.how_much_achieved, group))
  }

  const addProgress = () =>{
    dispatch(plusProgressGoalThunk(item.id, item.how_much_achieved, group))
  }


  return (
    <Cards>
      {popupEditGoals && (
        <PopUpEditGoals
          item={item}
          idGoal={item.id}
          setPopup={setPopupEditGoals}
          group={group}
        />
      )}
      {popupRemoveGoals && (
        <PopUpRemove
          text = "meta"
          id = {item.id}
          item ={item}
          setPopup ={setPopupRemovetGoals}
          group={group}
        />
      )}
      <Card>
        <Title>
          <Close>
            <BsPencil onClick={() => setPopupEditGoals(true)}/>
            <IoCloseCircle onClick={() => setPopupRemovetGoals(true)} size="20px" />
          </Close>
          <Upside>
            <h3>
              {item.title.length > 15
                ? `${item.title.substring(0, 15)}...`
                : item.title}
            </h3>
          </Upside>

          <Downside>
          <GrSubtractCirButton>

            <GrSubtractCircle size="19px" onClick={subProgress}/>
          </GrSubtractCirButton>
            <Background>
              <img src={medal} alt="habits" />
            </Background>
            <AiOutlinePlusCircleButton>

            <AiOutlinePlusCircle size="19px" onClick={addProgress}/>
            </AiOutlinePlusCircleButton>
          </Downside>
        </Title>
        <Specs>
          <div>Dificuldade: {item.difficulty}</div>
          <div>Progresso: {item.how_much_achieved}%</div>
        </Specs>
      </Card>
    </Cards>
  );
};

export default CardGoals;
