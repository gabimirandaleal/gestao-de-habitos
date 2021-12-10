import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";

import api from '../../Services/api.js'

import UserImg from '../../assets/img/userAvatar.png'
import { BsPencil } from "react-icons/bs";


const CardUsuario = () => {
  
  const [user, setUser] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@GestaoHabitos:token")) || ""
  );

  const userID = jwt_decode(token).user_id

  useEffect(() => {
    api
      .get(`/users/${userID}/`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("Ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <img src={UserImg} alt=''/>
          <ul>
            <li><span>{user.username}</span> <BsPencil/></li>
            <li>{user.email}</li>
          </ul>
    </>
  )
}
export default CardUsuario