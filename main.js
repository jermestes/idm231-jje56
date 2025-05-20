//initial values for zodiac form calculation variables
let AstroSign = null;
let whichMonth = 0;
let whichDayOfMonth = 0;
let birthdayForm = document.getElementById('birthdayForm');
console.log(AstroSign);



//CONSTRUCTOR for player profiles objects to add to zodiac array
//creating the constructer
function createZodiacPlayer(sign, firstName, lastName, nickname, quote) {
  this.sign = sign;
  this.firstName = firstName;
  this.lastName = lastName;
  this.nickname = nickname;
  this.quote = quote;
}

//constructing the objects for each zodiac/player
var Capricorn = new createZodiacPlayer('Capricorn', 'leBron', 'james', 'King James', 'You strive for greatness. When all is said and done, the only debate will be whether you’re call you King or G.O.A.T');
var Aquarius = new createZodiacPlayer('Aquarius', 'michael', 'jordan', 'Air Jordan', 'Everyone wants to be like you. There’s just a certain "air" to you');
var Pisces = new createZodiacPlayer('Pisces', 'steph', 'curry', 'Chef Curry', 'The way you play might not be appreciated by old-timers, but the revolution you lead speaks for itself.');
var Aries = new createZodiacPlayer('Aries', 'kyrie', 'irving', 'Uncle Drew', 'You care about legacy and do not want to live in someone else’s shadow');
var Taurus = new createZodiacPlayer('Taurus', 'tim', 'duncan', 'The Big Fundamental', 'You understand the importance of fundamentals. That will make you a master of your craft');
var Gemini = new createZodiacPlayer('Gemini', 'allen', 'iverson', 'The Answer', 'You’re a trend-setter. Things you do may seem unorthodox, but people will come to love it');
var Cancer = new createZodiacPlayer('Cancer', 'kawhi', 'leonard', 'The Klaw', 'Some say you’re too quiet, but your laugh is unforgettable');
var Leo = new createZodiacPlayer('Leo', 'wilt', 'chamberlain', 'The Stilt', 'You walk and talk a big game. If others haven’t already seen it, just show them your stat sheet.');
var Virgo = new createZodiacPlayer('Virgo', 'james', 'harden', 'The Beard', 'You have an uncanny ability to score. This success could bring plenty of TRAVELLING!');
var Libra = new createZodiacPlayer('Libra', 'kevin', 'durant', 'The Slim Reaper', 'You’re one of a kind, but you worry too much about what others think. Be careful on social media!');
var Scorpio = new createZodiacPlayer('Scorpio', 'russell', 'westbrook', 'The Brodie', 'Loyalty is important to you. You’d rather put the team on your back then take the easy way out, and people respect that.');
var Sagittarius = new createZodiacPlayer('Sagittarius', 'larry', 'bird', 'The Hick from French Lick', 'You may not look the part, but there’s no doubt you can compete with the best');

//inserting the player profile objects for all 12 of the zodiac signs
let zodiacList = [Capricorn, Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius];

//LOOP to generate a ball & reveal profile for each zodiac sign
zodiacList.forEach(sign => {
  const player = sign;

  //create the ball foreach player. Sets class for general shape/style, ID for team colors, and text for sign name
  const createButton = document.createElement('button');
  createButton.setAttribute('class', 'zodiac_balls');
  createButton.classList.add('zodiac_balls', `${sign.firstName}`);
  createButton.setAttribute('id', `${sign.sign}Button`);
  const buttonText = document.createTextNode(sign.sign);
  createButton.appendChild(buttonText);
  createButton.addEventListener('click', ballReveal, false);

  function ballReveal() {
    AstroSign = sign.sign;
    console.log(AstroSign);
    playerReveal();
  }

  //add sounds for each button
  const sound = document.createElement('audio');
  sound.setAttribute('id', `${sign.sign}Sound`);
  sound.setAttribute('src', `sounds/${sign.lastName}.mp3`);
  createButton.appendChild(sound);

  //officially adds ball to page
  const zodiacPane = document.getElementById('zoneContent');
  zodiacPane.appendChild(createButton);

  //create player profiles
  //individual divs with class and id
  const createPlayerDiv = document.createElement('div');
  createPlayerDiv.setAttribute('class', 'zodiac_profiles');
  createPlayerDiv.setAttribute('id', sign.sign);
  createPlayerDiv.style.display = 'none';

  //generate player sign and name
  const playerSignElement = document.createElement('h1');
  const playerSign = document.createTextNode(`${player.sign}`)
  playerSignElement.appendChild(playerSign);
  createPlayerDiv.appendChild(playerSignElement);

  //load player image
  const playerImageElement = document.createElement('img');
  playerImageElement.setAttribute('src', `images/temp_images/${player.lastName}.jpg`);
  playerImageElement.setAttribute('class', 'playerPic');
  createPlayerDiv.appendChild(playerImageElement);

  //generate player nickname
  const playerNameElement = document.createElement('h2');
  const playerName = document.createTextNode(`${player.firstName} ${player.lastName} - "${player.nickname}"`);
  playerNameElement.appendChild(playerName);
  createPlayerDiv.appendChild(playerNameElement);

  //generate player quote
  const playerQuoteElement = document.createElement('p');
  const playerQuote = document.createTextNode(`${player.quote}`);
  playerQuoteElement.appendChild(playerQuote);
  createPlayerDiv.appendChild(playerQuoteElement);

  //reset button
  const resetButton = document.createElement('button');
  const resetText = document.createTextNode('Reset');
  resetButton.classList.add('resetButton');
  resetButton.addEventListener('click', reset, false);
  resetButton.appendChild(resetText);
  createPlayerDiv.appendChild(resetButton);

  //append all the player-specific values to elements & elements to HTML
  zodiacPane.appendChild(createPlayerDiv);
});

let balls = document.querySelectorAll('.zodiac_balls');
let profiles = document.querySelectorAll('.zodiac_profiles');
let sound = null;

//REVEALING the zodiac player based on button or form input
function playerReveal() {
  balls.forEach(ball => {
    ball.style.display = 'none';
  })

  profiles.forEach(profile => {
    if(profile.id == AstroSign) {
      profile.style.display = 'block';
      sound = document.getElementById(`${profile.id}Sound`);
      sound.play();
    } else {
      profile.style.display = 'none';
    }
  })
}

//reset action after player reveal
function reset() {
  balls.forEach(ball => {
    ball.style.display = 'initial';
  })
  document.getElementById(`${AstroSign}`).style.display = 'none';
  sound.pause();
  sound.load();
  AstroSign = null;
  console.log(AstroSign);
}

//ACTION for submit button listener
function processForm(submit) {
  //stops submit button from refreshing page
  submit.preventDefault();
  //sets up bday input to be used for calculating zodiac
  let birthday = new Date(document.getElementById('bday').value);
  whichMonth = birthday.getMonth();
  whichDayOfMonth = birthday.getDate();
  whichMonth++;
  whichDayOfMonth++;
  //the zodiac algorithm - courtesy of Phil & Jervis
  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Capricorn";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sagittarius";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Scorpio";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Libra";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Virgo";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Cancer";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gemini";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Taurus";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Aries";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pisces";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aquarius";
  }
  console.log(`${whichMonth}/${whichDayOfMonth} - ${AstroSign}`);
  playerReveal();
}

//add event listener to submit button
birthdayForm.addEventListener('submit', processForm, false);
