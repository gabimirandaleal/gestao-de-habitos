import api from "../../../Services/api";
import { signIn, logOut } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const signInThunk = (data) => (dispatch) => {
  api
    .post(`/sessions/`, data)
    .then((response) => {
      const { access } = response.data;
      localStorage.clear();
      localStorage.setItem("@GestaoHabitos:token", JSON.stringify(access));
      dispatch(signIn(access));
      toast.success("Login feito com sucesso!");
    })
    .catch((_) => {
      toast.error("Usuário ou senha inválidos");
    });
};

export const editUserThunk = (data) => (dispatch) => {
  api
    .post(`/sessions/`, data)
    .then((response) => {
      const { access } = response.data;
      localStorage.clear();
      localStorage.setItem("@GestaoHabitos:token", JSON.stringify(access));
      dispatch(signIn(access));
      toast.success("Login feito com sucesso!");
    })
    .catch((_) => {
      toast.error("Usuário ou senha inválidos");
    });
};

export const logOutThunk = () => (dispatch) => {
  localStorage.clear();
  dispatch(logOut());
};
