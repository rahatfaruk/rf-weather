## About project:
Simple weather application. User can enter a city name to see the current weather of that city. I have used **async await** function to fetch data. Language: html, tailwind, js.
This app is created by **Rahat Faruk** (me). [My Live App](https://rahatfaruk.github.io/rf-weather/)

### weather api:
In this app, we will use [openweathermap](https://openweathermap.org/) api to fetch weather data. 

### design ideas:
  - [Minimal Weather App](https://dribbble.com/shots/19307787-Minimal-Weather-App)
  - [Weather Mobile App Design](https://www.figma.com/community/file/1047722264278445552)
  - [Weather App](https://www.figma.com/community/file/1158928016905524023)

### How this app works (steps):
  1. when user search for a city name:
  - take a city name from the user (using form)
  - based on the city name, fetch location info (latitude & longitude) using [geocoding api](https://openweathermap.org/api/geocoding-api).
  - fetch weather info using the latitude & longitude of that location. visit [api docs](https://openweathermap.org/current) for details. 
  - by default, weather unit is kelvin. to get celcius, use `&units=metric` query at the end of weather fetch url.
  - make weather template based on the data & display weather info.
  2. when user click local-weather btn:
  - get position object of user's current location using `navigator.geolocation` api.
  - in position object, we use lat(latitude) and lon(longitude) to fetch location like previous (1.) step.

### allow loading http (unsecured data) over https:
we must use this line (`<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`) in html head tag to load `http` request to `openweathermap`. Otherwise the request will be blocked on github page. 