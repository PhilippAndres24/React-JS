import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

//rutas de navegacion privada

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext); //el logged lo sacamos del hooks reducer, el primer atributo logged.

    return (!logged)
    ? children //si logged esta false entonces le pasamos el children.
    : <Navigate to="/marvel" />; //Si no es true, lo dirigimos directamente a la pagina de login, para que no tenga acceso a las otras pages por url.
}