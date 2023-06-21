import { Component } from "react";
import Input from "./Input";

class Login extends Component {
    state = {
        account: {
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        let account = {...this.state.account};
        let {name,value} = e.target;
        account[name] = value;
        this.setState({account})
    }
    handleSubmit = async (e) => {
        e.preventDefault()
    }
    render() {
        const {email,password} = this.state.account
        return (
            <div className="container mt-3">
                <form onSubmit={this.handleSubmit}>
                    <Input name="email" onChange={this.handleChange} value={email}/>
                    <Input name="password" onChange={this.handleChange} value={password}/>
                    <button className="btn btn-primary">login</button>
                </form>
            </div>
        )
    }
}

export default Login