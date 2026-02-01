// const API_KEY = 'b74e3ee04ef7a010c50e3b225814eb60';
const API_KEY = '63ec496c417a712baa5f15ac7621bf55'
const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

// ---------- DOM references ----------
const form = document.querySelector(".search-form");
const input = document.querySelector(".city-input");
const cityEl = document.querySelector(".city");
const dateEl = document.querySelector(".date");
const descTextEl = document.querySelector(".description-text");
const tempEl = document.querySelector(".temp");
const descIconEl = document.querySelector(".description i");
const windSpeedEl = document.querySelector(".wind-speed");
const windLabelEl = document.querySelector(".wind-level");
const humidityEl = document.querySelector(".humidity");
const visibilityEl = document.querySelector(".visibility-distance");
const additionalInfoEls = document.querySelector(".additional-info");
const searchBtn = document.querySelector(".search-btn");

// ---------- State ----------
let state = {
  city: null,
  units: "metric", 
  loading: false,
  lastResult: null,
};

// ---------- Helpers ----------
function setLoading(isLoading) {
  state.loading = isLoading;
  if (isLoading) {
    searchBtn.setAttribute("disabled", "true");
    searchBtn.style.opacity = 0.7;
    // small visual cue
    searchBtn.innerHTML = `<i class="material-icons">hourglass_top</i>`;
  } else {
    searchBtn.removeAttribute("disabled");
    searchBtn.style.opacity = 1;
    searchBtn.innerHTML = `<i class="material-icons">search</i>`;
  }
}

function formatDate(date = new Date()) {
  // e.g. 21 Feb 2025
  const dd = date.getDate();
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const mm = monthNames[date.getMonth()];
  const yyyy = date.getFullYear();
  return `${dd} ${mm} ${yyyy}`;
}

function kelvinToCelsius(k) {
  // OpenWeatherMap returns Kelvin for some endpoints; use conversion if needed.
  return Math.round(k - 273.15);
}

function metersToKm(m) {
  return (m / 1000).toFixed(1);
}

function mpsToKmph(mps) {
  return Math.round(mps * 3.6);
}

// Map main weather to a material icon name (simple)
function mapWeatherToIcon(main) {
  const map = {
    Clear: "wb_sunny",
    Clouds: "cloud",
    Rain: "water_drop",
    Drizzle: "grain",
    Thunderstorm: "flash_on",
    Snow: "ac_unit",
    Mist: "blur_on",
    Smoke: "smoke_free",
    Haze: "filter_drama",
    Dust: "filter_drama",
    Fog: "blur_on",
    Sand: "filter_drama",
    Ash: "filter_drama",
    Squall: "air",
    Tornado: "air",
  };
  return map[main] || "wb_sunny";
}

// Show error to user inside city/date area
function showError(message) {
  cityEl.textContent = "—";
  descTextEl.textContent = message;
  tempEl.textContent = "--°";
  descIconEl.textContent = "error";
  windSpeedEl.textContent = "--";
  humidityEl.textContent = "--";
  visibilityEl.textContent = "--";
}

// ---------- Rendering ----------
function render(result) {
  if (!result) {
    showError("No data");
    return;
  }
  // save last result
  state.lastResult = result;

  // city & date
  cityEl.textContent = `${result.name}, ${result.sys?.country || ""}`;
  dateEl.textContent = formatDate(new Date());

  // weather description & icon
  const weather = result.weather && result.weather[0];
  const mainWeather = weather?.main || "Clear";
  descTextEl.textContent = weather?.description ? capitalize(weather.description) : mainWeather;
  descIconEl.textContent = mapWeatherToIcon(mainWeather);

  // temperature (OpenWeatherMap will return metric if we requested metric)
  let tempDisplay;
  if (result.main && typeof result.main.temp === "number") {
    // If we requested units=metric OpenWeatherMap returns Celsius already.
    tempDisplay = Math.round(result.main.temp) + "°";
  } else if (result.main && typeof result.main.temp === "number") {
    tempDisplay = Math.round(result.main.temp) + "°";
  } else {
    tempDisplay = "--°";
  }
  tempEl.textContent = tempDisplay;

  // additional info
  const windKmph = result.wind && result.wind.speed ? mpsToKmph(result.wind.speed) + " KM/H" : "--";
  windSpeedEl.textContent = windKmph;
  windLabelEl.textContent = "Wind";

  humidityEl.textContent = (result.main && result.main.humidity != null) ? result.main.humidity + "%" : "--";
  visibilityEl.textContent = (typeof result.visibility === "number") ? metersToKm(result.visibility) + " KM" : "--";
}

// small utility
function capitalize(str = "") {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---------- Networking ----------
async function fetchWeatherByCity(city) {
  if (!city) throw new Error("city required");
  // Prefer cached recent response (<=10 minutes)
  const cacheKey = `weather:${city.toLowerCase()}:${state.units}`;
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    if (cached && Date.now() - cached.t < 10 * 60 * 1000) {
      return cached.data;
    }
  } catch (e) {
    // ignore
  }

  // Build URL: use units=metric for Celsius (so API returns temps in Celsius)
  const url = new URL(API_BASE);
  url.searchParams.set("q", city);
  url.searchParams.set("appid", API_KEY);
  url.searchParams.set("units", state.units); // 'metric' -> Celsius

  const resp = await fetch(url.toString());
  if (!resp.ok) {
    // try to parse JSON error message
    const err = await resp.json().catch(() => null);
    const msg = err?.message || `HTTP ${resp.status}`;
    const error = new Error(msg);
    error.status = resp.status;
    throw error;
  }
  const data = await resp.json();

  // cache it
  try {
    localStorage.setItem(cacheKey, JSON.stringify({ t: Date.now(), data }));
  } catch (e) {
    // ignore storage failures
  }
  return data;
}

// ---------- Event handling ----------
async function onSearch(e) {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) {
    input.focus();
    return;
  }

  // clear old results visually, set loading
  setLoading(true);
  descTextEl.textContent = "Loading...";
  tempEl.textContent = "--°";
  descIconEl.textContent = "cloud_queue";

  try {
    const data = await fetchWeatherByCity(city);
    render(data);
    state.city = city;
    input.value = "";
  } catch (err) {
    console.error(err);
    if (err.status === 404) {
      showError("City not found");
    } else {
      showError("Network error");
    }
  } finally {
    setLoading(false);
  }
}

// Keyboard Enter while typing
input.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    // allow form submit handler to handle it
    // nothing extra needed
  }
});

// simple debounce for search (if you later implement live search)
function debounce(fn, wait = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// attach form submit
form.addEventListener("submit", onSearch);

// Optional: load a default city at start
document.addEventListener("DOMContentLoaded", async () => {
  dateEl.textContent = formatDate(new Date());
  // Try to load last searched city from localStorage
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    input.value = lastCity;
    // auto-search (comment this if you don't want automatic fetch)
    // form.dispatchEvent(new Event("submit", { cancelable: true }));
  }
});

// Save last city on successful search
(function observeLastResult() {
  const origRender = render;
  render = function (result) {
    origRender(result);
    if (result && result.name) {
      try {
        localStorage.setItem("lastCity", result.name);
      } catch (e) {}
    }
  };
})();

