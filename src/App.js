import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./Home";

const  App = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/signin" component={SignIn} />  {/*Path definition */}
            <Route path="/home" component={Home} />     {/*Path definition */}
            <Redirect from="/" to="/home"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;