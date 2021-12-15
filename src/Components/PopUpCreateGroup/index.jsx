import { NativeSelect, InputLabel, TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addGroupsThunk } from "../../Store/modules/groups/thunk";

function PopUpCreateGroup({ setPopup }) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Título obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    category: yup.string().required("Categoria obrigatória"),
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
    dispatch(addGroupsThunk(data));
    setPopup(false);
  };
  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => setPopup(false)} />
            <h3>Criar Grupo</h3>
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Nome"
              variant="outlined"
              error={!!errors.title?.message}
              {...register("name")}
            />
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Descrição"
              variant="outlined"
              error={!!errors.description?.message}
              {...register("description")}
            />
            <InputLabel htmlFor="select">Selecionar a categoria:</InputLabel>
            <NativeSelect
              {...register("category")}
              error={!!errors.category?.message}
              fullWidth
              id="select"
            >
              <option defaultValue={(event) => event.target.value}>
                Alimentação
              </option>
              <option defaultValue={(event) => event.target.value}>
                Saúde
              </option>
              <option defaultValue={(event) => event.target.value}>
                Esporte
              </option>
              <option defaultValue={(event) => event.target.value}>
                Lazer
              </option>
            </NativeSelect>

            <Button type="submit" text={"Adicionar"}></Button>
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpCreateGroup;
