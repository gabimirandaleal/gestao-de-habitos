import api from "../../../Services/api";
import {
  listGroup,
  GroupsList,
  addGroupsList,
  deleteGoalList,
  addGoalList,
  deleteActivityList,
  addActivityList,
  editGoalList,
  editGroupsList,
  editActivityList,
  unsubscribeGroup,
  subscribeGroup,
  showMore,
  deleteGroup,
} from "./actions";
import axios from "axios";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const searchGroupThunk = (setNextPage) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .get(`groups/?page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      setNextPage(response.data.next);
      dispatch(GroupsList(response.data.results));
    })
    .catch((err) => console.log(err));
};

export const searchGroupSubscriptionsThunk = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .get(`/groups/subscriptions/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      dispatch(listGroup(response.data));
    })
    .catch((err) => console.log(err));
};

export const addSubPageThunk =
  (nextPreviousPage, groups, setNextPage) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    if (nextPreviousPage != null) {
      axios
        .get(nextPreviousPage, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setNextPage(response.data.next);
          dispatch(showMore(response.data.results, groups));
        })
        .catch((err) => console.log(err));
    }
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

export const addGroupsThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .post(`groups/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success("Grupo criado");
      dispatch(addGroupsList(response.data));
    })
    .catch((err) => toast.error("Erro ao criar o grupo"));
};

export const addGoalThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .post(`goals/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(addGoalList(response.data)))
    .catch((err) => console.log(err));
};

export const addActivityThunk = (data) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .post(`activities/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(addActivityList(response.data)))
    .catch((err) => console.log(err));
};

export const editGroupThunk = (data, idGroup, group) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  const userID = jwt_decode(token).user_id;
  if (group.creator === userID || group.creator.id === userID) {
    api
      .patch(`groups/${idGroup}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success(`Grupo alterado com sucesso`);
        dispatch(editGroupsList(response.data));
      })
      .catch((err) => toast.error("Você não pode editar esse grupo"));
  } else {
    toast.error("Não mexa no que não é seu");
  }
};

export const editGoalThunk = (data, idGoal, group) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  const userID = jwt_decode(token).user_id;
  if (group.creator === userID || group.creator.id === userID) {
    api
      .patch(`goals/${idGoal}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(editGoalList(response.data)))
      .catch((err) => console.log(err));
  } else {
    toast.error("Não mexa no que não é seu");
  }
};

export const editActivityThunk = (data, idActivity, group) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  const userID = jwt_decode(token).user_id;
  if (group.creator === userID || group.creator.id === userID) {
    api
      .patch(`/activities/${idActivity}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Você atualizou sua atividade");
        dispatch(editActivityList(response.data));
      })
      .catch((err) => toast.error("Não toque no que não é seu"));
  } else {
    toast.error("Não mexa no que não é seu");
  }
};

export const deleteGoalThunk = (idGoal, item, group) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  const userID = jwt_decode(token).user_id;
  if (group.creator === userID || group.creator.id === userID) {
    api
      .delete(`goals/${idGoal}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Meta removida com sucesso");
        dispatch(deleteGoalList(item));
      })
      .catch((err) => toast.error("Erro ao remover meta"));
  } else {
    toast.error("Não mexa no que não é seu");
  }
};

export const deleteActivityThunk = (idActivity, item, group) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  const userID = jwt_decode(token).user_id;
  if (group.creator === userID || group.creator.id === userID) {
    api
      .delete(`activities/${idActivity}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Atividade removida com sucesso");
        dispatch(deleteActivityList(item));
      })
      .catch((err) => toast.error("Erro ao remover atividade"));
  } else {
    toast.error("Não mexa no que não é seu");
  }
};

export const subscribeGroupThunk = (groupId, groups, userID) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  api
    .post(`groups/${groupId}/subscribe/`, groupId, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      toast.success(`Inscrito com sucesso`);
      dispatch(subscribeGroup(groups, groupId, userID, response.data));
    })
    .catch((err) => console.log(err));
};

export const deleteGroupThunk = (id, item) => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
  const userID = jwt_decode(token).user_id;
  if (item.creator === userID || item.creator.id === userID) {
    api
      .delete(`groups/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        dispatch(deleteGroup(item));
        toast.success("Você removeu esse grupo");
      })
      .catch((_) => {
        toast.error("Erro ao remover esse grupo");
      });
  } else {
    toast.error("Não mexa no que não é seu");
  }
};

export const unsubscribeGroupThunk =
  (groupId, groups, userID) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    api
      .delete(`groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        dispatch(unsubscribeGroup(groups, groupId, userID));
        toast.success("Você se desinscreveu do grupo");
      })
      .catch((err) => {
        toast.error("Erro ao desinscrever-se do grupo");
      });
  };

export const plusProgressGoalThunk =
  (idGoal, progress, group) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    const userID = jwt_decode(token).user_id;
    if (group.creator === userID || group.creator.id === userID) {
      if (progress < 100 && progress === 90) {
        const data = { achieved: true, how_much_achieved: 100 };
        api
          .patch(`goals/${idGoal}/`, data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => dispatch(editGoalList(response.data)));
      } else if (progress < 100) {
        const data = { how_much_achieved: Number(progress) + 10 };
        api
          .patch(`goals/${idGoal}/`, data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => dispatch(editGoalList(response.data)))
          .catch((err) => console.log("oi"));
      }
    } else {
      toast.error("Não mexa no que não é seu");
    }
  };

export const subtractProgressGoalThunk =
  (idGoal, progress, group) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("@GestaoHabitos:token"));
    const userID = jwt_decode(token).user_id;
    if (group.creator === userID || group.creator.id === userID) {
      if (progress > 0) {
        const data = { achieved: false, how_much_achieved: progress - 10 };
        api
          .patch(`goals/${idGoal}/`, data, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            dispatch(editGoalList(response.data));
          })
          .catch((err) => console.log(err));
      }
    } else {
      toast.error("Não mexa no que não é seu");
    }
  };
