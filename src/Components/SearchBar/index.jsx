import Button from "../Button"
import { Conteiner, Input } from "./style"

const SearchBar = ({onclick, onchange}) => {

    return(
        <Conteiner>
            <Input placeholder="Buscar..." onChange={onchange}/>
            <Button onclick={onclick} text={"Buscar"}/>
        </Conteiner>
    )
}

export default SearchBar;