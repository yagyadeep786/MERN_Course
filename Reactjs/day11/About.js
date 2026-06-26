import {Link,useNavigate} from "react-router"


function About(){

    let navigate= useNavigate();

    function handler(){
        navigate("/dashboard");
    }
    return (

        <>
        
        <h2>This is About Page</h2>
        <Link to="/">Go to home</Link>

        <button onClick={handler}>Go to Dashboard</button>

        </>

    )
}

export default About;