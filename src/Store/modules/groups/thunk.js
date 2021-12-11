import axios from "axios";
import api from "../../../Services/api"
import {GroupsList, addGroupsList, addGoalList, addActivityList} from "./actions"

export const GroupsThunk = () => (dispatch, getStore) => {
  const {user} = getStore()

    axios
      .get(`https://kenzie-habits.herokuapp.com/groups/`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      },
      })
      .then((response) => dispatch(GroupsList(response.data)))
      .catch((err) => console.log("err"))
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


