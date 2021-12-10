import React from "react";
import { TextField } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@material-ui/core";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import { Container, AddTitle } from "./style";
import Button from "../../Components/Button";

const AddHab = () => {
  const [cat, setCat] = useState("");
  const [dif, setDif] = useState("");
  const [freq, setFreq] = useState("");

  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup.number(),
    user: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    // dispatch(addHabitThunk(data));
    console.log(data);
  };

  function handleCat(event) {
    setCat(event.target.value);
  }

  function handleDif(event) {
    setDif(event.target.value);
  }

  function handleFreq(event) {
    setFreq(event.target.value);
  }

  return (
    <Container>
      <AddTitle>Criar Hábito</AddTitle>
      <FormControl onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          id="title"
          label="Título"
          variant="outlined"
          {...register("title")}
          error={errors.title?.message}
        />

        <InputLabel id="categoria-label">Selecionar Categoria:</InputLabel>
        <Select
          labelId="categoria-label"
          id="categoria"
          value={cat}
          onChange={handleCat}
          {...register("category")}
          error={errors.category?.message}
        >
          <MenuItem value="Saúde">Saúde</MenuItem>
          <MenuItem value="Lazer">Lazer</MenuItem>
          <MenuItem value="Esporte">Esporte</MenuItem>
        </Select>

        <InputLabel id="dificuldade-label">Selecionar Dificuldade:</InputLabel>
        <Select
          labelId="dificuldade-label"
          id="dificuldade"
          value={dif}
          onChange={handleDif}
          {...register("difficulty")}
          error={errors.difficulty?.message}
        >
          <MenuItem value="Fácil">Fácil</MenuItem>
          <MenuItem value="Médio">Médio</MenuItem>
          <MenuItem value="Difícil">Difícil</MenuItem>
        </Select>

        <InputLabel id="frequencia-label">Selecionar Frequência:</InputLabel>
        <Select
          labelId="frequencia-label"
          id="frequencia"
          value={freq}
          onChange={handleFreq}
          {...register("frequency")}
          error={errors.frequency?.message}
        >
          <MenuItem value="Diária">Diária</MenuItem>
          <MenuItem value="Semanal">Semanal</MenuItem>
          <MenuItem value="Mensal">Difícil</MenuItem>
        </Select>
        <Button type="submit" text="Adicionar"></Button>
      </FormControl>
    </Container>
  );
};

export default AddHab;
