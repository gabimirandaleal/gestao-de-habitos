import axios from "axios";
import {GroupsList} from "./actions"

const GroupsThunk = () => (dispatch, getStore) => {

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

export default GroupsThunk;


