import { useState,useEffect } from "react";
import axios from "axios";
import queryString from 'query-string';

const SingleUser = (props) => {
    const parse = queryString.parse(props.location.search)
    let [user,setUser] = useState({});
    useEffect(async()=>{
        let response = await axios.get(`https://reqres.in/api/users/${props.match.params.id}`);
        setUser(response.data.data);
    },[]);
    return(
        <>
            <img src={user.avatar} alt="" style={{borderRadius:"50%",width:"100px"}}/>
            <h4>
                {user.first_name} {user.last_name}
            </h4>
            <h5>{user.email}</h5>
            <button onClick={()=>props.history.push("/users")} type="button" className="btn btn-info">users</button>
        </>
    )
}

export default SingleUser