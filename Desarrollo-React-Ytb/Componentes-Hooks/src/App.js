import logo from './logo.svg';
import './App.css';
import Contadorhooks from './componentes/ContadorHooks/Contadorhooks';
import ScrollHooks from './componentes/ScrollHooks/ScrollHooks';
import Reloj from './componentes/RelojHooks/RelojHooks';
import RelojHooks from './componentes/RelojHooks/RelojHooks';
import AjaxHooks from './componentes/AjaxHooks/AjaxHooks';
import HooksPersonalizados from './componentes/HooksPersonalizados/HooksPersonalizados';


function App() {
  return (
    <div className="App">

      <hr />
      <Contadorhooks
        titulo="Seguidores" />
      <hr />
      <ScrollHooks />
      <hr />
      <RelojHooks />
      <hr />
      <AjaxHooks />
      <hr />
      <HooksPersonalizados />
    </div>
   

  );
}

export default App;
