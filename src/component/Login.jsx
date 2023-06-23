import { Component } from "react";
import Input from "./Input";
import * as yup from "yup";
import axios from "axios";

class Login extends Component {
    state = {
        account: {
            email: "",
            password: ""
        },
        errors: [],
        sending:false
    }
    validate = async () => {
        const { email, password } = this.state.account;
        let userSchema = yup.object().shape({
            email: yup.string().required("email filed is required").email("this filed must be email format"),
            password: yup.string().required("password filed is required").min(5, "password field dont less 5 char")
        })
        try {
            const result = await userSchema.validate({ email, password }, { abortEarly: false });
            return result;
        } catch (err) {
            this.setState({ errors: err.errors,sending:false })
        }
    }
    handleChange = (e) => {
        let account = { ...this.state.account };
        let { name, value } = e.target;
        account[name] = value;
        this.setState({ account })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ errors: []});
        const validate = await this.validate();
        if (validate) {
            try {
                this.setState({sending:true })
                const response = await axios.post("https://reqres.in/api/login", validate);
                localStorage.setItem("token",response.data.token);
                window.location = "/dashboard"
                this.setState({sending:false});
            } catch (err) {
                this.setState({ errors: ["email or password is invalid"],sending:false });
            }
        }
    }
    render() {
        const { email, password } = this.state.account;
        return (
            <div className="container mt-3">
                {this.state.errors.length !== 0 && (
                    <ul>
                        {this.state.errors.map((error, index) => <li key={index} className="alert alert-danger" style={{listStyle:"none"}}>{error}</li>
                        )}
                    </ul>)
                }
                <form onSubmit={this.handleSubmit}>
                    <Input name="email" onChange={this.handleChange} value={email} />
                    <Input name="password" onChange={this.handleChange} value={password} />
                    <button disabled={this.state.sending} className="btn btn-primary">login</button>
                </form>
            </div>
        )
    }
}

export default Login