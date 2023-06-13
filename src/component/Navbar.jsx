import {Component} from "react"
import {Link} from "react-router-dom"

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">register</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;