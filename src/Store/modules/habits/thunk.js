import api from "../../../Services/api";
import { addHabit, attHabit, delHabit, updateHabits } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addHabitThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .post(`/habits/`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      dispatch(addHabit(response.data));
      toast.success("Hábito criado!");
    })
    .catch((_) => {
      toast.error("Hábito não criado!");
    });
};

export const attHabitThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));

  api
    .patch(`/habits/${data.id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(attHabit(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const delHabitThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .del(`/habits/${data.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(delHabit(response.data));
      toast.success("Excluído com sucesso!");
    })
    .catch((_) => {
      toast.error("Hábito não excluído!");
    });
};

export const updateHabitsThunk = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .get(`habits/personal/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => dispatch(updateHabits(response.data)));
};
