import Header from "../../Components/Header";
import {Container, ContainerAcess, DivImage, DivInfos, DivLinks} from "./style"
import image from "../../assets/img/img-home.png"
import { Link } from "react-router-dom";


function Home() {
    return(
        <Container>
            <Header/>
            <ContainerAcess>
                <DivImage>
                    <img src={image} alt="" />
                </DivImage>
                <DivInfos>
                    <p>Re-leaf é uma plataforma online para aprender e compartilhar bons hábitos.</p>
                    <DivLinks>
                        <Link to={"/login"}>Acesse sua conta.</Link>
                        <Link to={"/signup"}>Cadastre-se</Link>
                    </DivLinks>
                </DivInfos>
            </ContainerAcess>
        </Container>
    )
}

export default Home;