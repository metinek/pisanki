import './Pisanka.css';


function Pisanka(props) {
  return (
    <div className="Pisanka">
        <img src={props.obrazek} alt={props.nazwa}/>
        <h3>{props.nazwa}</h3>
        <p>Cena: <span className='Cena'>{props.cena} zł</span></p>
        <button onClick={props.klik}>Kup</button>
    </div>
  );
}

export default Pisanka;
