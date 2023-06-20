import { Component,createRef } from "react";
import axios from "axios";

class Login extends Component {
    email = createRef();
    password = createRef();

    handleSubmit = async(e) => {
        e.preventDefault()
        const account = {email:this.email.current.value,password:this.password.current.value}
        if(account.email && account.password){
            let response = await axios.post("https://reqres.in/api/login",account);
            console.log(response)
        }
    }
    render() {
        return (
            <div className="container mt-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input ref={this.email} type="text" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input ref={this.password} type="password" className="form-control" id="password" />
                        </div>
                    </div>
                    <button className="btn btn-primary">login</button>
                </form>
            </div>
        )
    }
}

export default Login