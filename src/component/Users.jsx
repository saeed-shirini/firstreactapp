import {Component} from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadungUsers.jsx";

class Users extends Component{
    state={
        users:[],
        isLoading:true
    }
    async componentDidMount(){
        let response = await axios.get("https://reqres.in/api/users?page=1");
        this.setState({users:response.data.data,isLoading:false})
    }
    render(){
        return(
            <div className="users">
                <button onClick={this.handleCreate} type="button" className="btn btn-info btn-lg">create</button>
                
                <div className="container">
                    <div className="row text-center m-auto">
                    {this.state.isLoading ? <LoadingUsers/> : (
                        this.state.users.map((user,index)=>{
                            return (
                                <div className="col-md-4 p-5" key={index}>
                                    <img src={user.avatar} alt="" style={{borderRadius:"50%",width:"100px"}}/>
                                    <h4>
                                        {user.first_name} {user.last_name}
                                    </h4>
                                    <h5>{user.email}</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button onClick={()=>this.handleUpdate(user)} type="button" className="btn btn-info">update</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button onClick={()=>this.handleDelete(user)} type="button" className="btn btn-danger">delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        )
    }
    handleCreate = async() => {
        let newUser = { 
            first_name : "saeed",
            last_name : "shirini",
            email : "saeedshirini@gmail.com",
            avatar : "https://reqres.in/img/faces/7-image.jpg"
        }
        let response = await axios.post("https://reqres.in/api/users",newUser);
        this.setState({users:[...this.state.users,response.data]})
    }
    handleUpdate = async(user) => {
        user.first_name = "ali"
        let response = await axios.put(`https://reqres.in/api/users/${user.id}`,user);
        let updatedUser = [...this.state.users];
        let userIndex = updatedUser.indexOf(user);
        updatedUser[userIndex] = {...user};
        this.setState({users:updatedUser})
    }
    handleDelete = async(user) => {
        let response = await axios.delete(`https://reqres.in/api/users/${user.id}`)
        let newUsers = this.state.users.filter(u => u.id !== user.id);
        this.setState({users:newUsers})
    }
}

export default Users