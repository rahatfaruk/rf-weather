## weather template:

```html
<div id="weather-report" class="text-center">
  <!-- city info -->
  <h2 class="text-xl font-semibold">Dhaka, BD</h2>
  <p class="text-gray-500">11.45 am, 15 feb 24</p>
  <!-- main info -->
  <div class="flex justify-center items-center gap-6 my-4">
    <!-- weather icon -->
    <img src="./weather-icon.png" class="my-2" alt="">
    <div>
      <h3 class="flex justify-center mb-2">
        <span id="current-temp" class="text-7xl font-semibold">40</span>
        <span class="text-xl">&deg;C</span>
      </h3>
      <p class="text-gray-500 mb-2">Thunderstorm</p>
    </div>
  </div>

  <p class="text-gray-500 mb-2">
    <span class="mr-4">Min: <span id="min-temp">37</span>&deg;C</span>
    <span>Max: <span id="max-temp">42</span>&deg;C</span> 
  </p>
  <!-- extra info -->
  <div class="flex justify-between gap-4 mt-4 p-4 border-t border-gray-400 border-dashed">
    <div class="">
      <h3 class="text-gray-500">Wind</h3>
      <p class="font-bold">NE 6mph</p>
    </div>
    <div>
      <h3 class="text-gray-500">Humidity</h3>
      <p class="font-bold">65%</p>
    </div>
    <div>
      <h3 class="text-gray-500">Rain</h3>
      <p class="font-bold">100%</p>
    </div>
  </div>

</div>
```

## Data Format

```js
const location = {
  "name": "Dhaka",
  "local_names": {
    "am": "ዳካ",
    "bn": "ঢাকা",
    "ml": "ഢാക്ക",
    "en": "Dhaka"
  },
  "lat": 23.7644025,
  "lon": 90.389015,
  "country": "BD",
  "state": "Dhaka Division"
}

const weather = {
  "coord": {
    "lon": 90.389,
    "lat": 23.7644
  },
  "weather": [
    {
      "id": 721,
      "main": "Haze",
      "description": "haze",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.13,
    "feels_like": 298.59,
    "temp_min": 298.13,
    "temp_max": 298.13,
    "pressure": 1012,
    "humidity": 73
  },
  "visibility": 3200,
  "wind": {
    "speed": 3.09,
    "deg": 260
  },
  "clouds": {
    "all": 75
  },
  "dt": 1708579923,
  "sys": {
    "type": 1,
    "id": 9145,
    "country": "BD",
    "sunrise": 1708561634,
    "sunset": 1708603033
  },
  "timezone": 21600,
  "id": 7701342,
  "name": "Bangshal",
  "cod": 200
}
```