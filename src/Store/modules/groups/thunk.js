import axios from "axios";
import {GroupsList, GroupsAdd} from "./actions"
import {toast} from "react-toastify"

const GroupsThunk = () => async (dispatch) => {
    await axios
      .get(`https://kenzie-habits.herokuapp.com/groups/`)
      .then((response) => dispatch(GroupsList(response.data)))
      .catch((err) => console.log(err))
};

export default GroupsThunk;

export const searchGroupThunk = () => async (dispatch) => { 
  // passar a string que é o numero da pagina
  await axios
  .get(`https://kenzie-habits.herokuapp.com/groups/?search=1`).then((response) => {
    dispatch(GroupsList(response.data))
  })
  .catch((err) => console.log(err))
};


export const addGroupsThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@Groups:token"));
    axios
    .post(`https://kenzie-habits.herokuapp.com/groups/`, data, 
    { 
      headers: { Authorization: `Bearer ${token}` } 
    })
    .then((response) => {
      dispatch(GroupsAdd(response.data));
      toast.success("Grupo criado")
    })
    .catch((_) => {
      toast.error("Erro ao criar grupo")
    });
};


export const GroupsUpdateThunk = (data, id) => {
  const token = JSON.parse(localStorage.getItem("@Groups:token"));
  axios  
  .patch(`https://kenzie-habits.herokuapp.com/groups/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((_) => toast.success("Grupo alterado com sucesso"))
    .catch((_) => toast.error("Erro ao alterar grupo"));
};

