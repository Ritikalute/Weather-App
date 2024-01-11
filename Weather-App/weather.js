/*let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp").value;
let API_key = "d116819fc85c54af2ddb63e63f968b49";
const fahrenheitToCelsius = function(fahrenheit){
    return(fahrenheit - 32)/5*9;

}

const data = async function(serach){

    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${serach}&appid=${API_key}&units=metaric`
    )
    if (!response.ok) {
        console.error('Error fetching data from API');
        return;
    }
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    let celsiusTemp = fahrenheitToCelsius(jsonData.main.temp);  // Declare celsiusTemp here

    let fahrenheitTemp = jsonData.main.temp;


    city.innerHTML=jsonData.name;
    temp.innerHTML = `${Math.floor(celsiusTemp)}°C`;
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Clouds"){
        image.src="file:///E:/nikhilinteview/clouds%20(1).png"
    }else if(type.innerHTML == "Clear"){
        image.src = "file:///E:/nikhilinteview/clear.jpg"
    }
    else if(type.innerHTML == "Rain"){
        image.src = "file:///E:/nikhilinteview/clear.jpg"
    }
    else if(type.innerHTML == "Snow"){
        image.src = "file:///E:/nikhilinteview/snow.jpg"
    }
    else if(type.innerHTML == "Haze"){
        image.src = "file:///E:/nikhilinteview/haze.jpg"
    }
    else if(type.innerHTML == "Strom"){
        image.src = "file:///E:/nikhilinteview/strom.png"
    }
    input.value=""



}
function myFun() {
    const search = input.value;
    data(search);
}*/

/*function myFun(){
    let input=document.getElementById("inp").value;
    data(input)
}*/
//https://api.openweathermap.org/data/2.5/weather?q=${serach},US&appid=d116819fc85c54af2ddb63e63f968b49

//d116819fc85c54af2ddb63e63f968b49
//https://api.openweathermap.org/data/2.5/weather?${input}&appid=${API_key}&units=metric



let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");

const API_key = "d116819fc85c54af2ddb63e63f968b49";
 // Replace with your actual API key

 const weatherImageMap = {
    'Rain': 'file:///E:/nikhilinteview/rain.png', // Replace with the correct path to your rain image
    'Clear': 'file:///E:/nikhilinteview/clear.jpg',
    'Snow': 'file:///E:/nikhilinteview/snow.jpg',
    'Haze': 'file:///E:/nikhilinteview/haze.jpg',
    'Storm': 'file:///E:/nikhilinteview/strom.png',
    
  };

const data = async function(search) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);

        if (!response.ok) {
            console.error('Error fetching data from API');
            return;
        }

        const jsonData = await response.json();

        console.log(jsonData);
        console.log(jsonData.name);

        city.innerHTML = jsonData.name;
        const celsiusTemp = jsonData.main.temp;  // Temperature is already in Celsius
        temp.innerHTML = `${Math.floor(celsiusTemp)}°C`;
        type.innerHTML = jsonData.weather[0].main;

        // ... rest of your code for image selection based on weather type ...
    
        
        if (weatherImageMap[type.innerHTML]) {
            image.src = weatherImageMap[type.innerHTML];
          } else {
            image.src = "file:///E:/nikhilinteview/clouds%20(1).png"; // Default to clouds image
          }
  
        //input.value=""
    } catch (error) {
    }
};

function myFun() {
    const search = input.value;
    data(search);
}
