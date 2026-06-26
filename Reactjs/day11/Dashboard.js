import {Outlet,Link,useLocation,useNavigate} from "react-router"

function Dashboard(){
    let location= useLocation();
    let navigate= useNavigate();
    return (
        <>
        <h2>This is Dashboard Page  {location.pathname}</h2>
        <button onClick={()=> navigate(-1)}>Back</button>
        <Link to="/dashboard/payment">Payment</Link> 
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>

        <Outlet></Outlet>
        </>
    )
}

export default Dashboard;