import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freecodeCampLogo from './imagenes/freecodecamplogo.png'
import { useState } from 'react';

function App() {
    //Arreglo 
  const [numClics, setNumClics] = useState(0);
        

  const manejarClick = () => {
    console.log('Click');
    setNumClics(numClics + 1); //Aca se actualiza el valor numclick +1
  };
  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumClics(0);
  };


  return (
    <div className="App">

      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freecodeCampLogo}
          alt='Logo de freecodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics} />
        <Boton
          texto='Click'
          esBotondeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotondeClick={false}
          manejarClick={reiniciarContador} />

      </div>


    </div>

  );
}

export default App;
