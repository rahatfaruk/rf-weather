const weatherReportContainerEl = document.getElementById('weather-report-container')
const cityNameForm = document.getElementById('city-name-form')
const localWeatherBtn = document.getElementById('local-weather-btn')

const apiKey = 'f582bfdf5435fbc9b4169698c7c71d12'

// render weather report by weather-info & location-info
function displayWeather(locationInfo, weatherInfo) {
  const cityName = locationInfo.name ? locationInfo.name : weatherInfo.name
  const country = weatherInfo.sys.country
  const description = weatherInfo.weather[0].description
  const icon = weatherInfo.weather[0].icon
  const temp = weatherInfo.main.temp.toFixed(0)
  const humidity = weatherInfo.main.humidity
  const wind = weatherInfo.wind.speed
  const clouds = weatherInfo.clouds.all
  let sunrise = getFormattedTimeFromMS(weatherInfo.sys.sunrise)
  let sunset = getFormattedTimeFromMS(weatherInfo.sys.sunset)
  

  // icon url
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  const weatherReportTemplate = `
    <div id="weather-report" class="text-center">
      <!-- city info -->
      <h2 class="text-2xl font-semibold">${cityName}, ${country}</h2>
      
      <!-- main info -->
      <div class="flex justify-center items-center gap-6 my-4">
        <!-- weather icon -->
        <img src="${iconUrl}" class="my-2" alt="weather indicator icon">
        <div>
          <h3 class="flex justify-center mb-2">
            <span class="text-7xl font-semibold">${temp}</span>
            <span class="text-xl">&deg;C</span>
          </h3>
          <p class="text-gray-500 mb-2">${description}</p>
        </div>
      </div>

      <!-- sunset & sunrise -->
      <div class="flex justify-around">
        <p>
          <span class="block text-gray-500 text-sm">Sunrise</span>
          <span class="font-bold">${sunrise} am</span>
        </p>
        <p>
          <span class="block text-gray-500 text-sm">Sunset</span>
          <span class="font-bold">${sunset} pm</span>
        </p>
      </div>

      <!-- extra info -->
      <div class="flex justify-between gap-4 mt-4 p-4 border-t border-gray-400 border-dashed">
        <div>
          <h3 class="text-gray-500">Wind</h3>
          <p class="font-bold">${wind}m/s</p>
        </div>
        <div>
          <h3 class="text-gray-500">Humidity</h3>
          <p class="font-bold">${humidity}%</p>
        </div>
        <div>
          <h3 class="text-gray-500">Clouds</h3>
          <p class="font-bold">${clouds}%</p>
        </div>
      </div>

    </div>
  `

  weatherReportContainerEl.innerHTML = weatherReportTemplate
} 

// fnc: format time 
function getFormattedTimeFromMS(milliseconds) {
  const normalMsLen = Date.now().toString().length
  let formattedMilliseconds = parseInt(milliseconds.toString().padEnd(normalMsLen, '0'))

  const time = new Date(formattedMilliseconds)
  let hr = time.getHours()
  // convert 24 hr to 12 hr format
  hr = (hr > 12) ? hr - 12 : hr
  // make 1 char long hr into 2 char 
  hr = hr.toString().length === 1 ? '0'+hr : hr
  let min = time.getMinutes()
  min = min.toString().length === 1 ? '0'+min : min

  return (hr + ':' + min);
}

// fnc: fetch data
async function fetchData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Fetching data error: response is not ok.')
    }
    const data = await response.json()
    return data;
  } catch (err) {
    return err.message
  }
}

// fnc: get location-info
async function getLocationInfo(cityName) {
  const geocodingUrlBase = 'http://api.openweathermap.org/geo/1.0/direct'
  const geocodingUrlQuery = `?q=${cityName}&limit=1&appid=${apiKey}`
  const locationArr = await fetchData(geocodingUrlBase+geocodingUrlQuery)

  const locationObj = locationArr[0]
  return locationObj
}

// fnc: get weather info
async function getCurrWeatherInfo(location) {
  const currWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`

  const weatherObj = await fetchData(currWeatherUrl)
  return weatherObj
}

// fnc: get current location of the user
function getCurrentLocation(callback) {
  // check if geolocation supports or not
  if(!navigator.geolocation) {
    alert('geolocation is not supported by this browser')
    return
  }

  // do something when position is available
  navigator.geolocation.getCurrentPosition(geoPosition => {
    callback(geoPosition)
  }, error => {
    alert('Error getting location: ', error.message)
  })
}

// ## get & display weather when user enter a city name
cityNameForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const cityName = cityNameForm['city-name'].value.trim()
  
  try {
    const location = await getLocationInfo(cityName)
    const weather = await getCurrWeatherInfo(location)

    cityNameForm.reset()
    displayWeather(location, weather)
  } catch(err) {
    weatherReportContainerEl.innerHTML = '<p class="text-red-700">Your city name is incorrect! Enter correct one!</p>'
  }
})

// ## get local weather 
localWeatherBtn.addEventListener('click', () => {
  getCurrentLocation(async (position) => {
    const location = {lat: position.coords.latitude, lon: position.coords.longitude}
    const weather = await getCurrWeatherInfo(location)
    displayWeather(location, weather)
  })
})