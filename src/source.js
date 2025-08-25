export const signPlayers = {
  Capricorn: {
    zodiac: "Capricorn",
    name: "LeBron James",
    range: "December 22nd-January 19th",
    quote: "King James: You strive for greatness. When all is said and done, the only debate will be whether they call you King or G.O.A.T.",
  },
  Aquarius: {
    zodiac: "Aquarius",
    name: "Michael Jordan",
    range: "January 20th-February 18th",
    quote: "Air Jordan: Everyone wants to be like you. There’s just a certain 'air' to you.",
  },
  Pisces: {
    zodiac: "Pisces",
    name: "Steph Curry",
    range: "February 19th-March 20th",
    quote: "Chef Curry: The way you play might not be appreciated by old-timers, but the revolution you lead speaks for itself.",
  },
  Aries: {
    zodiac: "Aries",
    name: "Kyrie Irving",
    range: "March 21st-April 19th",
    quote: "Uncle Drew: You care about legacy and do not want to live in someone else’s shadow.",
  },
  Taurus: {
    zodiac: "Taurus",
    name: "Tim Duncan",
    range: "April 20th-May 20th",
    quote: "The Big Fundamental: You understand the importance of fundamentals. That will make you a master of your craft.",
  },
  Gemini: {
    zodiac: "Gemini",
    name: "Allen Iverson",
    range: "May 21st-June 20th",
    quote: "The Answer: You’re a trend-setter. Things you do may seem unorthodox, but people will come to love it.",
  },
  Cancer: {
    zodiac: "Cancer",
    name: "Kawhi Leonard",
    range: "June 21st-July 22nd",
    quote: "The Klaw: Some say you’re too quiet, but your laugh is unforgettable.",
  },
  Leo: {
    zodiac: "Leo",
    name: "Wilt Chamberlain",
    range: "July 23rd-August 22nd",
    quote: "The Stilt: You walk and talk a big game. If others haven’t already seen it, just show them your stat sheet.",
  },
  Virgo: {
    zodiac: "Virgo",
    name: "James Harden",
    range: "August 23rd-September 22nd",
    quote: "The Beard: You have an uncanny ability to score. This success could bring plenty of TRAVELLING!",
  },
  Libra: {
    zodiac: "Libra",
    name: "Kevin Durant",
    range: "September 23rd-October 22nd",
    quote: "The Slim Reaper: You’re one of a kind, but you worry too much about what others think. Be careful on social media!",
  },
  Scorpio: {
    zodiac: "Scorpio",
    name: "Russell Westbrook",
    range: "October 23rd-November 21st",
    quote: "The Brodie: Loyalty is important to you. You’d rather put the team on your back than take the easy way out, and people respect that.",
  },
  Sagittarius: {
    zodiac: "Sagittarius",
    name: "Larry Bird",
    range: "November 22nd-December 21st",
    quote: "The Hick from French Lick: You may not look the part, but there’s no doubt you can compete with the best.",
  },
};

for (const key in signPlayers) {
  if (signPlayers.hasOwnProperty(key)) { 
    let lastName = signPlayers[key].name.split(" ")[1].toLowerCase();
    signPlayers[key].sound = '/sounds/' + lastName + '.mp3';
    signPlayers[key].image = '/images/' + lastName + '.jpg';
  }
}