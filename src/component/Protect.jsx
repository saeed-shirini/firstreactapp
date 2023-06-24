import {Route,Redirect} from "react-router-dom"

const Protect = ({component:Component,...rest}) => {
    const userToken = localStorage.getItem("token");
    return(
        <Route {...rest} render={(props)=>{
            return userToken ? <Component {...props}/> : <Redirect to="/login"/>
        }}/>
    )
}
export default Protect;