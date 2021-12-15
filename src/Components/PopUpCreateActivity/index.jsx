import { TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addActivityThunk } from "../../Store/modules/groups/thunk";

function PopUpCreateActivity({ setPopup, idGroup }) {
  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    realization_time: yup.string().required("Data obrigatória"),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    const { realization_time } = data;
    data = {
      ...data,
      realization_time: `${realization_time}:00Z`,
      group: idGroup,
    };
    dispatch(addActivityThunk(data));
    setPopup(false);
  };
  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => setPopup(false)} />
            <h3>Criar Atividade</h3>
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Título"
              variant="outlined"
              error={!!errors.title?.message}
              {...register("title")}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Data de realização"
              id="datetime-local"
              type="datetime-local"
              defaultValue="2021-12-10T10:30"
              error={!!errors.realization_time?.message}
              {...register("realization_time")}
            />
            <Button type="submit" text={"Adicionar"}></Button>
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpCreateActivity;
