import { Div, H1, Leaf, SpanLogo } from "./style";
import LeafLogo from "../../assets/img/leaf.png";

const Header = () => {
  return (
    <Div>
      <H1>Re</H1>
      <Leaf src={LeafLogo} alt="Leaf" />
      <SpanLogo>leaf</SpanLogo>
    </Div>
  );
};

export default Header;
