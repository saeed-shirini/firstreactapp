import { Component } from "react";

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className="container mt-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" />
                        </div>
                    </div>
                    <button className="btn btn-primary">login</button>
                </form>
            </div>
        )
    }
}

export default Login