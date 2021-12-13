import { FaMedal } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import CardActivity from "../CardActivity";
import { Container, Title, Description, Div } from "./style";
import imgactivities from "../../assets/img/addActitivities.png"
import { useEffect, useState } from "react";
import PopUpCreateActivity from "../PopUpCreateActivity"
import PopUpEditActivity from "../PopUpEditActivity"
import { useSelector } from "react-redux";
const GroupViewer = ({group}) => {
  const [popupCreateActivities, setPopupCreateActivities] = useState(false);
  const activiesGroup = useSelector((state) => state.group.find((item) => item.id === group.id).activities)
  const [popupEditActivities, setPopupEditActivities] = useState(false);
  const [idActivity, setIdActivity] = useState(0);

 
  return (
    <Container>
      {popupCreateActivities && <PopUpCreateActivity idGroup={group.id} setPopup={setPopupCreateActivities}/>}
      {popupEditActivities && <PopUpEditActivity idActivity={idActivity} idGroup={group.id} setPopup={setPopupEditActivities}/>}
      <Title>
        <h1>
          <HiUserGroup />
          {group.name}
        </h1>
        <span>{(group.users_on_group).length} membros</span>
      </Title>
      <Description>
        <h3>Categoria:{group.category}</h3>
        <span>grupo criado por:{group.creator.username}</span>
      </Description>
      <div id="goals">
        <h2>
          Metas do grupo <FaMedal />
          
        </h2>
        <div className="cardHolder"></div>
      </div>
      <div id="activities">
        <h2>
          Atividades do grupo <img onClick={() => setPopupCreateActivities(true)} src={imgactivities} alt="" />
        </h2> 
          <Div>
          {
              activiesGroup && activiesGroup.map((item) => (
                <CardActivity key={item.id} setIdActivity={setIdActivity} setPopup={setPopupEditActivities} item={item} name={group.name}></CardActivity>
              ))
          }
          </Div>
        
        <div className="cardHolder"></div>
      </div>
    </Container>
  );
};

export default GroupViewer;
