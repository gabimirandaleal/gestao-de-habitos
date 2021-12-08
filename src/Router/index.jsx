import {Switch} from "react-router-dom" 
import Route from "./route"
import { ToastContainer } from 'react-toastify';
import Home from "../Pages/Home";


function Routes(){
    return(
        <div>
            <ToastContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
            </Switch>
        </div>
    )
}

export default Routes;