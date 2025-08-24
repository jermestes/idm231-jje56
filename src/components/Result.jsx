import Rings from './Rings.jsx';
function Result({result, onReset}) {
  if (!result) return <Rings />;
  return (
    <div className="lg:col-2">
      <div className="rounded-t-2xl border-lime border-1 bg-dark mb-5">
        <h2>{result.sign}</h2>
        <h3>{result.range}</h3>
        <h4 className="">{result.name}</h4>
        <p className="">{result.quote}</p>
      </div>
      
      <button onClick={onReset} className='m-auto block px-14 text-2xl bg-dark text-white text-shadow-lime'>Try Again</button>
    </div>
  );
}

export default Result;