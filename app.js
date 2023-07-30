// создаю элементы 
let mainContainer = document.createElement('div');
let img = document.createElement('img');
let temp = document.createElement('span');
let pressure = document.createElement('span');
let description = document.createElement('span');
let humidity = document.createElement('span');
let speed = document.createElement('span');
let deg = document.createElement('span');
// //добавляю классы
mainContainer.classList.add('mainContainer');
temp.classList.add('temp');
pressure.classList.add('pressure');
description.classList.add('description');
humidity.classList.add('humidity');
speed.classList.add('speed');
deg.classList.add('deg');
// вывожу на страницу
document.body.prepend(mainContainer);
// находим имя картинки в json
let city = prompt('В каком городе смотрим погоду', 'Kharkiv');
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
console.log(url);
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let contTitle = document.createElement('h2');
        contTitle.innerHTML = `Погода в ${city}`;
        mainContainer.insertBefore(contTitle, mainContainer.firstChild);

        console.log({ data });

        temp.innerHTML = `Температура: ${data.main.temp}°С `;
        pressure.innerHTML = `тиск: ${data.main.pressure} mm ртутного стовпа `;
        description.innerHTML = `${data.weather[0].description} `;
        humidity.innerHTML = `вологість: ${data.main.humidity} `;
        speed.innerHTML = `швидкість: ${data.wind.speed} `;
        deg.innerHTML = `напрям в градусах: ${data.wind.deg} `;

        // даем адрес иконке
        let icon = (data.weather[0].icon);
        img.src = `https://openweathermap.org/img/w/${icon}.png`;

        let headerContainer = document.createElement('div');
        headerContainer.classList.add('headerContainer');
        headerContainer.appendChild(img);
        headerContainer.appendChild(description);
        mainContainer.appendChild(headerContainer);
        mainContainer.appendChild(temp);
        mainContainer.appendChild(pressure);
        mainContainer.appendChild(humidity);

        let windContainer = document.createElement('div');
        windContainer.classList.add('wind-container');
        let windTitle = document.createElement('span');
        windTitle.innerHTML = 'Вітер:';
        windContainer.appendChild(windTitle);
        windContainer.appendChild(speed);
        windContainer.appendChild(deg);
        mainContainer.appendChild(windContainer);
    });
