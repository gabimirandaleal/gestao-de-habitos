import { HeaderDashboard, ButtonsDashboard, UserBox, Container } from "./style"
import { useState } from "react"
import Header from "../../Components/Header"
import { useDispatch } from "react-redux";
import {logOutThunk} from "../../Store/modules/user/thunk"
import { FiLogOut } from "react-icons/fi";

import GroupsImg from '../../assets/img/groups.png'
import HabitsImg from '../../assets/img/habits.png'
import CardUsuario from "../../Components/CardUsuario";
import Habits from "../../Components/Habits";

import Groups from "../Groups";

const Dashboard = () => {
  
  const [isHabits,setIsHabits] = useState(false)
  const [isGroup,setIsGroup] = useState(true)
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
          
          <CardUsuario/>
          
        </UserBox>

        <FiLogOut onClick={logout}/>
        
      </HeaderDashboard>
      <Container>
            {isHabits && <Habits></Habits> }
            {isGroup && <Groups/> }
      </Container>
      
    </>

  )
}
export default Dashboard;