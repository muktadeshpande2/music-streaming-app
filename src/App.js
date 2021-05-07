import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";


const  App = () => {
    return (
        <BrowserRouter>
            <Switch>
            {/*<Route path="/signup" component={SignUp} />  */}{/*Path definition */}
            {/*<Route path="/signin" component={SignIn} /> */} {/*Path definition */}
            <Route path="/home" component={Home} />     {/*Path definition */}
            <Redirect from="/" to="/home"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;