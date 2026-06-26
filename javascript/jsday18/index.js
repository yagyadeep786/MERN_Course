console.log("js day 18 => promises");

// create promise

let firstPromise= new Promise((resolve,reject)=>{

    // async task 

    setTimeout(()=>{
        console.log("async task");
        let result= "async task result";
        resolve(result);

        // reject("Error: somthing is wrong");

    },1000);

})

firstPromise.then((data)=>{
    console.log("handling resolve: ",data);
    return "first step result";
})
.then((data)=>{
    console.log("second step: ",data);
})

.catch((err)=>{
    console.log(err);
})

console.log("other execution");
