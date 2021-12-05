var startSearch = document.getElementById('btn-primary');
console.log(startSearch);
var searchbar = document.getElementById('searchbar');



startSearch.addEventListener('click', function(event) {
    event.preventDefault();
    startWeather();
    startFiveDay();
});

function startWeather() {
    var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&appid=1d6fa67dda044e40f9f19d333512fae6&units=imperial`; 
    fetch(weatherAPI) 
    .then(function(response){
        return response.json();
    }) .then(function(results){
        console.log(results);
        // var today = document.getElementById('currentDay');
        // console.log(today);
        // today.textContent = moment.unix(results.dt).format('MM/DD/YYYY');
        var city = document.getElementById('currentCity');
        city.innerHTML = results.name + " <span id= 'currentDay'>" + moment.unix(results.dt).format('MM/DD/YYYY') +"</span>"
        console.log(moment.unix(results.dt).format('MM/DD/YYYY'));

        var temp = document.getElementById('currentTemp');
        temp.textContent = "Temperature: " + results.main.temp + " F";

        var humidity = document.getElementById('currentHumidity');
        humidity.textContent = "Humidity: " + results.main.humidity;

        var wind = document.getElementById('currentWind');
        wind.textContent = "Wind Speed: " + results.wind.speed + " mph";

        // temperature
        console.log(results.main.temp);
        // humidity
        console.log(results.main.humidity);
        // wind speed
        console.log(results.wind.speed)
        // UV index
    })  
    console.log(searchbar.value);
}

function startFiveDay() {

    var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?q=${searchbar.value}&appid=1d6fa67dda044e40f9f19d333512fae6&units=imperial`
    fetch(fiveDayApi)
    .then(function(response){
        return response.json();
    }) .then(function(results){

        var thisDate1 = document.getElementById('date1');
        thisDate1.textContent = "Date :" + results.list[7].dt_txt;

        var thisTemp1 = document.getElementById('temp1');
        thisTemp1.textContent = results.list[7].main.temp + " degrees F";

        var theseWinds1 = document.getElementById('wind1');
        theseWinds1.textContent = results.list[7].wind.speed + " mph";

        var thisHumidity1 = document.getElementById('humid1');
        thisHumidity1.textContent = results.list[7].main.humidity;


        var thisDate2 = document.getElementById('date2');
        thisDate2.textContent = "Date :" + results.list[15].dt_txt;

        var thisTemp2 = document.getElementById('temp2');
        thisTemp2.textContent = results.list[15].main.temp + " degrees F";

        var theseWinds2 = document.getElementById('wind2');
        theseWinds2.textContent = results.list[15].wind.speed + " mph";

        var thisHumidity2 = document.getElementById('humid2');
        thisHumidity2.textContent = results.list[15].main.humidity;


        var thisDate3 = document.getElementById('date3');
        thisDate3.textContent = "Date :" + results.list[23].dt_txt;
        var thisTemp3 = document.getElementById('temp3');
        thisTemp3.textContent = results.list[23].main.temp + " degrees F";

        var theseWinds3 = document.getElementById('wind3');
        theseWinds3.textContent = results.list[23].wind.speed + " mph"

        var thisHumidity3 = document.getElementById('humid3');
        thisHumidity3.textContent = results.list[23].main.humidity;


        var thisDate4 = document.getElementById('date4');
        thisDate4.textContent = "Date :" + results.list[31].dt_txt;

        var thisTemp4 = document.getElementById('temp4');
        thisTemp4.textContent = results.list[39].main.temp + " degrees F";

        var theseWinds4 = document.getElementById('wind4');
        theseWinds5.textContent = results.list[31].wind.speed + " mph"

        var thisHumidity4 = document.getElementById('humid4');
        thisHumidity4.textContent = results.list[31].main.humidity;


        var thisDate5 = document.getElementById('date5');
        thisDate5.textContent = "Date :" + results.list[39].dt_txt;
        
        var thisTemp5 = document.getElementById('temp5');
        thisTemp5.textContent = results.list[39].main.temp + " degrees F";

        var theseWinds5 = document.getElementById('wind5');
        theseWinds5.textContent = results.list[39].wind.speed + " mph"

        var thisHumidity5 = document.getElementById('humid5');
        thisHumidity5.textContent = results.list[39].main.humidity;
        
        
        console.log(results.list[7].main.temp);
        console.log(results.list[15].main.temp);
        console.log(results.list[23].main.temp);
        console.log(results.list[31].weather[0].main);
        console.log(results.list[39].dt_txt);
})};


