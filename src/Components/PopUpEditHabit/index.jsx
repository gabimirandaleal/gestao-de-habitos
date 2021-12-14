import {TextField, NativeSelect, InputLabel} from "@mui/material"
import Button from "../Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Div, Form, DivA, DivContainer} from "./style"
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {editHabitsThunk} from "../../Store/modules/habits/thunk"

function PopUpEditHabit({setPopup, idHabit, item}) {
    const formSchema = yup.object().shape({
        title: yup.string().required("Título obrigatório"),
        category: yup.string().required("Categoria obrigatória"),
        difficulty: yup.string().required("Dificuldade Obrigatória"),
        frequency: yup.string().required("Frequência obrigatória")
    })
    const dispatch = useDispatch();

    const { register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })

    const onSubmitFunction = data => {
        dispatch(editHabitsThunk(idHabit, data))
        setPopup(false)
    }
    return(
        <DivA>
            <DivContainer> 
                <Div>
                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <IoCloseCircle onClick={() => setPopup(false)}/>
                        <h3>Editar Hábito</h3>
                        <TextField fullWidth id="login-basic" defaultValue={item.title} label="Título" variant="outlined" error={!!errors.title?.message} {...register("title")}/>
                        <InputLabel htmlFor="select">Selecionar a categoria:</InputLabel>
                        <NativeSelect {...register("category")} defaultValue={item.category}  error={!!errors.category?.message} fullWidth id="select" >
                            <option>Alimentação</option>
                            <option>Saúde</option>
                            <option>Esporte</option>
                            <option>Lazer</option>
                        </NativeSelect>
                        <InputLabel htmlFor="select">Selecionar a dificuldade:</InputLabel>
                        <NativeSelect {...register("difficulty")} defaultValue={item.difficulty} error={!!errors.difficulty?.message} fullWidth id="select" >
                            <option>Fácil</option>
                            <option>Médio</option>
                            <option>Difícil</option>
                        </NativeSelect>
                        <InputLabel htmlFor="select">Selecionar a frequência:</InputLabel>
                        <NativeSelect {...register("frequency")} defaultValue={item.frequency} error={!!errors.frequency?.message} fullWidth id="select" >
                            <option>Diária</option>
                            <option>Semanal</option>
                            <option>Mensal</option>
                            <option>Anual</option>
                        </NativeSelect>
                        <Button type="submit" text={"Alterar"}></Button>
                    </Form>     
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopUpEditHabit;