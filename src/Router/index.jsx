import {Switch} from "react-router-dom" 
import Route from "./route"
import { ToastContainer } from 'react-toastify';
import Home from "../Pages/Home";
import Login from "../Pages/Login"


function Routes(){
    return(
        <div>
            <ToastContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/login"} component={Login}/>
            </Switch>
        </div>
    )
}

export default Routes;