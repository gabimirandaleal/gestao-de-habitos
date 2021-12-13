import api from "../../../Services/api";
import { addHabit, attHabit, delHabit, updateHabits, plusProgressHabits, subProgressHabits, editHabits } from "./actions";
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

export const delHabitThunk = (idHabit) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
    .delete(`habits/${idHabit}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(delHabit(idHabit));
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

export const plusProgressHabitsThunk = (idHabit, progress) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  if(progress < 100 && progress == 90){
    const data = {"achieved": true, "how_much_achieved": 100}
    api
    .patch(`habits/${idHabit}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => dispatch(plusProgressHabits(response.data)));
  }else if(progress < 100){
    const data = {"how_much_achieved": (Number(progress)+10)}
    api
    .patch(`habits/${idHabit}/`, data,{
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => dispatch(plusProgressHabits(response.data)))
    .catch((err) => console.log("oi"))
  }
};

export const subtractProgressHabitsThunk = (idHabit, progress) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  if(progress > 0 ){
    const data = {"achieved": false, "how_much_achieved": (progress-10)}
    api
    .patch(`habits/${idHabit}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(subProgressHabits(response.data))
    })
    .catch((err) => console.log(err))
  }
};

export const editHabitsThunk = (idHabit, data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
    .patch(`habits/${idHabit}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(editHabits(response.data))
    })
    .catch((err) => console.log(err))
};