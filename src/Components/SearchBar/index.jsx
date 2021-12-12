import Button from "../Button"
import { Conteiner, Input } from "./style"

const SearchBar = ({onclick,  searchBar, filtrarItens}) => {

    return(
        <Conteiner>
            <Input placeholder="Buscar..."  value={searchBar} onChange={(event) => filtrarItens(event.target.value)}/>
            <Button onClick={onclick} text={"Buscar"}/>
        </Conteiner>
    )
}

export default SearchBar;