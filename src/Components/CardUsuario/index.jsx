import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import UserImg from '../../assets/img/userAvatar.png'
import { BsPencil } from "react-icons/bs";
import PopUpEditUser from "../PopUpEditUser"
import { searchUserThunk } from '../../Store/modules/user/thunk';
import { useDispatch, useSelector } from 'react-redux';

const CardUsuario = () => {
  
  const user = useSelector((state) => state.user.data);
  const [popup, setPopup] = useState(false)
  const [token] = useState(
    JSON.parse(localStorage.getItem("@GestaoHabitos:token")) || ""
  );
  const dispatch = useDispatch();
  const userID = jwt_decode(token).user_id

  useEffect(() => {
    dispatch(searchUserThunk(userID))
  }, [popup]);

  return (
    <>
      
      <img src={UserImg} alt=''/>
          <ul>
            <li><span>{user && user.username}</span> <BsPencil className="cursor" onClick={() => setPopup(true)}/></li>
            <li>{user && user.email}</li>
          </ul>
          {popup && <PopUpEditUser user={user} setPopup={setPopup}></PopUpEditUser>}
    </>
  )
}
export default CardUsuario