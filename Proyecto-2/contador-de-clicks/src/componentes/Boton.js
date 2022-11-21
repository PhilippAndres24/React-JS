import React from 'react';
import '../hoja-de-estilo/Boton.css';

function Boton({ texto, esBotondeClick, manejarClick }) { //Aca tenemos 3 props
  return(
    <button
    className={ esBotondeClick ? "boton-click" : 'boton-reiniciar' }
    onClick={manejarClick}>
      {texto}
    </button>

  );
}

export default Boton;