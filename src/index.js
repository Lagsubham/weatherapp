import weather from "./modules/weather";
import visual from "./modules/visual";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (searchInput.value === "") return;
  const weatherData = await weather.getData(searchInput.value);
  visual.setSearchResult(weatherData);
});