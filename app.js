// объявляем переменные
let img, icon, temp, pressure, description, humidity, speed, deg;
// создаю элементы на странице
img = document.createElement('img');
temp = document.createElement('p');
pressure = document.createElement('p');
description = document.createElement('p');
humidity = document.createElement('p');
speed = document.createElement('p');
deg = document.createElement('p');
// //добавляю ему класс
temp.classList.add('temp');
pressure.classList.add('pressure');
description.classList.add('description');
humidity.classList.add('humidity');
speed.classList.add('speed');
deg.classList.add('deg');

//находим имя картинки в json
let city = prompt('В каком городе смотрим погоду', 'Kharkiv').toUpperCase();
{/* < h1 > city</h1>;stmul */ }


fetch('http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then((response) => response.json())
    .then((data) => {
        console.log(city); //скинули в консоль и видим что это obj
        temp.innerHTML = `Температура: ${data.main.temp}°С `;
        pressure.innerHTML = `тиск: ${data.pressure} mm ртутного столба `;
        description.innerHTML = `${data.weather[0].description} `;
        humidity.innerHTML = `вологість: ${data.main.humidity} `;
        speed.innerHTML = `швидкість вітру: ${data.wind.speed} `;
        deg.innerHTML = `напрям в градусах: ${data.wind.deg} `;
        icon = (data.weather[0].icon);
        // даем адрес иконке
        img.src = `https://openweathermap.org/img/w/${icon}.png`;
        //регистрируем все найденные значения на странице
        document.body.prepend(img);
        document.body.prepend(description);
        document.body.prepend(temp);
        document.body.prepend(pressure);
        document.body.prepend(humidity);
        document.body.prepend(speed);
        document.body.prepend(deg);
    });
