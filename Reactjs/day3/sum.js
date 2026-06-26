
// type 1 ( named export -> export object);

// export function add(a,b){
//     return a+b;
// }

// export function sub(a,b){
//     return a-b;
// }

// {
//     add:()=>{},sub:()=>{}
// }


function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

let name= "yagya";

export {add,sub};

export default name;
