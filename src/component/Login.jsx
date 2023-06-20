import { Component } from "react";
import axios from "axios";

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
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onChange={this.handleChange} value={email} type="text" name="email" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onChange={this.handleChange} value={password} type="password" name="password" className="form-control" id="password" />
                        </div>
                    </div>
                    <button className="btn btn-primary">login</button>
                </form>
            </div>
        )
    }
}

export default Login