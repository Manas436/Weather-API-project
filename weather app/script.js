// script.js
const apiKey = '26e80755487b6e39d1e72fef5d78c049'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const { name } = data;
    const { temp, humidity } = data.main;
    const { description, icon } = data.weather[0];

    weatherResult.innerHTML = `
      <h2>${name}</h2>
      <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}"></p>
      <p>🌡️ Temperature: ${temp} °C</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>☁️ Condition: ${description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
