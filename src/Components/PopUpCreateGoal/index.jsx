import {NativeSelect, InputLabel, TextField} from "@mui/material"
import Button from "../Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Div, Form, DivA, DivContainer} from "./style"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {addGoalThunk} from "../../Store/modules/groups/thunk"

function PopUpCreateGoal({setPopup, idGroup}) {
    const formSchema = yup.object().shape({
        title: yup.string().required("Título obrigatório"),
        difficulty: yup.string().required("Dificuldade obrigatória")
    })
    const dispatch = useDispatch();

    const { register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })

    const onSubmitFunction = data => {
        data = {...data, "achieved": "false", "how_much_achieved": "0", "group": idGroup}
        console.log(data)
        dispatch(addGoalThunk(data))
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