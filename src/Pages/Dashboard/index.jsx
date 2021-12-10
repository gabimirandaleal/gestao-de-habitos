import { HeaderDashboard, ButtonsDashboard, UserBox, Container } from "./style"
import { useState } from "react"
import Header from "../../Components/Header"

import { useDispatch } from "react-redux";
import {logOutThunk} from "../../Store/modules/user/thunk"
import { FiLogOut } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";

import GroupsImg from '../../assets/img/groups.png'
import HabitsImg from '../../assets/img/habits.png'
import UserImg from '../../assets/img/userAvatar.png'


const Dashboard = () => {
  
  const [isHabits,setIsHabits] = useState(false)
  const [isGroup,setIsGroup] = useState(false)
  const dispatch = useDispatch()

  const groups = () => {
    setIsGroup(true)
    setIsHabits(false)
  } 

  const habits = () => {
    setIsGroup(false)
    setIsHabits(true)
    } 
  
  const logout = () => {
    dispatch(logOutThunk())
  }

  return (

    <>
      <HeaderDashboard >
        <Header/>

        
        <ButtonsDashboard>
          <ul>
            <li onClick={habits}><img src={HabitsImg} alt=''/><span>Seus Hábitos</span></li>
            <li onClick={groups}><img src={GroupsImg} alt=''/><span>Seus Grupos</span></li>
          </ul>
        </ButtonsDashboard>
        <UserBox>
          <img src={UserImg} alt=''/>
          <ul>
            <li><span>Username</span> <BsPencil/></li>
            <li>username@teste.com</li>
          </ul>
          
        </UserBox>

        <FiLogOut onClick={logout}/>
        
      </HeaderDashboard>
      <Container>
            {isHabits && <>Hábitos</> }
            {isGroup && <>Grupos</> }
      </Container>
    </>

  )
}
export default Dashboard;