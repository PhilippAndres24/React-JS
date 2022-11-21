
import './App.css';
import freecodecamplogo from './imagenes/freecodecamplogo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js'
import { useState } from 'react';
import { evaluate } from 'mathjs'; /* Libreria para calculos matematicos npm install mathjs */

function App() {

  const [input, setInput] = useState('');

  const tomarvaloresInput = val => {
    setInput(input + val);
  };

  const calcular = () => {
    if (input)
    {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos.")
    }

  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freecodecamplogo}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={tomarvaloresInput}>1</Boton>
          <Boton manejarClick={tomarvaloresInput}>2</Boton>
          <Boton manejarClick={tomarvaloresInput}>3</Boton>
          <Boton manejarClick={tomarvaloresInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={tomarvaloresInput}>4</Boton>
          <Boton manejarClick={tomarvaloresInput}>5</Boton>
          <Boton manejarClick={tomarvaloresInput}>6</Boton>
          <Boton manejarClick={tomarvaloresInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={tomarvaloresInput}>7</Boton>
          <Boton manejarClick={tomarvaloresInput}>8</Boton>
          <Boton manejarClick={tomarvaloresInput}>9</Boton>
          <Boton manejarClick={tomarvaloresInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={tomarvaloresInput}>0</Boton>
          <Boton manejarClick={tomarvaloresInput}>.</Boton>
          <Boton manejarClick={tomarvaloresInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
