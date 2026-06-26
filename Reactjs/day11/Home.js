import {Link} from "react-router"

function Home(){
    return (
        <>
        <h2>This is Home Page</h2>
        <Link to="/about">Go to About</Link>
        
        </>
    )
}

export default Home;