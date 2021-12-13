import {
  Container,
  Card,
  Cards,
  Specs,
  Title,
  Empty,
  Upside,
  Downside,
  Close,
  Background,
  DivName,
  Div
} from "./style";
import { BsPencil } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import medal from "../../assets/img/medal.png"

  const CardActivity = ({item, name, setPopup, setIdActivity}) => {

  const data = () => {
    const split = item.realization_time.split("T");
    const date = split[0].split("-");
    return ` ${date[2]}/${date[1]}/${date[0]}`
  }

  const edit = (id) =>{
    setPopup(true)
    setIdActivity(id)
  }

  return (
    <Cards>
      <Card>
        <Title >
          <Upside>
            <h3>
              {(item.title).length > 15 ? `${item.title.substring(0,15)}...`:item.title}
            </h3>
          </Upside>

          <Downside>
            <BsPencil size="19px" onClick={() => edit(item.id)}/>
            <Background>
              <img src={medal} alt="habits" />
            </Background>
            <IoCloseCircle size="20px" />
          </Downside>
        </Title>
        <Specs>
          <div>Realização: {data()}</div>
          <div>Grupo: {name}</div>
        </Specs>
      </Card>
    </Cards>
  );
};

export default CardActivity;
