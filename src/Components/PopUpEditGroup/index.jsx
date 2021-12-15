import { NativeSelect, TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { editGroupThunk } from "../../Store/modules/groups/thunk";

function PopUpEditGroup({ setPopup, idGroup, item }) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
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
    console.log(data);
    dispatch(editGroupThunk(data, idGroup, item));
    setPopup(false);
  };
  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => setPopup(false)} />
            <h3>Editar Grupo</h3>
            <TextField
              margin="normal"
              defaultValue={item.name}
              fullWidth
              id="login-basic"
              label="Nome"
              variant="outlined"
              error={!!errors.name?.message}
              {...register("name")}
            />
            <TextField
              margin="normal"
              defaultValue={item.description}
              fullWidth
              id="login-basic"
              label="Descrição"
              variant="outlined"
              error={!!errors.description?.message}
              {...register("description")}
            />
            <NativeSelect
              defaultValue={item.category}
              {...register("category")}
              error={!!errors.category?.message}
              fullWidth
              id="select"
            >
              <option>Alimentação</option>
              <option>Saúde</option>
              <option>Esporte</option>
              <option>Lazer</option>
            </NativeSelect>
            <Button type="submit" text={"Alterar"}></Button>
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpEditGroup;
