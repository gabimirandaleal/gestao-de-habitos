import api from "../../../Services/api";
import { addHabit, editHabit, delHabit } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addHabitThunk = (data) => (dispatch) => {
  api.post(`/habits/`, data).then((response) => console.log(response));
};

// export const attHabitThunk = (data) => (dispatch) => {
//   api
//     .post(`/sessions/`, data)
//     .then((response) => {
//       console.log(response.data);
//       const { access } = response.data;
//       localStorage.clear();
//       localStorage.setItem("@GestaoHabitos:token", JSON.stringify(access));
//       dispatch(signIn(access));
//       toast.success("Login feito com sucesso!");
//     })
//     .catch((_) => {
//       toast.error("Usuário ou senha inválidos");
//     });
// };

// export const delHabitThunk = (data) => (dispatch) => {
//   api
//     .post(`/sessions/`, data)
//     .then((response) => {
//       console.log(response.data);
//       const { access } = response.data;
//       localStorage.clear();
//       localStorage.setItem("@GestaoHabitos:token", JSON.stringify(access));
//       dispatch(signIn(access));
//       toast.success("Login feito com sucesso!");
//     })
//     .catch((_) => {
//       toast.error("Usuário ou senha inválidos");
//     });
// };
