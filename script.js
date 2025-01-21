const API_KEY = "enter your API_KEY here"
const API_URL = "https://api.openweathermap.org/data/2.5/weather"

const locationInput = document.getElementById("location-input")
const searchBtn = document.getElementById("search-btn")
const weatherInfo = document.getElementById("weather-info")
const cityName = document.getElementById("city-name")
const weatherIcon = document.getElementById("weather-icon")
const temperature = document.getElementById("temperature")
const description = document.getElementById("description")
const errorMessage = document.getElementById("error-message")

searchBtn.addEventListener("click", getWeather)
locationInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather()
  }
})

async function getWeather() {
  const location = locationInput.value.trim()
  if (!location) {
    showError("Please enter a location")
    return
  }

  try {
    const response = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`)
    const data = await response.json()

    if (data.cod === "404") {
      showError("Location not found. Please try again.")
      return
    }

    displayWeather(data)
  } catch (error) {
    showError("An error occurred. Please try again later.")
    console.error("Error fetching weather data:", error)
  }
}

function displayWeather(data) {
  cityName.textContent = `${data.name}, ${data.sys.country}`
  temperature.textContent = `${Math.round(data.main.temp)}°C`
  description.textContent = data.weather[0].description
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  weatherIcon.alt = data.weather[0].description

  updateBackgroundVideo(data.weather[0].main)

  weatherInfo.classList.remove("hidden")
  errorMessage.classList.add("hidden")
}

function showError(message) {
  errorMessage.textContent = message
  errorMessage.classList.remove("hidden")
  weatherInfo.classList.add("hidden")
}

function updateBackgroundVideo(weatherCondition) {
  const videoElement = document.querySelector("#video-background video")
  let videoSource = "/videos/weather.mp4"

  switch (weatherCondition.toLowerCase()) {
    case "clouds":
      videoSource = "/videos/clouds.mp4"
      break
    case "rain":
      videoSource = "/videos/rain.mp4"
      break
    case "drizzle":
      videoSource = "/videos/drizzle.mp4"
      break
    case "thunderstorm":
      videoSource = "/videos/thunderstorm.mp4"
      break
    case "snow":
      videoSource = "/videos/snow.mp4"
      break
    case "mist":
      videoSource = "/videos/mist.mp4"
      break
    case "fog":
      videoSource = "/videos/fog.mp4"
      break
    case "haze":
      videoSource = "/videos/haze.mp4"
      break
    case "smoke":
      videoSource = "/videos/smoke.mp4"
      break
    case "clear":
      videoSource = "/videos/clear.mp4"
      break
  }

  videoElement.src = videoSource
}

