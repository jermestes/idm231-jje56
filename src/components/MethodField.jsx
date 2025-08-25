function MethodField({ method, setMethod }) {
  const inputClasses = "peer mr-3";
  const labelClasses = "text-2xl mb-2 peer-checked:text-lime m-auto lg:m-0"; // fixed Tailwind color

  return (
    <fieldset className="lg:text-left">
      <legend className="text-2xl mb-2">Step 1 - Choose a method</legend>
      <div className="m-auto text-left w-max space-y-2 lg:w-auto">
        <div>
          <input
            type="radio"
            name="method"
            id="method-zodiac"
            value="zodiac"
            checked={method === "zodiac"}
            onChange={(e) => setMethod(e.target.value)}
            className={inputClasses}
          />
          <label htmlFor="method-zodiac" className={labelClasses}>
            Zodiac Sign
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="method"
            id="method-birthdate"
            value="birthdate"
            checked={method === "birthdate"}
            onChange={(e) => setMethod(e.target.value)}
            className={inputClasses}
          />
          <label htmlFor="method-birthdate" className={labelClasses}>
            Birthdate
          </label>
        </div>
      </div>
    </fieldset>
  );
}
export default MethodField;