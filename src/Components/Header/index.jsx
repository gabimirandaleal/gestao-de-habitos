import { Div, H1, Leaf, SpanLogo } from "./style";
import LeafLogo from "../../assets/img/leaf.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <Div className="header" onClick={() => history.push("/")}>
      <H1>Re</H1>
      <Leaf src={LeafLogo} alt="Leaf" />
      <SpanLogo>leaf</SpanLogo>
    </Div>
  );
};

export default Header;