// fetch(weatherAPI) 
// .then(function(response){
//     return response.json();
// }) .then(function(results){
//     console.log(results);
// })


// var searchedCity = searchbar.value



// // This is our API key
// var APIKey = "4a56f566a02550ae1a4ca20559e1de75";


// // Main functions: When city search is submitted
// $(document).ready(function () {

//     $('#city-search').submit(currentWeather)
//     $('#city-search').submit(function () {

//         event.preventDefault();
//         currentWeather();
//         getUVIndex();
//     })

// });


// function currentWeather(event) {

//     event.preventDefault();

//     var searchedCity = $('#city-text').val();

//     https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//     // Here we are building the URL we need to query the database
//     // Sample URL: https://api.openweathermap.org/data/2.5/weather?appid=4a56f566a02550ae1a4ca20559e1de75&q=Atlanta;
//     // Sample URL: https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=4a56f566a02550ae1a4ca20559e1de75;
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + searchedCity;
//     // Sample URL: https://api.openweathermap.org/data/2.5/weather?appid=4a56f566a02550ae1a4ca20559e1de75&q=Atlanta&units=imperial;
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + searchedCity + "&units=imperial";

//     console.log(queryURL);
//     console.log("querURL: " + queryURL);

//     console.log("City searched is: " + $('#city-text').val());
//     console.log("City searched: " + $('#city-text').val());


//     // Here we run our AJAX call to the OpenWeatherMap API
//     function currentWeather(event) {
//         console.log(response);

//         // Transfer content to HTML
//         $(".city").text(response.name);
//         $(".city").html(response.name);

//         // Convert the temp to fahrenheit
//         var tempF = Math.round((response.main.temp - 273.15) * 1.80 + 32);
//         // add temp content to html
//         $(".temp").text(tempF);
//         var temp = Math.round(response.main.temp);
//         $(".temp").html(`${temp} &#176;F`);

//         $(".wind").text(response.wind.speed);
//         $(".humidity").text(response.main.humidity);
//         var wind = Math.round(response.wind.speed);
//         $(".wind").html(`${wind} mph`);


//         $(".humidity").html(`${response.main.humidity} %`);


//         // Log the data in the console as well
//         console.log("Wind Speed: " + response.wind.speed);
//         console.log("Humidity: " + response.main.humidity);
//         console.log("Temperature (F): " + tempF);
//         console.log("Temperature (F): " + temp);

//     };
// };


// function getUVIndex() {

//     /*
//     API call:
//     http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
//     Parameters:
//     lat, lon - coordinates of the location of your interest (latitude/longitude)
//     Examples of API calls:
//     api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37
//     */

//     // First, get lat/long of city from main weather call
//     var searchedCity = $('#city-text').val();

