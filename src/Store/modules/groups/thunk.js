import api from "../../../Services/api"
import {GroupsList, addGroupsList, addGoalList, addActivityList, editGoalList,editGroupsList, editActivityList} from "./actions"
import axios from "axios"
// import {GroupsList, GroupsAdd} from "./actions"
import {toast} from "react-toastify"

export const GroupsThunk = () => async (dispatch) => {
    await axios
      .get(`https://kenzie-habits.herokuapp.com/groups/`)
      .then((response) => dispatch(GroupsList(response.data)))
      .catch((err) => console.log(err))
};


export const searchGroupThunk = () => async (dispatch) => { 
  // passar a string que é o numero da pagina
  await axios
  .get(`https://kenzie-habits.herokuapp.com/groups/?search=1`).then((response) => {
    dispatch(GroupsList(response.data))
  })
  .catch((err) => console.log(err))
};


// export const addGroupsThunk = (data) => (dispatch) => {
//   const token = JSON.parse(localStorage.getItem("@Groups:token"));
//     axios
//     .post(`https://kenzie-habits.herokuapp.com/groups/`, data, 
//     { 
//       headers: { Authorization: `Bearer ${token}` } 
//     })
//     .then((response) => {
//       dispatch(GroupsAdd(response.data));
//       toast.success("Grupo criado")
//     })
//     .catch((_) => {
//       toast.error("Erro ao criar grupo")
//     });
// };


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


export const addGroupsThunk = (data) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
      api
        .post(`groups/`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        })
        .then((response) => dispatch(addGroupsList(response.data)))
        .catch((err) => console.log(err))
};

export const addGoalThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
      .post(`goals/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      })
      .then((response) => dispatch(addGoalList(response.data)))
      .catch((err) => console.log(err))
};

export const addActivityThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
      .post(`activities/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      })
      .then((response) => dispatch(addActivityList(response.data)))
      .catch((err) => console.log(err))
};

export const editGroupThunk = (data, idGroup) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
      .patch(`groups/${idGroup}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      })
      .then((response) => dispatch(editGroupsList(response.data)))
      .catch((err) => console.log(err))
};

export const editGoalThunk = (data, idGoal) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
      .patch(`groups/${idGoal}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      })
      .then((response) => dispatch(editGoalList(response.data)))
      .catch((err) => console.log(err))
};

export const editActivityThunk = (data, idActivity) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
      .patch(`/activities/${idActivity}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      })
      .then((response) => dispatch(editActivityList(response.data)))
      .catch((err) => console.log(err))
};