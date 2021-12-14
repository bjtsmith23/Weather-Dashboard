var startSearch = document.getElementById('btn-primary');
console.log(startSearch);
var searchbar = document.getElementById('searchbar');
var searchItem = [];



startSearch.addEventListener('click', function (event) {
    event.preventDefault();
    // startWeather(searchbar.value);
    startWeather();
    // reutilize start weather ----
    storeCity();



});

function startWeather() {
    var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&appid=1d6fa67dda044e40f9f19d333512fae6&units=imperial`;
    fetch(weatherAPI)
        .then(function (response) {
            return response.json();
        }).then(function (results) {
            console.log(results);
            var city = document.getElementById('currentCity');
            city.innerHTML = results.name + " <span id= 'currentDay'>" + moment.unix(results.dt).format('MM/DD/YYYY') + "</span>"
            console.log(moment.unix(results.dt).format('MM/DD/YYYY'));

            var temp = document.getElementById('currentTemp');
            temp.textContent = "Temperature: " + results.main.temp + " F";

            var humidity = document.getElementById('currentHumidity');
            humidity.textContent = "Humidity: " + results.main.humidity + " %";

            var wind = document.getElementById('currentWind');
            wind.textContent = "Wind Speed: " + results.wind.speed + " mph";

            var weatherPic = document.getElementById('weatherIcon');
            var weatherIcon = results.weather[0].icon;
            var iconLink = "https://openweathermap.org/img/w/" + weatherIcon + ".png";
            weatherPic.src = iconLink;


            startFiveDay(results.coord.lat, results.coord.lon);
        })
    console.log(searchbar.value);


}
function keepCities() {
    localStorage.getItem("searchedCity");


}

function startFiveDay(lat, lon) {

    var fiveDayApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=1d6fa67dda044e40f9f19d333512fae6&units=imperial`
    fetch(fiveDayApi)
        .then(function (response) {
            return response.json();
        }).then(function (results) {
            console.log(results);


            // current UVI with color change


            function runUviColor() {
                var thisUvi1 = document.getElementById('currentUV');
                thisUvi1.textContent = "UVI : " + results.current.uvi;

                if (results.current.uvi < 2) {
                    document.getElementById('currentUV').style.background = "green";
                } else if (results.current.uvi > 2 && results.current.uvi < 5) {
                    document.getElementById('currentUV').style.background = "yellow";
                } else if (results.current.uvi > 5 && results.current.uvi < 7) {
                    document.getElementById('currentUV').style.background = "orange";
                } else {
                    document.getElementById('currentUV').style.background = "red";
                }
            }


            var formattedDate1 = moment.unix(results.daily[1].dt).format('MM/DD/YYYY');


            // Day 1 of Five Day Forcast

            var thisDate1 = document.getElementById('date1');
            thisDate1.textContent = formattedDate1;

            var thisTemp1 = document.getElementById('temp1');
            thisTemp1.textContent = "Temperature " + results.daily[1].temp.day + " degrees F";

            var theseWinds1 = document.getElementById('wind1');
            theseWinds1.textContent = "Wind Speed: " + results.daily[1].wind_speed + " mph";

            var thisHumidity1 = document.getElementById('humid1');
            thisHumidity1.textContent = "Humidity: " + results.daily[1].humidity + " %";

            var weatherPic1 = document.getElementById('weatherIcon1');
            var weatherIcon1 = results.daily[1].weather[0].icon;
            console.log(weatherIcon1);
            var iconLink1 = "https://openweathermap.org/img/w/" + weatherIcon1 + ".png";
            weatherPic1.src = iconLink1;


            // Day 2 of Five Day Forcast
            var formattedDate2 = moment.unix(results.daily[2].dt).format('MM/DD/YYYY');

            var thisDate2 = document.getElementById('date2');
            thisDate2.textContent = formattedDate2;

            var thisTemp2 = document.getElementById('temp2');
            thisTemp2.textContent = "Temperature " + results.daily[2].temp.day + " degrees F";

            var theseWinds2 = document.getElementById('wind2');
            theseWinds2.textContent = "Wind Speed: " + results.daily[2].wind_speed + " mph";

            var thisHumidity2 = document.getElementById('humid2');
            thisHumidity2.textContent = "Humidity: " + results.daily[2].humidity + " %";

            var weatherPic2 = document.getElementById('weatherIcon2');
            var weatherIcon2 = results.daily[2].weather[0].icon;
            console.log(weatherIcon2);
            var iconLink2 = "https://openweathermap.org/img/w/" + weatherIcon2 + ".png";
            weatherPic2.src = iconLink2;


            // Day 3 of Five Day Forcast

            var formattedDate3 = moment.unix(results.daily[3].dt).format('MM/DD/YYYY');

            var thisDate3 = document.getElementById('date3');
            thisDate3.textContent = formattedDate3;

            var thisTemp3 = document.getElementById('temp3');
            thisTemp3.textContent = "Temperature " + results.daily[3].temp.day + " degrees F";

            var theseWinds3 = document.getElementById('wind3');
            theseWinds3.textContent = "Wind Speed: " + results.daily[3].wind_speed + " mph";

            var thisHumidity3 = document.getElementById('humid3');
            thisHumidity3.textContent = "Humidity: " + results.daily[3].humidity + " %";

            var weatherPic3 = document.getElementById('weatherIcon3');
            var weatherIcon3 = results.daily[3].weather[0].icon;
            console.log(weatherIcon3);
            var iconLink3 = "https://openweathermap.org/img/w/" + weatherIcon3 + ".png";
            weatherPic3.src = iconLink3;

            // Day 4 of Five Day Forcast

            var formattedDate4 = moment.unix(results.daily[4].dt).format('MM/DD/YYYY');

            var thisDate4 = document.getElementById('date4');
            thisDate4.textContent = formattedDate4;

            var thisTemp4 = document.getElementById('temp4');
            thisTemp4.textContent = "Temperature " + results.daily[4].temp.day + " degrees F";

            var theseWinds4 = document.getElementById('wind4');
            theseWinds4.textContent = "Wind Speed: " + results.daily[4].wind_speed + " mph";

            var thisHumidity4 = document.getElementById('humid4');
            thisHumidity4.textContent = "Humidity: " + results.daily[4].humidity + " %";

            var weatherPic4 = document.getElementById('weatherIcon4');
            var weatherIcon4 = results.daily[4].weather[0].icon;
            console.log(weatherIcon4);
            var iconLink4 = "https://openweathermap.org/img/w/" + weatherIcon4 + ".png";
            weatherPic4.src = iconLink4;
            // Day 4 of Five Day Forcast


            // Day 5 of Five Day Forcast
            var formattedDate5 = moment.unix(results.daily[5].dt).format('MM/DD/YYYY');

            var thisDate5 = document.getElementById('date5');
            thisDate5.textContent = formattedDate5;

            var thisTemp5 = document.getElementById('temp4');
            thisTemp5.textContent = "Temperature " + results.daily[5].temp.day + " degrees F";

            var theseWinds5 = document.getElementById('wind5');
            theseWinds5.textContent = "Wind Speed: " + results.daily[5].wind_speed + " mph";

            var thisHumidity5 = document.getElementById('humid5');
            thisHumidity5.textContent = "Humidity: " + results.daily[5].humidity + " %";

            var weatherPic5 = document.getElementById('weatherIcon5');
            var weatherIcon5 = results.daily[5].weather[0].icon;
            console.log(weatherIcon5);
            var iconLink5 = "https://openweathermap.org/img/w/" + weatherIcon5 + ".png";
            weatherPic5.src = iconLink5;

            runUviColor();

        })
};

function storeCity() {
    var searchedCity = document.getElementById('cityStored')
    var button = document.createElement('button')
    button.textContent = searchbar.value;
    searchItem.push(searchbar.value);
    button.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(event.target.innerHTML);




        // console.log('I have been clicked!');

    })
    localStorage.setItem('searchedCity', JSON.stringify(searchItem));
    searchedCity.appendChild(button);
}


// check saved scores in Code Quiz
// localStorage.get item - searchedCity


function bringBack() {
    var cityList = JSON.parse(localStorage.getItem('searchedCity'));
    console.log(cityList);
    for (var i = 0; i < cityList.length; i++) {
        console.log(cityList[i]);
        var searchedCity = document.getElementById('cityStored')
        var button = document.createElement('button')
        button.textContent = cityList[i];
        searchItem.push(cityList[i]);
        button.addEventListener('click', function (event) {
            event.preventDefault();
            console.log(event.target.innerHTML);   
        })

        searchedCity.appendChild(button);
        localStorage.setItem('searchedCity', JSON.stringify(searchItem));
        
      }

}




bringBack();







