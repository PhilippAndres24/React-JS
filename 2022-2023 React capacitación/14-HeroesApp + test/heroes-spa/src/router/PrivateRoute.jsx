import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

//rutas de navegacion privada

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext); //el logged lo sacamos del hooks reducer, el primer atributo logged.
    const {pathname, search} = useLocation();
    // console.log(location);

    const lastPath = pathname + search //estos pathname + search [Lo sacamos de aqui console.log(location); en el componente search]
    localStorage.setItem('lastPath', lastPath)

    
    return (logged)
    ? children //si logged esta true le pasamos el children.
    : <Navigate to="/login" />; //Si no es true, lo dirigimos directamente a la pagina de login, para que no tenga acceso a las otras pages por url.
}