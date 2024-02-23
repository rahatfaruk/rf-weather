## About project:
Simple weather application. User can enter a city name to see the current weather of that city. I have used **async await** function to fetch data. Language: html, tailwind, js.
This app is created by **Rahat Faruk** (me). 

### weather api:
In this app, we will use [openweathermap](https://openweathermap.org/) api to fetch weather data. 
My api key: `20ef5123a9a0fe8bcbe33b67c1f44079`, name: testing.

### design ideas:
  - [Minimal Weather App](https://dribbble.com/shots/19307787-Minimal-Weather-App)
  - [Weather Mobile App Design](https://www.figma.com/community/file/1047722264278445552)
  - [Weather App](https://www.figma.com/community/file/1158928016905524023)

### How this app works (steps):
  - take a city name from the user (using form)
  - based on the city name, fetch location info (latitude & longitude) using [geocoding api](https://openweathermap.org/api/geocoding-api).
  - fetch weather info using the latitude & longitude of that location. visit [api docs](https://openweathermap.org/current) for details. 
  - by default, weather unit is kelvin. to get celcius, use `&units=metric` query at the end of weather fetch url.
  - make weather template based on the data & display weather info.