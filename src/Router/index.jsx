import { Switch } from "react-router-dom";
import Route from "./route";
import { ToastContainer } from "react-toastify";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";

function Routes() {
  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/signup"} component={Signup} />
      </Switch>
    </div>
  );
}

export default Routes;
