console.log("day1");

// let arr1= [1,2,3];

// let arr2= [...arr1,4];

// console.log(arr2);

// let obj1= {
//     a:1,
//     b:2,
//     c:3
// };

// let obj2= {...obj1,name:"yagya"};

// console.log(obj2);

// function sum(...nums){
//    console.log(nums);
// }

// sum(...arr1);

// console.log(ans);


let arr1 = [1,2,3,4];

let [a,b ,...rest]= arr1;

console.log(b);
console.log(rest);

