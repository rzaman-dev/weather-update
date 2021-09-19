//console.log('connected')
const API_KEY = '2d97d6b1d1d8fcdbeaeaeae2993f8874';

const loadData = () =>{
    const city = document.getElementById('input-field').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then(res=>res.json())
    .then(data=>showData(data))

}

const showData = data =>{
    const weatherStatusArea = document.getElementById('weather-status');
    const div = document.createElement('div');
    div.innerHTML=`
    
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
    
    `
    weatherStatusArea.innerHTML='';
    weatherStatusArea.appendChild(div)
}
 
