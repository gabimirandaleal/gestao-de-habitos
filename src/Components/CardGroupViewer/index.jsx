import { HiUserGroup } from "react-icons/hi";
import CardGoals from "../CardGoals";
import CardActivity from "../CardActivity";
import { Container, Title, Description, Div } from "./style";
import imgactivities from "../../assets/img/addActitivities.png";
import { useState } from "react";
import PopUpCreateActivity from "../PopUpCreateActivity";
import PopUpCreateGoal from "../PopUpCreateGoal";
import { useSelector } from "react-redux";
import groupGoalsImg from "../../assets/img/groupGoals.png";

const GroupViewer = ({ group }) => {
  const [popupCreateActivities, setPopupCreateActivities] = useState(false);
  const [popupCreateGoal, setPopupCreateGoal] = useState(false);
  const activiesGroup = useSelector(
    (state) => state.group.find((item) => item.id === group.id).activities
  );

  const goalsGroup = useSelector(
    (state) => state.group.find((item) => item.id === group.id).goals
  );

  return (
    <Container>
      {popupCreateActivities && (
        <PopUpCreateActivity
          idGroup={group.id}
          setPopup={setPopupCreateActivities}
        />
      )}
      {popupCreateGoal && (
        <PopUpCreateGoal idGroup={group.id} setPopup={setPopupCreateGoal} />
      )}
      <Title>
        <h1>
          <HiUserGroup />
          {group.name}
        </h1>
        <span>
          {group.users_on_group.length > 1 ? (
            <span>{group.users_on_group.length} membros</span>
          ) : (
            <span>{group.users_on_group.length} membro</span>
          )}
        </span>
      </Title>
      <Description>
        <h3>Categoria: {group.category}</h3>
        <span>{group.description}</span>
        <br />
        <span>grupo criado por: {group.creator.username}</span>
      </Description>
      <div id="goals">
        <h2>
          Metas do grupo
          <img
            src={groupGoalsImg}
            onClick={() => setPopupCreateGoal(true)}
            alt="groupGoals"
          />
        </h2>
        <Div>
          {goalsGroup &&
            goalsGroup.map((item) => (
              <CardGoals
                key={item.id}
                item={item}
                group={group}
                name={group.name}
              ></CardGoals>
            ))}
        </Div>
        <div className="cardHolder"></div>
      </div>
      <div id="activities">
        <h2>
          Atividades do grupo
          <img
            onClick={() => setPopupCreateActivities(true)}
            src={imgactivities}
            alt=""
          />
        </h2>
        <Div>
          {activiesGroup &&
            activiesGroup.map((item) => (
              <CardActivity
                key={item.id}
                item={item}
                group={group}
                name={group.name}
              ></CardActivity>
            ))}
        </Div>

        <div className="cardHolder"></div>
      </div>
    </Container>
  );
};

export default GroupViewer;
