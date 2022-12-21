
import { useCounter,useFetch  } from "../hooks/";
import { LoadingRickyMorti, InfoRickyMorti } from "./";

export const MultipleCustomHooks = () => {
 
  const { counter, increment, decrement, reset } = useCounter(); //para llamar la initialValue debemos declarar esto antes de pasar a la api.
  const { data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
  
  const { species, name } = !!data && data; //!!data && data ( si data existe entonces muestra data.)

  
  return (
    <>
        <h1>Ricky and Morty</h1>
        <hr />

        {
          isLoading 
          ? <LoadingRickyMorti />
          : <InfoRickyMorti species={ species } name={ name } />
         
        }
        <button onClick={()=> increment()} className="btn btn-primary" disabled={ isLoading}>
          Siguiente Clase
        </button>
        <button onClick={()=> decrement()} className="btn btn-primary">
          Clase Anterior
        </button>
        <button onClick={()=> reset()} className="btn btn-primary">Reiniciar</button>

    </>
  )
}
