
const API_KEY = '26e80755487b6e39d1e72fef5d78c049'
// const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// console.log(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${API_KEY}`)
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");
console.log(city)
  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  resultDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await res.json();

    if (data.cod === 200) {
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].description}</strong></p>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />
      `;
    } else {
      resultDiv.innerHTML = "City not found. Please try again.";
    }
  } catch (error) {
    resultDiv.innerHTML = "Error fetching weather. Try again later.";
    console.error(error);
  }
}