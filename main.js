//================
//random dog generator
//================

//queries 
const button = document.querySelector('.btn')
const imgSrc = document.querySelector("#fire")

const URL = 'https://dog.ceo/api/breeds/image/random';

//update img add event listener
button.addEventListener("click", function (updateImg){
    //step 1: send a get req to the api url
    fetch(URL)
    
    //step2: extract JSOm from the URL RESponse
    .then(function(rawResponse) {
        console.log("response:", rawResponse)
        return rawResponse.json()
    })
    //Step 3: Process JSON to replace img src with img message.
    .then (function (updateImg){
        imgSrc.src = updateImg.message;
        console.log(updateImg);
    })    
})

//================
//weather app 
//================

// query
const wButton = document.querySelector('.btn1');
const textInput = document.querySelector("[type = 'text']")  
const ImageSrc = document.querySelector("#weather")
const temp = document.querySelector("#Temp");
const wind = document.querySelector("#wind");
const DD = document.querySelector("#DD");


wButton.addEventListener("click", function(){
    const city = textInput.value
    console.log(city)
    const aURL = `https://goweather.herokuapp.com/weather/${city}`;
    //step 1: send a get req to the api url
    fetch(aURL)

        //step2: extract JSOm from the URL RESponse
    .then(function(rawResponse) {
        console.log("response:", rawResponse)
        return rawResponse.json()
    })

    //Step 3: Process JSON to replace img src with img message.
    .then (function (city){
        console.log(city)
        // const temp = document.querySelector("#Temp")
        temp.innerHTML = "Temperature: " + city.temperature
        wind.innerHTML = "Wind: " + city.wind
        DD.innerHTML = "Data Description: " + city.description
        if (city.temperature < 20){
            ImageSrc = "/images/sunny.jpeg"
            console.log(ImageSrc)
        }
    })    
})

//================
//Rick and Morty generator
//================

//queries 
const buttonRM = document.querySelector('.btn2')
const photo = document.querySelector("#photo")
const FF1 = document.querySelector("#fun1")
const FF2 = document.querySelector("#fun2")
const FF3 = document.querySelector("#fun3")

//update img add event listener
buttonRM.addEventListener("click", function (updateImg){
    //step 1: send a get req to the api url
    const URL =  "https://rickandmortyapi.com/api/character"
    fetch(URL)
    
    //step2: extract JSOm from the URL RESponse
    .then(function(rawResponse) {
        console.log("response:", rawResponse)
        return rawResponse.json()
    })
    //Step 3: Process JSON to replace img src with img message.
    .then (function (updateImg){
        photo.src = updateImg.results[4].image;
        console.log(updateImg.results[4].image);
        FF1.innerHTML = "Name of Character: " + updateImg.results[4].name
        FF2.innerHTML = "Character's species: " + updateImg.results[4].species
        FF3.innerHTML = "Character's origin: " + updateImg.results[4].origin.name
    })    
}) 