import { signPlayers } from "../source";
const inputClasses = "bg-white text-black text-2xl";

function DataField({
  method,
  zodiac,
  setZodiac,
  birthdate,
  setBirthdate,
}) {
  if (method === "zodiac") {
    return (
      <div className="my-16">
        <label htmlFor="" className="text-2xl">Step 2 - Choose a zodiac sign</label>
        <select
          value={zodiac}
          onChange={(e) => setZodiac(e.target.value)}
          className={inputClasses}
        >
          <option value="">-- Select a sign --</option>
          {Object.keys(signPlayers).map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </div>
      
    );
  }

  return (
    <div className="my-16">
      <label htmlFor="" className="text-2xl">Step 2 - Enter a birthdate</label>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        className={inputClasses}
      />
    </div>
    
  );
}

export default DataField;