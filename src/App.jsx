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
    setMethod("zodiac");
    setZodiac("");
    setBirthdate("");
    setResult(null);
  };

  return (
    <>
      <h1 className='text-5xl'>NBA Zodiac</h1>

      <p className='my-8'>Think you know what type of hooper you are? Use the form below to find out which NBA superstar aligns with your zodiac sign!</p>

      <form onSubmit={handleSubmit}>
        <MethodField method={method} setMethod={setMethod} />
        <DataField 
          method={method}
          zodiac={zodiac}
          setZodiac={setZodiac}
          birthdate={birthdate}
          setBirthdate={setBirthdate}
        />     

        <label htmlFor="submit" className="text-2xl">Step 3 - Click submit!</label>
        <button type="submit" id="submit" value="Submit" className='m-auto block px-14 text-2xl bg-lime text-dark'>Submit</button>
      </form>


      <Result result={result} onReset={handleReset} />
    </>
  )
}

export default App
