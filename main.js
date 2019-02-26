//object constructor for the player profiles
function createZodiacPlayer(sign,firstName,lastName,quote) {
    this.sign = sign;
    this.firstName = firstName;
    this.lastName = lastName;
    this.quote = quote;
}

//constructing the player profile objects for all 12 of the zodiac signs
let zodiacList = [];


function insertZodiac(sign, firstName, lastName, quote) {
    var zodiac = new createZodiacPlayer(sign, firstName, lastName, quote);
    zodiacList.push(zodiac);
}


insertZodiac('Capricorn','LeBron','James','You strive for greatness. When all is said and done, the only debate will be whether you’re call you King or G.O.A.T');
insertZodiac('Aquarius','Michael','Jordan','Everyone wants to be like you. There’s just a certain "air" to you');
insertZodiac('Pisces','Steph','Curry','The way you play might not be appreciated by old-timers, but the revolution you lead speaks for itself.');
insertZodiac('Aries','Kyrie','Irving','You care about legacy and do not want to live in someone else’s shadow');
insertZodiac('Taurus','Tim','Duncan','You understand the importance of fundamentals and it will make you a master of your craft');
insertZodiac('Gemini','Allen','Iverson','You’re a trend-setter. Things you do may seem unorthodox, but people will come to love it');
insertZodiac('Cancer','Kawhi','Leonard','Some say you’re too quiet: but your laugh is unforgettable');
insertZodiac('Leo','Wilt','Chamberlain','You walk and talk a big game. If others haven’t already seen it, just show them your stat sheet.');
insertZodiac('Virgo','James','Harden','You have an uncanny ability to score. This success could bring plenty of travelling!');
insertZodiac('Libra', 'Kevin','Durant','You’re one of a kind, but you worry too much about what others think. Be careful on social media!');
insertZodiac('Scorpio','Russell','Westbrook','Loyalty is important to you. You’d rather put the team on your back then take the easy way out, and people respect that.');
insertZodiac('Sagittarius','Larry','Bird','You may not look the part, but there’s no doubt you can compete with the best');


//loop to create zodiac balls
console.log(zodiacList);

//Generate a ball for each zodiac sign
zodiacList.forEach(sign => {
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

    function playSound() {
        sound.play();
    }
    createButton.addEventListener('click', playSound, false)
    
    //Officially adds ball to page
    const zodiacPane = document.getElementById('zodiacZone');
    zodiacPane.appendChild(createButton); 
});