//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q=" + searchedCity;

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {

//         var cityLong = response.coord.lon;
//         var cityLat = response.coord.lat;

//         console.log("City longitude: " + cityLong);
//         console.log("City latitude: " + cityLat);

//         var UVqueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLong;

//         console.log("UVqueryURL: " + UVqueryURL);

//         $.ajax({
//             url: UVqueryURL,
//             method: "GET"
//         }).then(function (response) {

//             $('.UV').html(`${response.value}`);

//         });

//     });}






// var searchForm = document.querySelector('#searchForm')
// var searchBar = document.querySelector('#searchbar')
// var weather = document.querySelector('#weather')


// //Todays Variables
// var currentCity = document.querySelector('#currentCity');
// var currentDay = document.querySelector('#currentDay');
// var currentTemp = document.querySelector('#currentTemp');
// var currentWind = document.querySelector('#currentWind');
// var currentHumid = document.querySelector('#currentHumidity');
// var currentUV = document.querySelector('#currentUV');

// //day 1 Variables
// var date1 = document.querySelector('#date1');
// var temp1 = document.querySelector('#temp1');
// var wind1 = document.querySelector('#wind1');
// var humid1 = document.querySelector('#humid1');


// //day 2 variables
// var date2 = document.querySelector('#date2');
// var temp2 = document.querySelector('#temp2');
// var wind2 = document.querySelector('#wind2');
// var humid2 = document.querySelector('#humid2');


// //day 3 variables
// var date3 = document.querySelector('#date3');
// var temp3 = document.querySelector('#temp3');
// var wind3 = document.querySelector('#wind3');
// var humid3 = document.querySelector('#humid3');


// //day 4 variables
// var date4 = document.querySelector('#date4');
// var temp4 = document.querySelector('#temp4');
// var wind4 = document.querySelector('#wind4');
// var humid4 = document.querySelector('#humid4');


// //day 5 variables
// var date5 = document.querySelector('#date5');
// var temp5 = document.querySelector('#temp5');
// var wind5 = document.querySelector('#wind5');
// var humid5 = document.querySelector('#humid5');

// //city input
// var city;  
// weather.setAttribute("style", "display: none")

// var citySearch = function (event) {
//     event.preventDefault();
    
//     city = searchBar.value.trim();
//     console.log(city)
//     if (city) {
//         getCityInfo(city);
//         weather.setAttribute("style", "display: ")
//     } else {
//         alert('Please enter a city');
//     }
// };
// searchForm.addEventListener('submit', citySearch);

// var APIkey = "0f7b2671d84d4263d0426b6761720557";


// //  get city info

// function getCityInfo() {
//     var getWeatherInfo = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
//     fetch(getWeatherInfo)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         var lon = data.coord.lon;
//         var lat = data.coord.lat;
        
//         var getWeatherInfo2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + APIkey;
//             fetch(getWeatherInfo2)  
//                 .then(function (response) {
//                     return response.json();
//                 }) 
//                 .then(function (data) {
//                 console.log(data)
//                 //add to current day
//                     currentDay.textContent = city.charAt(0).toUpperCase() + city.slice(1);
//                     currentDay.textContent = moment.unix(data.current.dt).format("MM-DD-YY");
//                     currentTemp.textContent = "Temperature: " + data.current.temp + " Deg F";
//                     currentWind.textContent = "Wind-Speed: " + data.current.wind_speed + "mph";
//                     currentHumid.textContent = "Humidity: " + data.current.humidity + "%";
//                     currentUV.textContent = "UV Index: " + data.current.uvi;
//                 //add first day
//                     date1.textContent = moment.unix(data.daily[1].dt).format("MM-DD-YY");
//                     temp1.textContent = "Temp: " + data.daily[1].temp.day + "F";
//                     wind1.textContent = "Wind: " + data.daily[1].wind_speed + "mph";
//                     humid1.textContent = "Humidity: " + data.daily[1].humidity + "%";
//                 //add second day
//                     date2.textContent = moment.unix(data.daily[2].dt).format("MM-DD-YY");
//                     temp2.textContent = "Temp: " + data.daily[2].temp.day + "F";
//                     wind2.textContent = "Wind: " + data.daily[2].wind_speed + "mph";
//                     humid2.textContent = "Humidity: " + data.daily[2].humidity + "%";
//                 //add third day
//                     date3.textContent = moment.unix(data.daily[3].dt).format("MM-DD-YY");
//                     temp3.textContent = "Temp: " + data.daily[3].temp.day + "F";
//                     wind3.textContent = "Wind: " + data.daily[3].wind_speed + "mph";
//                     humid3.textContent = "Humidity: " + data.daily[3].humidity + "%";
//                 //add fourth day
//                     date4.textContent = moment.unix(data.daily[4].dt).format("MM-DD-YY");           
//                     temp4.textContent = "Temp: " + data.daily[4].temp.day + "F";
//                     wind4.textContent = "Wind: " + data.daily[4].wind_speed + "mph";
//                     humid4.textContent = "Humidity: " + data.daily[4].humidity + "%";
//                 //add fifth day
//                     date5.textContent = moment.unix(data.daily[5].dt).format("MM-DD-YY");
//                     temp5.textContent = "Temp: " + data.daily[5].temp.day + "F";
//                     wind5.textContent = "Wind: " + data.daily[5].wind_speed + "mph";
//                     humid5.textContent = "Humidity: " + data.daily[5].humidity + "%";
//        