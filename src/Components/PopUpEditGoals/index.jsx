import {InputLabel, NativeSelect, TextField} from "@mui/material"
import Button from "../Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Div, Form, DivA, DivContainer} from "./style"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {editGoalThunk} from "../../Store/modules/groups/thunk"
import { useState } from "react";
import api from "../../Services/api"

function PopUpEditGoals({item, idGoal, setPopup}) {
    const formSchema = yup.object().shape({
        title: yup.string().required("Titulo obrigatorio"),
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
        setPopup(false)
        dispatch(editGoalThunk(data, idGoal))
    }

    return(
        <DivA>
            <DivContainer> 
                <Div>
                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <IoCloseCircle onClick={() => setPopup(false)}/>
                        <h3>Editar Meta</h3>
                        <TextField margin="normal" defaultValue={item?.title} fullWidth id="login-basic" label="Título" variant="outlined" error={!!errors.title?.message} {...register("title")}/>
                        <NativeSelect {...register("difficulty")} defaultValue={item.difficulty} error={!!errors.category?.message} fullWidth id="select" >
                            <option>Fácil</option>
                            <option>Médio</option>
                            <option>Difícil</option>
                        </NativeSelect>
                        <Button type="submit" text={"Alterar"}></Button>
                    </Form>     
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopUpEditGoals;