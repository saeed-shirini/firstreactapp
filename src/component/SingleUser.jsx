import { useState,useEffect } from "react";
import axios from "axios";

const SingleUser = (props) => {
    let [user,setuser] = useState({})
    useEffect(async()=>{
        let response = await axios.get(`https://reqres.in/api/users/${props.match.params.id}`);
        setuser(response.data.data);
    },[])
    return(
        <>
            <img src={user.avatar} alt="" style={{borderRadius:"50%",width:"100px"}}/>
            <h4>
                {user.first_name} {user.last_name}
            </h4>
            <h5>{user.email}</h5>
        </>
    )
}

export default SingleUser