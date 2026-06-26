import {useParams} from "react-router"

function Product(){
    let {id}= useParams();
    return (
        <h2>This is Product Page {id}</h2>
    )
}

export default Product;