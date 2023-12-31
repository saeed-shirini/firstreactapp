import {Component} from "react";
import Users from "./component/Users.jsx";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {Route,Switch,Redirect,HashRouter} from "react-router-dom";
import SingleUser from "./component/SingleUser.jsx";
import NotFound from "./component/NotFound.jsx";
import Dashboard from "./component/Dashboard";
import Logout from "./component/Logout";
import Protect from "./component/Protect"

class App extends Component{
    state = {
        user:null
    }
    componentDidMount(){
        const userToken = localStorage.getItem("token");
        if(!userToken){
            this.setState({user:null});
            return;
        }
        this.setState({user:userToken});
    }
    render(){
        return(
            <>
                <HashRouter basename="/">
                    <Navbar user={this.state.user}/>
                    <Switch>
                        <Route path="/users/:id" component={SingleUser}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/Register" component={Register}/>
                        <Route path="/logout" component={Logout}/>
                        <Protect component={Dashboard} path="/dashboard"/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect from="/customers" to="/users"/>
                        <Route path="/" exact component={Home}/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </HashRouter>
            </>
        )
    }
}

export default App