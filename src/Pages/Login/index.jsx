import {TextField} from "@mui/material"
import {Div, Form, Container} from "./style"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import {signInThunk} from "../../Store/modules/user/thunk"
import Button from "../../Components/Button"
import Header from "../../Components/Header"
import LeafAnimation from "../../Components/leafsAnimation";  
import Links from "../../Components/Links";  

function Login(){
    const dispatch = useDispatch();

    
    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })



    const onSubmitFunction = data => {
        dispatch(signInThunk(data))
    }

    return(
        <Container>
            <LeafAnimation />
            <Div>
                
                <Header></Header>
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <TextField margin="normal" fullWidth id="login-basic" label="Usuário" variant="outlined" error={!!errors.username?.message} {...register("username")}/>
                    <TextField margin="normal" fullWidth type="password" id="password-basic" label="Password" error={!!errors.password?.message} variant="outlined" {...register("password")}/>
                    <Button type="submit" text={"Entrar"}></Button>
                </Form>
                <Links to={"/signup"} label={"Cadastrar"}></Links>
            </Div>
        </Container>
    )
}

export default Login;