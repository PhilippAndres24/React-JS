import React, { useState } from 'react'



export default function Contadorhooks(props) {
  const [contador, setContador] = useState(0)
  // console.log(useState());

  const sumatoria = () => setContador(contador + 1);
  const sustraccion = () => setContador(contador - 1);
  return (
    <>
      <h2>Hooks useState</h2>
      <nav>
        <button onClick={sustraccion}> - </button>
        <button onClick={sumatoria}> + </button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
    </>
  );
}

Contadorhooks.defaultProps = {
  titulo:'Clicks',
};