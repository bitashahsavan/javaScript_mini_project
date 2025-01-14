const apiKey="d30d1fcc9563017a7e3ed9deb3028e7d"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=london"

const searchBox=document.querySelector('.search input')
const searchButton=document.querySelector('.search button')
const weatherIcon=document.querySelector('.weather-icon')

async function checkWeather(city){
    //fetch api from open weather site according city name
    const response=await fetch(apiUrl + city +`&appid=${apiKey}`);


    if(response.status == 404 ){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';

    }else{
        var data=await response.json();
        console.log(data);
    
        //show weather information on page
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp )+'°C';
        document.querySelector('.description').innerHTML=data.weather[0].description;
        document.querySelector('.humidity').innerHTML=data.main.humidity + '%';
        document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";
        
        //change image according weather codition
        if(data.weather[0].main == 'clouds'){
            weatherIcon.src= "images/clouds.png";
    
        }else   if(data.weather[0].main == 'clear'){
            weatherIcon.src= "images/clear.png";
    
        }else if(data.weather[0].main == "drizzle"){
            weatherIcon.src="images/drizzle.png"
    
        }
      
        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';

    }



    
}
//when click on search btn according city name show weather
searchButton.addEventListener('click' ,()=>{
    checkWeather(searchBox.value);
})
document.addEventListener('click' ,()=>{
alert('it is need strong internet')
},{once:true})

