//const clearBtn = document.querySelector("#borrowing");
const funFact = document.querySelector("#funFact");
const dailyRec = document.querySelector("#dailyRec");
const quizQuestions = document.querySelector("#questions");
const displayMusic = document.querySelector("#youtube");
const displayMoon = document.querySelector(".moon-phase");
const clearButton = document.querySelector("#clearButton");
var currentQuestion = 0;
var routineList = [];

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
  "blue light from digital screens mimics the sun's light in the daytime, affecting your ability to fall asleep.",
  "temperatures between 60 and 67 degrees Fahrenheit have been shown to improve sleep quality!",
  "sleeping on your back is best for your health, but most Americans sleep on their side.",
  'it is illegal to "lie down and fall asleep" wearing your shoes in North Dakota!',
  "some animals can sleep with their eyes open as a defense mechanism!",
  "reducing long or irregular naps can improve sleep length and quality!",
  "up to 60% of people talk in their sleep! Do you know someone who does?",
  "about 12% of people dream entirely in black and white. This was more common when televisions were black and white.",
  "the sensation of falling and jerking yourself awake is known as a hypnic jerk!",
];

//array to hold daily recommendations
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

//array to hold questions
const questions = [
  {
    title: "Question 1:",
    ask: "Drinking enough water throughout the day can affect your whole life, including your sleep patterns! Would you like us to remind you to stay hydrated?",
    result: "Hydrate!",
  },
  {
    title: "Question 2:",
    ask: "Cleaning is a good way to relieve stress, feel productive, and take control of your environment. Would you like to add a 10-minute clean to your sleepSpace?",
    result: "Spend 10 minutes cleaning.",
  },
  {
    title: "Question 3:",
    ask: "Exercising is one of the most recommended ways to improve sleep. Anything from simple stretches, to a yoga routine, to light cardio can help! Would you like to add physical activity to your sleepSpace?",
    result: "Do a light exercise routine.",
  },
  {
    title: "Question 4:",
    ask: "There are many forms of meditation, and all of them are shown to improve sleep quality. Would you like to add meditation to your sleepSpace?",
    result: "Meditation session.",
  },
  {
    title: "Question 5:",
    ask: "Showering is important for both personal and sleep health, but there is a strong divide between people who shower in the morning vs. the night! Would you like to add showering to your sleepSpace?",
    result: "Take a shower (or a bath)!",
  },
  {
    title: "Question 6:",
    ask: "Skin care is another health practice that varies widely from person to person, and can include everything from moisturizing your feet to changing your pillowcase. Would you like us to remind you to take time for your skin care routine?",
    result: "Care for my skin.",
  },
  {
    title: "Question 7:",
    ask: "Brushing and flossing your teeth before bed is the number one recommended way to keep your teeth healthy. Would you like us to remind you to care for your teeth?",
    result: "Care for my teeth.",
  },
  {
    title: "Question 8:",
    ask: "Calming, familiar smells can help relax the body and mind. Would you like to include aromatherapy in your sleepSpace? (Caution: heat-related aromatherapy items should be extinguished and/or turned off before bed and kept away from animals and children.)", //make sure text in parenthesis is smaller text when appended
    result: "Choose a relaxing scent.",
  },
  {
    title: "Question 9:",
    ask: "Background noise can be beneficial for focus and relaxation. Music, white noise, or even a familiar tv show can help you relax. Would you like to add background noise to your sleepSpace?",
    result: "Pick some background noise.",
  },
  {
    title: "Question 10:",
    ask: "Powering down is an important part of falling asleep, as most digital apps are designed to keep you engaged. This is a great time to focus on an offline hobby like crochet, or to refocus your brain by doing puzzle activities. Would you to add an offline activity to your sleepSpace?",
    result: "Go offline for a while.",
  },
];

var getList = function () {
  routineList = [];
  currentQuestion = 0;
  if (localStorage.getItem("routine") == null) {
    console.log("Waiting for results!");
  } else if (localStorage.getItem("routine") !== null) {
    var data = localStorage.getItem("routine");
    routineList = JSON.parse(data);

    var routineBox = document.getElementById("habit-list");
    routineBox.innerHTML = "";

    var listTitle = document.createElement("h2");
    listTitle.textContent = "My sleepSpace:";
    routineBox.appendChild(listTitle);

    var listDiv = document.createElement("div");
    listDiv.classList = "routine-div";
    routineBox.appendChild(listDiv);

    for (i = 0; i < routineList.length; i++) {
      var listItem = document.createElement("div");
      listItem.classList = "box quiz-box answer row center-row";
      listItem.setAttribute = ("id", "complete");
      listDiv.appendChild(listItem);

      var checkBox = document.createElement("div");
      checkBox.classList = "check";
      checkBox.addEventListener(
        "click",
        function (e) {
          let hClick = e;
          hClick = e.target;
          console.log(hClick);
          hClick.classList.add("click");
        },
        false
      );
      listItem.appendChild(checkBox);

      var listText = document.createElement("p");
      listText.textContent = routineList[i];
      listItem.appendChild(listText);
    }

    var quizAgain = document.createElement("p");
    quizAgain.classList = "list-text";
    quizAgain.textContent =
      "You can change your routine by taking the quiz again! But first, make sure you clear your data at the bottom of the page.";
    routineBox.appendChild(quizAgain);
  }
};

