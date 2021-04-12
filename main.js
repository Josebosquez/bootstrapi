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
            console.log(ImageSrc)
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
const FF4 = document.querySelector("#fun4")


// const randomValue = Math.random();

// const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };


//update img add event listener
buttonRM.addEventListener("click", function (){
    //step 1: send a get req to the api url
    const URL =  "https://rickandmortyapi.com/api/character"
    fetch(URL)
    
    //step2: extract JSOm from the URL RESponse
    .then(function(rawResponse) {
        console.log("response:", rawResponse)
        return rawResponse.json()
    })
    //Step 3: Process JSON to replace img src with img message.
    .then (function (lubbaDubbaDubDub){
        photo.src = lubbaDubbaDubDub.results[3].image;
        FF1.innerHTML = "Name of Character: " + lubbaDubbaDubDub.results[3].name
        FF2.innerHTML = "Character's species: " + lubbaDubbaDubDub.results[3].species
        FF3.innerHTML = "Character's origin: " + lubbaDubbaDubDub.results[3].origin.name
        FF4.innerHTML = "Character's status: " + lubbaDubbaDubDub.results[3].status
    })    
}) 


// tried to use a number to get it to work and pull up a number
// //queries 
// const buttonRM = document.querySelector('.btn2')
// const textID = document.querySelector("#textInputRM")  
// const photo = document.querySelector("#photo")
// const FF1 = document.querySelector("#fun1")
// const FF2 = document.querySelector("#fun2")
// const FF3 = document.querySelector("#fun3")
// const FF4 = document.querySelector("#fun4")

// //update img add event listener
// buttonRM.addEventListener("click", function (){
//     const id = textID.value;
//     //step 1: send a get req to the api url
//     const URL = `https://rickandmortyapi.com/api/character/${id}`;
//     console.log(id)
//     fetch(URL)
    
//     //step2: extract JSOm from the URL RESponse
//     .then(function(rawResponse) {
//         console.log("response:", rawResponse)
//         return rawResponse.json()
//     })
//     //Step 3: Process JSON to replace img src with img message.
//     .then (function (lubbaDubbaDubDub){
//         photo.src = lubbaDubbaDubDub.results[`${id}`].image;
//         console.log(photo)
//         FF1.innerHTML = "Name of Character: " + lubbaDubbaDubDub.results[`${id}`].name
//         FF2.innerHTML = "Character's species: " + lubbaDubbaDubDub.results[`${id}`].species
//         FF3.innerHTML = "Character's origin: " + lubbaDubbaDubDub.results[`${id}`].origin.name
//         FF4.innerHTML = "Character's status: " + lubbaDubbaDubDub.results[`${id}`].status
//     })    
// }) 