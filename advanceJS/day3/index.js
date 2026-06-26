console.log("Lec->fetch");

// https://api.openweathermap.org/data/2.5/weather?q=Bhopal&appid=0e1453f0d99c3181ca452106b65cfdbb&units=metric


// then catch (promise);


// fetch("https://api.openweathermap.org/data/2.5/weather?q=Bhopal&appid=0e1453f0d99c3181ca452106b65cfdbb&units=metric")
// .then((res)=> {
//     return res.json();
// }).then((data)=>{
//     console.log(data);
//     let ele= document.getElementById("data");
//     ele.textContent= data.weather[0].description;
// })


// async and await

async function weatherAPI(){
    try{

        let res= await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bhopal&appid=0e1453f0d99c3181ca452106b65cfdbb&units=metric");
    
        let data= await res.json();
    
        console.log(data);
    }
    catch(err){
        console.log(err);
    }

}

weatherAPI();