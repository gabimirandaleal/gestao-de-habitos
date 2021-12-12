import api from "../../../Services/api";
import { signIn, logOut, editUser } from "./actions"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));

  api
    .patch(`users/${data.id}/`, data, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      dispatch(editUser(response.data));
      toast.success("User editado com sucesso!");
    })
    .catch((_) => {
      toast.error("Email ou usuário já existem");
    });
};

export const searchUserThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));

  api
      .get(`/users/${data}/`)
      .then((response) => {
        dispatch(editUser(response.data))
      })
      .catch((err) => {
        console.error("Ops! ocorreu um erro" + err);
      })
};

export const logOutThunk = () => (dispatch) => {
  localStorage.clear();
  dispatch(logOut());
};
