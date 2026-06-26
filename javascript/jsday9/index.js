console.log("js day 9")

// printing cost calculator

// variables
let pageNumbers= 100;
let printType= "Double";
let pageSize = "A5"
let colorMode= "Color";
let urgency= false;

let cost= 0;
// variables constrants
let err=false;

if(pageNumbers <= 0){
    console.log("page number is invalid");
}else{
    let perPagecost=0;
    if(pageNumbers >= 1 && pageNumbers <= 5){
        console.log("Per page cost 5");
        perPagecost= 5;
    }
    else if(pageNumbers >= 11 && pageNumbers <= 50){
        console.log("Per page cost 4");
        perPagecost= 4;
    }
    else if(pageNumbers >= 51 && pageNumbers <= 200){
        console.log("Per page cost 3");
        perPagecost= 3;
    }
    else if(pageNumbers >=200){
        console.log("Per page cost 2");
        perPagecost= 2;
    }

    cost= perPagecost* pageNumbers;

    // print type check 
    if(printType == "Double"){
        console.log("10% discount on your base cost based on printType");
        cost= cost - cost*(10/100);
    }

    // page size cost
    let extrachage=0;
    if(pageSize == "A4"){
        console.log("Not extra charge");
    }
    else if(pageSize == "A3"){
        console.log("2 rs /page extra");
        extrachage= 2;
    }
    else if(pageSize == "A2"){
        console.log("5 rs /page extra");
        extrachage=5;
    }
    else{
        console.log("Invalid page type");
        err=true;
    }

    let extraCost= extrachage*pageNumbers;
    cost= cost+ extraCost;

    // color Mode extra charge

    if(colorMode == "Black and White"){
        console.log("No extra charge on black and white");
    }
    else if(colorMode == "Color"){
        console.log("extra charge on color printing 10 rs/page");
        cost = cost + 10* pageNumbers;
    }else{
        console.log("Invalid color mode");
        err=true;
    }

    if(urgency){
        console.log("25 extra chage for urgency");
        cost= cost+ cost*(25/100);
    }else{
        console.log("not extra charge");
    }
}


if(err){
    console.log("write correct values");
}
else{
    console.log("total amount = ", cost);

}