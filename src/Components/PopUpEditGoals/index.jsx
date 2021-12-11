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
import {editActivityThunk} from "../../Store/modules/groups/thunk"
import { useState } from "react";
import api from "../../Services/api"

function PopUpEditGoals({setPopup, goal}) {
    const formSchema = yup.object().shape({
        title: yup.string().required("Titulo obrigatorio"),
        how_much_achieved: yup.string().required("Progresso, obrigatório")
    })
    const dispatch = useDispatch();
    
    const { register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })

    
        
    const onSubmitFunction = data => {
        console.log(data)
        dispatch(editActivityThunk(data, goal.id))
    }
    return(
        <DivA>
            <DivContainer> 
                <Div>
                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <IoCloseCircle onClick={() => setPopup(false)}/>
                        <h3>Editar Meta</h3>
                        <TextField margin="normal" defaultValue={goal?.title} fullWidth id="login-basic" label="Título" variant="outlined" error={!!errors.title?.message} {...register("title")}/>
                        <TextField type="number" defaultValue={goal?.how_much_achieved} inputProps={{ min: 0, max: 100 }} margin="normal" fullWidth id="login-basic" label="Progresso" variant="outlined" error={!!errors.title?.message} {...register("how_much_achieved")}/>
                        <Button type="submit" text={"Alterar"}></Button>
                    </Form>     
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopUpEditGoals;