import Rings from './Rings.jsx';
function Result({player, onReset}) {
  if (!player) return <Rings />;
  return (
    <div className="">
      <div className="">
        <h2>{player.sign}</h2>
        <h3>{player.range}</h3>
        <h4 className="">{player.name}</h4>
        <p className="">{player.desc}</p>
      </div>
      
      <button onClick={onReset} className="">Try Again</button>
    </div>
  );
}

export default Result;