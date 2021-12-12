import ButtonYesOrNo from "../ButtonYesOrNo"
import {DivA, DivContainer, Div} from "./style"

function PopUpRemove ({text, deleteHabitPop, setPopup}) {

  function removerCard(){
    if(text === "hábito"){
      setPopup()
      deleteHabitPop()
    }else if(text === "meta"){

    }else if(text === "grupo"){
      
    }else if(text === "atividade"){
      
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