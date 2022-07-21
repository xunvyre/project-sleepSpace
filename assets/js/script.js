const clearBtn = document.querySelector("#borrowing");

//function to get moonphase
var getMoonApi = function () {
  var moonApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=28.53833&lon=-81.378876&exclude=current,minutely,hourly,alerts&appid=be26d6ce167eb956b80efee1a9fcecbd";
  fetch(moonApi)
    .then((res) => res.json())
    .then((data) => {
      let moonPhase = data.daily[0].moon_phase;
      console.log(moonPhase);
    });
};
getMoonApi();

//function that grabs user location (we can add this to any button just used clear as a test)
clearBtn.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition((location) => {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    console.log(lat, lon);
  });
});

//spotify or youtube API
