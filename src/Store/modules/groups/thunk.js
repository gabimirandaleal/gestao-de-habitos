import api from "../../../Services/api"
import {GroupsList, addGroupsList, addGoalList, addActivityList, editGoalList,editGroupsList, editActivityList, unsubscribeGroup, subscribeGroup, showMore} from "./actions"
import axios from "axios"
// import {GroupsList, GroupsAdd} from "./actions"
import {toast} from "react-toastify"

export const searchGroupThunk = (setNextPage) => (dispatch) => { 
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .get(`groups/?page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data)
      setNextPage(response.data.next)
      dispatch(GroupsList(response.data))
    })
    .catch((err) => console.log(err))
};

export const addSubPageThunk = (nextPreviousPage, groups, setNextPage) => (dispatch) =>{
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  console.log(nextPreviousPage)
  if(nextPreviousPage != null){
    axios.get(nextPreviousPage, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) =>{
      setNextPage(response.data.next)
      console.log(response.data.results, groups)
      dispatch(showMore(response.data.results, groups))
    }).catch((err) => console.log(err))
  }
}

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

export const subscribeGroupThunk = (groupId, groups, userID) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .post(`groups/${groupId}/subscribe/`, groupId, {headers: { Authorization: `Bearer ${token}`}})
    .then((response) => {
      dispatch(subscribeGroup(groups, groupId, userID, response.data))
    })
    .catch((err) => console.log(err))
};

export const unsubscribeGroupThunk = (groupId, groups, userID) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  console.log(userID)
  api
    .delete(`groups/${groupId}/unsubscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      dispatch(unsubscribeGroup(groups, groupId, userID))
      toast.success("Requisição aceita");
    })
    .catch((err) => toast.error(err));
};