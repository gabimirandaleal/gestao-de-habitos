import { ButtonStyled } from "./style";

const Button = ({ onclick, color, type, text }) => {

  return (
    <ButtonStyled onClick={onclick} color={color} type={type}>
      {text}
    </ButtonStyled>
  );
};
export default Button;
