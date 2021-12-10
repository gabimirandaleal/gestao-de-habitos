import ButtonYesOrNo from "../ButtonYesOrNo"
import {DivA, DivContainer, Div} from "./style"

function PopUpRemove ({text, card}) {

  function removerCard(){
    if(text === "hábito"){

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
              <ButtonYesOrNo></ButtonYesOrNo>
          </Div>
      </DivContainer>
    </DivA>
  )
}

export default PopUpRemove;