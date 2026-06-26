console.log("js day 19 -> async and await");

let firstPromise= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("async task");
        // resolve("first async task result");
        reject("error");
    },1000);

})

let secondPromise= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("async task");
        // resolve("first async task result");
        reject("error");
    },1000);
    
})


// async ans await

async function fun(){
    try{
        let result= await firstPromise;
        let secondresult= await secondPromise;
        console.log("other execution");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

console.log("other task");
fun();