import {NativeSelect, InputLabel, TextField} from "@mui/material"
import Button from "../Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Error, Div, Form, DivA, DivContainer} from "./style"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircle } from "react-icons/io5";

function PopUpCreateGoal({setPopup}) {
    const formSchema = yup.object().shape({
        title: yup.string().required("Título obrigatório"),
        difficulty: yup.string().required("Dificuldade obrigatória")
    })


    const { register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })

    const onSubmitFunction = data => {
        console.log(data)
        setPopup(false)
    }
    return(
        <DivA>
            <DivContainer> 
                <Div>
                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <IoCloseCircle onClick={() => setPopup(false)}/>
                        <h3>Criar Meta</h3>
                        <TextField margin="normal" fullWidth id="login-basic" label="Título" variant="outlined" error={!!errors.title?.message} {...register("title")}/>
                        <InputLabel htmlFor="select">Selecionar a dificuldade:</InputLabel>
                        <NativeSelect {...register("difficulty")} error={!!errors.category?.message} fullWidth id="select" >
                            <option defaultValue={(event) => event.target.value}>Fácil</option>
                            <option defaultValue={(event) => event.target.value}>Médio</option>
                            <option defaultValue={(event) => event.target.value}>Dificil</option>
                        </NativeSelect>
                            
                        <Button type="submit" text={"Adicionar"}></Button>
                    </Form>     
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopUpCreateGoal;