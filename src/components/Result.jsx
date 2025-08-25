import { useEffect } from 'react';
import Rings from './Rings.jsx';
function Result({result, onReset}) {
  if (!result) return <Rings />;
  return (
    <div className="lg:col-2 max-w-80">
      <div className="rounded-2xl border-lime border-1 bg-dark mb-5 text-left">
        <h2 className='text-dark font-body pl-4 uppercase text-3xl bg-lime rounded-t-2xl'>{result.zodiac}</h2>
        <img src={result.image} alt="" />
        <div className='pl-4'>
          <h3 className='text-lime font-body uppercase'>{result.range}</h3>
          <h4 className="">{result.name}</h4>
          <p className="">{result.quote}</p>
        </div>
        
      </div>
      
      <button onClick={onReset} className='m-auto block px-14 text-2xl bg-dark text-white text-shadow-lime'>Try Again</button>
    </div>
  );
}

export default Result;