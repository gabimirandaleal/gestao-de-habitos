import {Leaf, Div, Container} from "./style"
import Button from "../../Components/Button"
import { useHistory } from "react-router-dom";
import LeafLogo from "../../assets/img/leaf.png";

function Error404() {
    const history = useHistory()



    return(
        <Container>
            <Div>
                <span>Você está tentando acessar uma página que não existe</span>
                <Button text="Retornar" onclick={() => history.push("/dashboard")}></Button>
                <Leaf src={LeafLogo} alt="Leaf" />
            </Div>
        </Container>
    )
}

export default Error404;