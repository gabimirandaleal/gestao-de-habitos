import {Container} from "./style"

function ButtonYesOrNo ({onclickYes, onclickNo}) {

  return (
    <Container>
      <button onClick={onclickYes}>Sim</button>
      <button onClick={onclickNo}>Não</button>
    </Container>
  )
}

export default ButtonYesOrNo;