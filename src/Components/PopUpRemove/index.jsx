import ButtonYesOrNo from "../ButtonYesOrNo"
import {DivA, DivContainer, Div} from "./style"
import { useDispatch } from "react-redux"; 
import {deleteActivityThunk} from "../../Store/modules/groups/thunk"

function PopUpRemove ({text, id, item, deleteHabitPop, setPopup}) {
  const dispatch = useDispatch();
  function removerCard(){
    setPopup(false)
    if(text === "hábito"){
      deleteHabitPop()
    }else if(text === "meta"){

    }else if(text === "grupo"){
      
    }else if(text === "atividade"){
      setPopup(false)
      dispatch(deleteActivityThunk(id, item))
    }
  }

  return (
    <DivA>
      <DivContainer> 
          <Div>
              <h3>Remover {text}?</h3>
              <ButtonYesOrNo onclickYes={removerCard} onclickNo={() => setPopup(false)}></ButtonYesOrNo>
          </Div>
      </DivContainer>
    </DivA>
  )
}

export default PopUpRemove;