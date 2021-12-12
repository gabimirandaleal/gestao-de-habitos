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
import {editUserThunk} from "../../Store/modules/user/thunk"

function PopUpEditUser({setPopup, user}) {
    const formSchema = yup.object().shape({
        username: yup.string().required("Username obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    })
    const dispatch = useDispatch();

    const { register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })

    const onSubmitFunction = data => {
        data ={...data, id: user.id}
        dispatch(editUserThunk(data, user))
        setPopup(false)
    }
    return(
        <DivA>
            <DivContainer> 
                <Div>
                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <IoCloseCircle onClick={() => setPopup(false)}/>
                        <h3>Editar Perfil</h3>
                        <TextField defaultValue={user.username} margin="normal" fullWidth id="login-basic" label="Usuário" variant="outlined" error={!!errors.username?.message} {...register("username")}/>
                        <TextField defaultValue={user.email} margin="normal" fullWidth id="login-basic" label="E-mail" variant="outlined" error={!!errors.email?.message} {...register("email")}/>
                        <Button type="submit" text={"Alterar"}></Button>
                    </Form>     
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopUpEditUser;