import { Switch } from "react-router-dom";
import Route from "./route";
import { ToastContainer } from "react-toastify";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import Error404 from "../Pages/Error404";

function Routes() {
  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/login"} component={Login} />
        <Route isPrivate exact path={"/dashboard"} component={Dashboard} />
        <Route isPrivate path={"/"} component={Error404}/>
      </Switch>
    </div>
  );
}
export default Routes;
