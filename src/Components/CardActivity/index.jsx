import { Conteiner, ContentHeader, ContentDescription } from "./style";
import { BsPencil } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import ClipboardImg from "../../assets/Icons/clipboard.svg";

const CardActivity = () => {
  return (
    <Conteiner>
      <ContentHeader>
        <span className="prancheta">
          <BsPencil />
        </span>
        <h2> Comer fruta </h2>
        <span className="removed">
          <IoCloseCircle />
        </span>
        <figure>
          <img src={ClipboardImg} alt="ClipboardImg" />
        </figure>
      </ContentHeader>

      <ContentDescription>
        <span>Data da atividade: </span>
        <span className="dateOfActividie">07/02/2021 às 15:30</span>
        <span className="nameOfGroup">Nome do grupo: Merinho</span>
      </ContentDescription>
    </Conteiner>
  );
};

export default CardActivity;
