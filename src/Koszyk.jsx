import React from 'react';
import { useState } from 'react';


function Koszyk(props) {


  return (
    <>
        {props.sztuki>0? 
        (<h4>{props.nazwa}: {props.sztuki} sztuk, <span className='Cena'>{props.cena*props.sztuki} zł</span></h4>)
         : <></>}
    </>
  );
}

export default Koszyk;
