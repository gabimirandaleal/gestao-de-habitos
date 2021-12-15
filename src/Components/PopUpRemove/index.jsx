import ButtonYesOrNo from "../ButtonYesOrNo";
import { DivA, DivContainer, Div } from "./style";
import { useDispatch } from "react-redux";
import {
  deleteActivityThunk,
  deleteGoalThunk,
  deleteGroupThunk,
} from "../../Store/modules/groups/thunk";

function PopUpRemove({ text, id, item, deleteHabitPop, setPopup, group }) {
  const dispatch = useDispatch();
  function removerCard() {
    setPopup(false);
    if (text === "hábito") {
      deleteHabitPop();
    } else if (text === "meta") {
      dispatch(deleteGoalThunk(id, item, group));
    } else if (text === "atividade") {
      dispatch(deleteActivityThunk(id, item, group));
    } else if (text === "grupo") {
      dispatch(deleteGroupThunk(id, item, group));
    }
  }

  return (
    <DivA>
      <DivContainer>
        <Div>
          <h3>Remover {text}?</h3>
          <ButtonYesOrNo
            onclickYes={removerCard}
            onclickNo={() => setPopup(false)}
          ></ButtonYesOrNo>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpRemove;
