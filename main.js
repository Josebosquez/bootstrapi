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
const wButton = document.querySelector('.btn1')
const textInput = document.querySelector("#textInput")

const URL1 = "https://goweather.herokuapp.com/weather/{city}"

wButton.addEventListener("click", function(){
   

})