import { useEffect } from 'react';
import Rings from './Rings.jsx';
function Result({result, onReset}) {
  if (!result) return <Rings />;
  return (
    <div className="lg:col-2 w-full max-w-100 my-8 justify-self-center">
      <div className="rounded-2xl border-lime border-1 bg-dark mb-5 text-left">
        <h2 className='text-dark font-body px-4 py-2  uppercase text-3xl bg-lime rounded-t-2xl'>{result.zodiac}</h2>
        <img src={result.image} alt="" />
        <div className='px-4 pt-2 pb-5'>
          <h3 className='text-lime font-body uppercase'>{result.range}</h3>
          <h4 className="text-3xl">{result.name}</h4>
          <p className="">{result.quote}</p>
        </div>
      </div>

      
      
      <button onClick={onReset} className='m-auto block px-14 py-2 text-2xl bg-dark text-white text-shadow-lime w-full try-again '>Try Again</button>
    </div>
  );
}

export default Result;