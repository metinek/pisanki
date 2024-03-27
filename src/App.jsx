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

//komponenty
import Pisanka from './Pisanka.jsx';

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


  function Dodaj(cena) {
    setKwota(kwota+cena);
    {wyswietlKoszyk}
  }

  function wyswietlKoszyk() {
    if (kwota<=0) return (<p>Brak produktów w koszyku</p>)
    else {
    return (
    <h2>Cena: <span className='Cena'>{kwota} zł</span></h2>
    
    
    )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pisanki</h1>
      </header>
      {pisanki.map( (e) => (<Pisanka key={e.id} nazwa={e.nazwa} obrazek={e.obrazek} cena={e.cena} klik = {() => Dodaj(e.cena)}  />) )}
      <div className='Koszyk'>
        <h2>Produkty:</h2>
        {wyswietlKoszyk}
      </div>



    </div>
  );
}

export default App;
