console.log("day2");


// let arr= [1,2,3,4,5];

// let ans= arr.map((ele,idx)=>{
//     console.log(ele);
//     return ele*2;
// })


// console.log(ans);

// let ans= arr.filter((ele)=>{
//     if(ele != 3){
//         return ele;
//     }
// })

// let sum= arr.reduce((ele,sum)=>{
//     return sum+ ele;
// })

// console.log(sum);


let arr2= [5,3,7,5,9];

// arr2.sort((first,second)=>{
//     return first-second;
// })

arr2.sort((first,second)=>{
    return second-first;
})

console.log(arr2);
