
import { useCounter,useFetch  } from "../hooks/";
import { LoadingRickyMorti, InfoRickyMorti } from "../03-examples/index.js";

export const Layout = () => {
 
  const { counter, increment, decrement, reset } = useCounter(); //para llamar la initialValue debemos declarar esto antes de pasar a la api.
  const { data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
  
  const { species, name } = !!data && data; //!!data && data ( si data existe entonces muestra data.)

  
  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
          isLoading 
          ? <LoadingRickyMorti />
          : <InfoRickyMorti species={ species } name={ name } />
         
        }
        <button onClick={()=> increment()} className="btn btn-primary">
          Siguiente Clase
        </button>
        <button onClick={()=> decrement()} className="btn btn-primary">
          Clase Anterior
        </button>
        <button onClick={()=> reset()} className="btn btn-primary">Reiniciar</button>

    </>
  )
}
