import './Pisanka.css';


function Pisanka(props) {
  return (
    <div className="Pisanka">
        <img src={props.obrazek} alt={props.nazwa}/>
        <h3>{props.nazwa}</h3>
        <p>Cena: <span className='Cena'>{props.cena} zł</span></p>
        <button onClick={props.klik1}>Kup</button>
        <button onClick={props.klik2}>Usuń</button>
    </div>
  );
}

export default Pisanka;
