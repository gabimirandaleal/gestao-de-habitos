import { Switch } from "react-router-dom";
import Route from "./route";
import { ToastContainer } from "react-toastify";
import Home from "../Pages/Home";
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Dashboard from "../Pages/Dashboard";

function Routes(){
    return(
        <div>
            <ToastContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/signup"} component={Signup}/>
                <Route path={"/login"} component={Login}/>
                {/* <Route path={"/groups"} component={Groups}/> */}
                <Route isPrivate path={"/dashboard"} component={Dashboard}/>
            </Switch>
        </div>
    )
}

export default Routes;
