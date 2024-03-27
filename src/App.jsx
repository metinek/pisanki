import './App.css';
import React from 'react';
import { useState } from 'react';

//obrazki
import pomaranczowa from './img/pisanka1.png';
import czerwona from './img/pisanka2.png';
import rozowa from './img/pisanka3.png';
import turkusowa from './img/pisanka4.png';
import zielona from './img/pisanka5.png';
import zolta from './img/pisanka6.png';
//jajeczny baron
import baron from './img/jajecznybaron.png';


//komponenty
import Pisanka from './Pisanka.jsx';
import Koszyk from './Koszyk.jsx';

//tabela pisanek
const pisanki=[
{id:1, obrazek: pomaranczowa, nazwa: "pomarańczowa pisanka", cena: 5, sztuk: 0},
{id:2, obrazek: czerwona, nazwa: "czerwona pisanka", cena: 4, sztuk: 0},
{id:3, obrazek: rozowa, nazwa: "różowa pisanka", cena: 3, sztuk: 0},
{id:4, obrazek: turkusowa, nazwa: "turkusowa pisanka", cena: 6, sztuk: 0},
{id:5, obrazek: zielona, nazwa: "zielona pisanka", cena: 8, sztuk: 0},
{id:6, obrazek: zolta, nazwa: "żółta pisanka", cena: 7, sztuk: 0}
];




function App() {

  let [kwota, setKwota] = useState(0);
  let [sztuki, setSztuki] = useState(Array(6).fill(0));


  function Dodaj(cena, id) {
    let k=sztuki.slice();
    k[id-1]++;
    setSztuki(k);
    pisanki[id-1].sztuk++;


    setKwota(kwota+cena);
    {wyswietlKoszyk()}

  }

  function wyswietlKoszyk() {
    if (kwota<=0) return (<h4>Brak produktów w koszyku</h4>)
    else {
    return (
      <>



        {
          pisanki.map(
            (k)=>(
              <Koszyk key={"k"+k.id.toString()} 
              sztuki={k.sztuk}
              nazwa={k.nazwa}
              cena={k.cena}
              />
              
              )
            )
        }





      <h2>Cena: <span className='Cena'>{kwota} zł</span></h2>
    
      </>
    )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pisanki od jajecznego barona</h1>
        <img src={baron} alt="Jajeczny Baron (Obrazek)"/>
      </header>
      {pisanki.map( (e) => (<Pisanka key={e.id} nazwa={e.nazwa} obrazek={e.obrazek} cena={e.cena} klik = {() => Dodaj(e.cena, e.id)}  />) )}
      <div className='Koszyk'>
        <h2>Produkty:</h2>
        {wyswietlKoszyk()}
      </div>



    </div>
  );
}

export default App;
