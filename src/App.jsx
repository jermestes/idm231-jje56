import { useState } from 'react'
import './App.css'
import MethodField from "./components/MethodField";
import DataField from "./components/DataField";
import Result from './components/Result.jsx';
import { signPlayers } from "./source";

function getSignFromDate(date) {
  const fullDate = new Date(date);
  const month = fullDate.getUTCMonth() + 1;
  const day = fullDate.getUTCDate();
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  return "";
}

function App() {
  const [method, setMethod] = useState("zodiac");
  const [zodiac, setZodiac] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let chosenZodiac = zodiac;
    if (method === "birthdate" && birthdate) {
      chosenZodiac = getSignFromDate(birthdate);
    }
    if (chosenZodiac) {
      setResult(signPlayers[chosenZodiac]);
    }
  };

  const handleReset = () => {
    setZodiac("");
    setBirthdate("");
    setResult(null);
  };

  let mobileSwapClass = result ? "mobile-hide" : "";

  return (
    <div className='min-h-screen bg-[radial-gradient(50%_50%_at_50%_50%,rgba(175,161,88,0.5)_0%,rgba(0,122,193,0)_100%)] lg:bg-dark lg:grid lg:grid-cols-2 lg:text-left lg:content-start p-8 lg:pl-32 lg:justify-center'>
      <div>
        <h1 className='text-5xl'>NBA Zodiac</h1>

        <p className={'my-8 ' + mobileSwapClass}>Think you know what type of hooper you are? Use the form below to find out which NBA superstar aligns with your zodiac sign!</p>

        <form onSubmit={handleSubmit} className={'lg:text-left lg:col-1 ' + mobileSwapClass}>
          <MethodField method={method} setMethod={setMethod} />
          <DataField 
            method={method}
            zodiac={zodiac}
            setZodiac={setZodiac}
            birthdate={birthdate}
            setBirthdate={setBirthdate}
          />     

          <label htmlFor="submit" className="text-2xl">Step 3 - Click submit!</label>
          <button onClick={handleSubmit} type="submit" id="submit" value="Submit" className='m-auto lg:m-0 block px-14 text-2xl bg-lime text-dark'>Submit</button>
        </form>
      </div>


      <Result result={result} onReset={handleReset} />
    </div>
  )
}

export default App
