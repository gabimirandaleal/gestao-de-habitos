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
import {editGroupThunk} from "../../Store/modules/groups/thunk"

function PopUpEditGroup({setPopup, idGroup}) {
    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
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
        dispatch(editGroupThunk(data, idGroup))
        setPopup(false)
    }
    return(
        <DivA>
            <DivContainer> 
                <Div>
                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <IoCloseCircle onClick={() => setPopup(false)}/>
                        <h3>Editar Grupo</h3>
                        <TextField margin="normal" fullWidth id="login-basic" label="Nome" variant="outlined" error={!!errors.name?.message} {...register("name")}/>
                        <Button type="submit" text={"Alterar"}></Button>
                    </Form>     
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopUpEditGroup;