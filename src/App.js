import {Component} from "react";
import Users from "./component/Users.jsx";
import {Route} from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {Switch} from "react-router-dom"

class App extends Component{
    render(){
        return(
            <>
                <Navbar/>
                <Switch>
                    <Route path="/users" component={Users}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/Register" component={Register}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </>
        )
    }
}

export default App