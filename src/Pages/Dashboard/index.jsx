import { HeaderDashboard, ButtonsDashboard, UserBox, Container } from "./style"
import { useState } from "react"
import Header from "../../Components/Header"

import GroupsImg from '../../assets/img/groups.png'
import HabitsImg from '../../assets/img/habits.png'
import UserImg from '../../assets/img/userAvatar.png'
import Pencil from '../../assets/img/pencil.png'

const Dashboard = () => {
  
  const [isHabits,setIsHabits] = useState(false)
  const [isGroup,setIsGroup] = useState(false)

  const groups = () => {
  setIsGroup(true)
  setIsHabits(false)

  } 

  const habits = () => {
    setIsGroup(false)
    setIsHabits(true)
  
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
            <li>Username <img src={Pencil} alt=''/></li>
            <li>teste@teste.com</li>
          </ul>
          
        </UserBox>
      </HeaderDashboard>
      <Container>
            {isHabits && <>Hábitos</>}
      
            {isGroup && <>Grupos</>}
      </Container>
    </>

  )
}
export default Dashboard;