import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useSelector } from "react-redux";

const Route =({isPrivate = false, component: Component, ...rest}) => {
    
    const { token } = useSelector(state => state.user)
    console.log(token)
    return (
        <ReactDOMRoute 
            {...rest} 
            render={() => {
                return isPrivate === !!token ? <Component/> : <Redirect to={isPrivate ? "/" : "/dashboard"}/>
            }}
        />

    )
}

export default Route;