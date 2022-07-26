//const clearBtn = document.querySelector("#borrowing");
const funFact = document.querySelector("#funFact");
const dailyRec = document.querySelector("#dailyRec");
const quizQuestions = document.querySelector("#questions");
const displayMusic = document.querySelector("#youtube");
//array to hold random facts
const randomFactArry = [
  "70% + of high school students and 80% + of college students report not getting their recommended hours of sleep per night!",
  "adults need eight and a quarter hours of sleep on average. However, studies show that teenagers need at least 9 hours!",
  "your brain is just as active during REM sleep as it is when you're awake during the day!",
  "the first three hours of sleep have the deepest stages of sleep. That's why you can feel groggy after your naps!",
  "most humans will spend one-third of their lives sleeping, while most cats spend twice that!",
  "the average person falls asleep in seven minutes. If this isn't you, we're here to help!",
  "one sleepless night affects your brain the same way as if you were intoxicated. Don't drive tired!",
  "according to NASA, the perfect nap length is 26 minutes long!",
  "REM sleep can help creative problem solving. If you're stuck, sleep on it!",
  "blue light from digital screens mimics the sun's light in the daytime, affecting your ability to fall asleep",
  "temperatures between 60 and 67 degrees Fahrenheit have been shown to improve sleep quality!",
  "sleeping on your back is best for your health, but most Americans sleep on their side",
  'it is illegal to "lie down and fall asleep" wearing your shoes in North Dakota!',
  "some animals can sleep with their eyes open as a defense mechanism!",
  "reducing long or irregular naps can improve sleep length and quality!",
  "up to 60% of people talk in their sleep! Do you know someone who does?",
  "about 12% of people dream entirely in black and white. This was more common when televisions were black and white",
  "the sensation of falling and jerking yourself awake is known as a hypnic jerk!",
];
const dailyRecArry = [
  "reading! Incorporate one of your habits with your favorite book.",
  "fitness! Try meditation, yoga, or light cardio if this isn't already part of your routine.",
  "using night settings! If you use digital devices to relax, see if they have a “night mode.”",
  "a warm beverage! Try something without caffeine, like rooibos tea or cider.",
  "white noise! Rain sounds are a typical favorite, but there are tons of sounds to choose from.",
  "music! Soft, calming music like Lofi Hip-Hop can help you relax before bed.",
  "walking! Just like during the day, a change of scenery can help you re-center.",
  "saying goodnight! Affirmations help your brain set goals, even if you're just tucking in your phone!",
  "changing your sheets! Not only is this good for your skin, but it can make you more excited for bed.",
];

const questions = [
  "Drinking enough water throughout the day can affect your whole life, including your sleep patterns! Would you like us to remind you to stay hydrated?",
  "Cleaning is a good way to relieve stress, feel productive, and take control of your environment. Would you like to add a 10-minute clean to your sleepSpace?",
  "Exercising is one of the most recommended ways to improve sleep. Anything from simple stretches, to a yoga routine, to light cardio can help! Would you like to add physical activity to your sleepSpace?",
  "There are many forms of meditation, and all of them are shown to improve sleep quality. Would you like to add meditation to your sleepSpace?",
  "Showering is important for both personal and sleep health, but there is a strong divide between people who shower in the morning vs. the night! Would you like to add showering to your sleepSpace?",
  "Skin care is another health practice that varies widely from person to person, and can include everything from moisturizing your feet to changing your pillowcase. Would you like us to remind you to take time for your skin care routine?",
  "Brushing and flossing your teeth before bed is the number one recommended way to keep your teeth healthy. Would you like us to remind you to care for your teeth?",
  "Calming, familiar smells can help relax the body and mind. Would you like to include aromatherapy in your sleepSpace? (Caution: heat-related aromatherapy items should be extinguished and/or turned off before bed and kept away from animals and children.)", //make sure text in parenthesis is smaller text when appended
  "Background noise can be beneficial for focus and relaxation. Music, white noise, or even a familiar tv show can help you relax. Would you like to add background noise to your sleepSpace?",
  "Powering down is an important part of falling asleep, as most digital apps are designed to keep you engaged. This is a great time to focus on an offline hobby like crochet, or to refocus your brain by doing puzzle activities. Would you to add an offline activity to your sleepSpace?",
];
//IDs for youtube rec (currently just some random ones. Some videos won't display until our site is published)
const musicRec = ["n61ULEU7CO0", "cq2Ef6rvL6g", "nMfPqeZjc2c"];

//function to get moonphase
var getMoonApi = function (lat, lon) {
  let moonApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=be26d6ce167eb956b80efee1a9fcecbd`;
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
  youtubeRec();
};

var youtubeRec = function () {
  let randYou = Math.floor(Math.random() * musicRec.length);
  let youMusic = musicRec[randYou];
  playRandomYoutube(youMusic);
};

//Switches to another rec based on time //similar code can be used for habit list reappearing
var dailyRecHandler = function () {
  let date = new Date();
  let time = date.getTime();
  let dayUTC = Math.floor(time / 86400000); //num here is equivalent to 1 day shorten to 2000 to test that it changes
  let i = dayUTC % dailyRecArry.length;
  dailyRec.innerHTML = dailyRecArry[i];
};

//Youtube API fetches from script in HTML

function onYouTubeIframeAPIReady() {
  console.log("Loaded");
}
// plays video once ready (google chrome does not allow autoplay)
function onPlayerReady(event) {
  event.target.playVideo();
}
var player;
function playRandomYoutube(youMusic) {
  if (player) {
    player.destroy();
  }
  player = new YT.Player("youVid", {
    height: "200",
    width: "200",
    videoId: youMusic, //Change id here. Found in URL of youtube vids
    playerVars: {
      playsinline: 1,
      fs: 0,
    },

    events: {
      onReady: onPlayerReady,
    },
  });
  console.log(youMusic);
}

// Clearing console and localStorage data function
console.log("Clear my data");
function myfunction() {
  console.clear();
  localStorage.clear();
}
