var words = [
  "pearljam",
  "nirvana",
  "soundgarden",
  "smashingpumpkins",
  "offspring",
  "greenday",
  "metallica",
  "redhotchillipeppers"
];

var chooseword = words[Math.floor(Math.random() * words.length)];
var rightWord = [];
var wrongWord = [];
var underscore = [];

var docunderscore = document.getElementsByClassName("underscore");
var docrightGuess = document.getElementsByClassName("rightGuess");
var docwrongGuess = document.getElementsByClassName("wrongGuess");

var generateunderscore = () => {
  for (var i = 0; i < chooseword.length; i++) {
    underscore.push("_");

    console.log(underscore);
  }
  return underscore;
};

generateunderscore();

document.addEventListener("keypress", event => {
  var keyword = event.key;

  if (chooseword.indexOf(keyword) > -1) {
    rightWord.push(keyword);

    //I tried to use .toLowercase in the area below, couldn't get it
    //to work so had to take out capitals from my word array.

    for (var i = 0; i < underscore.length; i++) {
      if (chooseword.charAt(i) == keyword) {
        underscore[i] = keyword;
      }
    }

    docunderscore[0].innerHTML = underscore.join(" ");
    docrightGuess[0].innerHTML = rightWord;

    if (underscore.join("") == chooseword) {
      alert("you win");

      // I couldn't work out how to reset game after win, user has to refresh page!------->>
    }
  } else {
    wrongWord.push(keyword);
    docwrongGuess[0].innerHTML = wrongWord;
  }
});
