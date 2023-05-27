const apiKey = "c38b2b53ad6e195d1851e226300c13f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const currentTime = new Date().getTime() / 1000; // Current time in seconds
    const sunriseTime = data.sys.sunrise;
    const sunsetTime = data.sys.sunset;

    if (currentTime < sunriseTime || currentTime > sunsetTime) {
      // Nighttime icons
      if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/n-rain.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/n-mist.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/n-clear.png";
      } else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/n-clouds.png";
      }
    } else {
      // Daytime icons
      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
      }
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

function searchWeather() {
  const city = searchBox.value;
  if (city) {
    checkWeather(city);
    searchBox.value = "";
  }
}

searchBtn.addEventListener("click", searchWeather);
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchWeather();
  }
});

checkWeather(""); // Default city