var loadQuiz = function (question) {
  //check value of currentQuestion
  if (currentQuestion === questions.length) {
    //commit array to localStorage
    localStorage.setItem("routine", JSON.stringify(routineList));
    routineList = [];
    //generate the end quiz elements if the requirement is met
    var endBox = document.getElementById("quiz-section");
    endBox.innerHTML = "";
    endBox.classList = "box last-box answer";

    var endTitle = document.createElement("h2");
    endTitle.textContent = "Thank you for completing the quiz!";
    endBox.appendChild(endTitle);

    var endDesc = document.createElement("p");
    endDesc.textContent =
      "Click the button below to generate your new routine!";
    endBox.appendChild(endDesc);

    var genButton = document.createElement("div");
    genButton.innerHTML = "<p>Create my sleepSpace!</p>";
    genButton.setAttribute = ("id", "generate");
    genButton.classList = "box quiz-box answer";
    endBox.appendChild(genButton);

    var refreshPage = function () {
      window.location.reload();
    };

    genButton.addEventListener("click", refreshPage);
  } else {
    //loop through the questions
    for (i = 0; i < questions.length; i++) {
      var newQuestionNum = document.getElementById("question-number");
      newQuestionNum.textContent = question.title;

      var newQuestion = document.getElementById("question");
      newQuestion.textContent = question.ask;

      //push to array if applicable, add to currentQuestion, and call the function again
      document.getElementById("answer1").onclick = function () {
        routineList.push(question.result);
        currentQuestion++;
        loadQuiz(questions[currentQuestion]);
      };
      document.getElementById("answer2").onclick = function () {
        routineList.push(question.result);
        currentQuestion++;
        loadQuiz(questions[currentQuestion]);
      };
      document.getElementById("answer3").onclick = function () {
        currentQuestion++;
        loadQuiz(questions[currentQuestion]);
      };
    }
  }
};

//IDs for youtube rec (some videos won't display until our site is published) (settled on Lofi Hip-Hop!)
const musicRec = [
  "n61ULEU7CO0",
  "J2UyOTS3UCE",
  "sSbABWGgRh0",
  "GluZA66XSFM",
  "px2YTz88lW8",
  "q8O6fM0qpdw",
  "WfMClt3K5K4",
  "7JMvn0wfABQ",
];

//function to get moonphase
window.addEventListener("load", function () {
  let moonApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=28.294695&lon=-81.402534&exclude=current,minutely,hourly,alerts&appid=be26d6ce167eb956b80efee1a9fcecbd";
  fetch(moonApi)
    .then((res) => res.json())
    .then((data) => {
      let moonPhase = data.daily[0].moon_phase;
      console.log(moonPhase);
      moonDisplay(moonPhase);
    });
});

//function to display correct phase
var moonDisplay = function (moonPhase) {
  if (moonPhase === 0 || moonPhase === 1)
    displayMoon.style.backgroundImage = "url('./assets/images/moon_new.png')";

  if (moonPhase >= 0.1 && moonPhase <= 0.24)
    displayMoon.style.backgroundImage =
      "url('./assets/images/moon-waxing-crescent.png')";

  if (moonPhase === 0.25)
    displayMoon.style.backgroundImage =
      "url('./assets/images/moon-first-quarter.png')";

  if (moonPhase >= 0.26 && moonPhase <= 0.49)
    displayMoon.style.backgroundImage =
      "url('./assets/images/moon-waxing-gibbous.png')";

  if (moonPhase === 0.5)
    displayMoon.style.backgroundImage = "url('./assets/images/moon_full.png')";

  if (moonPhase >= 0.51 && moonPhase <= 0.74)
    displayMoon.style.backgroundImage =
      "url('./assets/images/moon-waning-crescent.png')";

  if (moonPhase === 0.75)
    displayMoon.style.backgroundImage =
      "url('./assets/images/moon-third-quarter.png')";

  if (moonPhase >= 0.76 && moonPhase <= 0.99)
    displayMoon.style.backgroundImage =
      "url('./assets/images/moon-waning-gibbous.png')";

  return true;
};

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
    height: "100",
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

//clear console and local storage
function clearData() {
  console.clear();
  localStorage.clear();
  window.location.reload();
}

loadQuiz(questions[currentQuestion]);
getList();
