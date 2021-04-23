import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./Home";
import SignUp from "./pages/SignUp";

const  App = () => {
    return (
        <BrowserRouter>
            <Switch>
            {/*<Route path="/signup" component={SignUp} />  */}{/*Path definition */}
            {/*<Route path="/signin" component={SignIn} /> */} {/*Path definition */}
            <Route path="/home" component={Home} />     {/*Path definition */}
            {/*<Route path="/modal" component={Modal}/> */}
            <Redirect from="/" to="/home"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;