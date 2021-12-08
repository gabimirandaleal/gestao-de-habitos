import {ButtonStyled} from "./style"

const Button = ({children, onclick, color, type}) => {

    return(
        <ButtonStyled onClick={onclick} color={color} type={type}>{children}</ButtonStyled>
    )
}
export default Button;