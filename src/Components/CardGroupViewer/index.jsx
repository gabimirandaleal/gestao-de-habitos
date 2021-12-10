import { FaMedal } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { Container, Title, Description } from "./style";
const GroupViewer = ({ title, text, category, username, qtd }) => {
  return (
    <Container>
      <Title>
        <h1>
          <HiUserGroup />
          Grupo de {title}
        </h1>
        <span>{qtd} membros</span>
      </Title>
      <Description>
        <h3>Categoria:{category}</h3>
        <span>{text}</span>
        <br />
        <span>grupo criado por:{username}</span>
      </Description>
      <div id="goals">
        <h2>
          Metas do grupo <FaMedal />
        </h2>
        <div className="cardHolder"></div>
      </div>
      <div id="activities">
        <h2>
          Atividades do grupo <HiOutlineClipboardList />
        </h2>
        <div className="cardHolder"></div>
      </div>
    </Container>
  );
};

export default GroupViewer;
