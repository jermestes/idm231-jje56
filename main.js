/*THE ZODIAC ALGORITHM - courtest of Phil
if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }*/

//object constructor for the player profiles
function createZodiacPlayer(sign,firstName,lastName,nickname,quote) {
    this.sign = sign;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.quote = quote;
}

//creating the objects for each zodiac/player
var Capricorn = new createZodiacPlayer('Capricorn','leBron','james','King James','You strive for greatness. When all is said and done, the only debate will be whether you’re call you King or G.O.A.T');
var Aquarius = new createZodiacPlayer('Aquarius','michael','jordan','Air Jordan','Everyone wants to be like you. There’s just a certain "air" to you');
var Pisces = new createZodiacPlayer('Pisces','steph','curry','Chef Curry','The way you play might not be appreciated by old-timers, but the revolution you lead speaks for itself.');
var Aries = new createZodiacPlayer('Aries','kyrie','irving','Uncle Drew','You care about legacy and do not want to live in someone else’s shadow');
var Taurus = new createZodiacPlayer('Taurus','tim','duncan','The Big Fundamental','You understand the importance of fundamentals and it will make you a master of your craft');
var Gemini = new createZodiacPlayer('Gemini','allen','iverson','The Answer','You’re a trend-setter. Things you do may seem unorthodox, but people will come to love it');
var Cancer = new createZodiacPlayer('Cancer','kawhi','leonard','The Klaw','Some say you’re too quiet, but your laugh is unforgettable');
var Leo = new createZodiacPlayer('Leo','wilt','chamberlain','The Stilt','You walk and talk a big game. If others haven’t already seen it, just show them your stat sheet.');
var Virgo = new createZodiacPlayer('Virgo','james','harden','The Beard','You have an uncanny ability to score. This success could bring plenty of TRAVELLING!');
var Libra = new createZodiacPlayer('Libra', 'kevin','durant','The Slim Reaper','You’re one of a kind, but you worry too much about what others think. Be careful on social media!');
var Scorpio = new createZodiacPlayer('Scorpio','russell','westbrook','The Brodie','Loyalty is important to you. You’d rather put the team on your back then take the easy way out, and people respect that.');
var Sagittarius = new createZodiacPlayer('Sagittarius','larry','bird','The Hick from French Lick','You may not look the part, but there’s no doubt you can compete with the best');

//constructing the player profile objects for all 12 of the zodiac signs
let zodiacList = [Capricorn, Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius];

//Loop to generate a ball for each zodiac sign
zodiacList.forEach(sign => {
    const player = sign;
    const createButton = document.createElement('button');

    //Sets class for general shape/style, then ID for team colors, and text for what sign it is
    createButton.setAttribute('class','zodiac_balls');
    createButton.setAttribute('id',sign.firstName);
    const buttonText = document.createTextNode(sign.sign); 
    createButton.appendChild(buttonText);
    

    //adding sounds
    const sound = document.createElement('audio');
    sound.setAttribute('src', `sounds/${sign.lastName}.mp3`);
    createButton.appendChild(sound);

    //officially adds ball to page
    const zodiacPane = document.getElementById('zoneContent');
    zodiacPane.appendChild(createButton);

    //reset action after player reveal
    function reset(){
        document.getElementById('zoneContent').style.display = 'inherit';
        document.getElementById('playerRevealed').innerHTML = '';
        sound.pause();
    }

    //action of revealing the player for ball zodiac
    const playerPane = document.getElementById('playerRevealed')
    function playerReveal() {
        //Sound plays as zodiac balls disappear
        sound.play();
        document.getElementById('zoneContent').style.display = 'none';
        document.getElementById('zodiacZone').style.display = 'row-reverse';

        const playerSignElement = document.createElement('h1');
        const playerSign = document.createTextNode(`${player.sign}: ${player.firstName} ${player.lastName}`)

        const playerImageElement = document.createElement('img');
        playerImageElement.setAttribute('src',`images/temp_images/${player.lastName}.jpg`);
        playerImageElement.setAttribute('class','playerPic');

        //Generate player name
        const playerNameElement = document.createElement('h2');
        const playerName = document.createTextNode(`"${player.nickname}"`);

        //Generate player quote
        const playerQuoteElement = document.createElement('p');
        const playerQuote = document.createTextNode(`${player.quote}`);    

        //reset button
        const resetButton = document.createElement('button');
        const resetText = document.createTextNode('Reset');
        resetButton.addEventListener('click', reset, false);
        
        //Append all the player-specific values to elements & elements to HTML
        playerSignElement.appendChild(playerSign);
        playerPane.appendChild(playerSignElement);
        playerPane.appendChild(playerImageElement);
        playerNameElement.appendChild(playerName);
        playerPane.appendChild(playerNameElement);
        playerQuoteElement.appendChild(playerQuote);
        playerPane.appendChild(playerQuote);
        resetButton.appendChild(resetText);
        playerPane.appendChild(resetButton);
    }
    createButton.addEventListener('click', playerReveal, false);   
});

