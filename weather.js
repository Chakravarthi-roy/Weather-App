var inputvalue = document.querySelector('#cityInput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityOutput');
var des = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "6af63d0368d65dff4ea7bfa148460988";
function conversion(val){
    return (val - 273).toFixed(2)
}

var defaultCity = "New Delhi";
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ defaultCity+'&appid='+apik)
.then(res => res.json())

.then(data => {
    var nameVal = data['name'];
    var temperature = data['main']['temp'];
    var desc = data['weather']['0']['description'];
    var windspeed = data['wind']['speed'];

    city.innerHTML = `in <span>${nameVal}</span>`;
    temp.innerHTML = `<span>${conversion(temperature)}°C</span>`;
    des.innerHTML = `Sky conditions:<br><span>${desc}</span>`;
    wind.innerHTML = `wind speed:<br><span>${windspeed} <span>km/h`;
});

btn.addEventListener('click', function(){
    let SearchCity = "";
    if(inputvalue.value == ""){
        SearchCity = "delhi"; 
    }else{
        SearchCity = inputvalue.value;
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+SearchCity+'&appid='+apik)
    .then(res => res.json())

    .then(data => 
    {
            var nameval = data['name']
            var temperature = data['main']['temp']
            var desc = data['weather']['0']['description']
            var windspeed = data['wind']['speed']

            city.innerHTML=`in <span>${nameval}</span>`
            temp.innerHTML=`<span>${conversion(temperature)}°C</span>`
            des.innerHTML=`Rainfall  :<br><span>${desc}</span>`
            wind.innerHTML=`wind speed:<br><span>${windspeed} </span>km/h`
    })

    .catch(err => alert('You entered wrong city name'))
});