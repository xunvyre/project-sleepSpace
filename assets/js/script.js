//const clearBtn = document.querySelector("#borrowing");
const funFact = document.querySelector("#funFact");
const dailyRec = document.querySelector("#dailyRec");
//array to hold random facts
const randomFactArry = [
  "70% + of high school students and 80% + of college students report not getting their recommended hours of sleep per night!",
  "blah blah",
  "fact here",
  "fact there",
  "fact everywhere",
  "make this random",
];
const dailyRecArry = [
  "Drink water",
  "Stretch before sleep",
  "Reading",
  "Other stuff",
  "Shower in warm water",
  "more data",
  "put stuff",
  "add your rec",
];

//function to get moonphase
var getMoonApi = function (lat, lon) {
  var moonApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=be26d6ce167eb956b80efee1a9fcecbd`;
  fetch(moonApi)
    .then((res) => res.json())
    .then((data) => {
      let moonPhase = data.daily[0].moon_phase;
      console.log(moonPhase);
    });
};
//code is annoying unless this is commented out for now until new button is available

//function that grabs user location (we can add this to any button just used clear as a test)
// clearBtn.addEventListener("click", function () {
//   navigator.geolocation.getCurrentPosition((location) => {
//     let lat = location.coords.latitude;
//     let lon = location.coords.longitude;
//     //gonna pass these off to above function soon
//     console.log(lat, lon);
//     getMoonApi(lat, lon);
//   });
// });

//fun fact function (random) occurs on load or refresh
window.onload = function randomFact() {
  let randomNum = Math.floor(Math.random() * randomFactArry.length);
  funFact.innerHTML = randomFactArry[randomNum];
  dailyRecHandler();
};
//Switches to another rec based on time
var dailyRecHandler = function () {
  let date = new Date();
  let time = date.getTime();
  let dayUTC = Math.floor(time / 86400000); //num here is equivalent to 1 day shorten to 2000 to test that it changes
  let i = dayUTC % dailyRecArry.length;
  dailyRec.innerHTML = dailyRecArry[i];
};
