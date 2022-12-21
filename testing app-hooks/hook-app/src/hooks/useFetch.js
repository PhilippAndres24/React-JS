import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
     
            setState({
                ...state,
                isLoading: true, //              //estaria cargando hasta ejecutar la peticion fetch abajo
            })
            const response = await fetch(url);
            const data = await response.json(); //se realizo la peticion

            setState({              //actualizamos el estado de data, dejamos el loading en false ya que encontró, y el error en null.
                data,
                isLoading: false,
                hasError: null,
            });

            // console.log(data);

    }

    useEffect(() => {
        getFetch();


    }, [url])



    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
