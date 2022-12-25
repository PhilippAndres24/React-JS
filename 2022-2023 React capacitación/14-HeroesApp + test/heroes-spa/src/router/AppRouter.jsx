import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"



export const AppRouter = () => {
  return (
    <>

      <Routes>
        {/* ACA EN CASO DE ESTAR AUTENTIFICADO CON EL USUARIO NO PODREMOS VOLVER AL LOGIN POR URL. (INVERSA) */}{/* --------------------------------------------------------------------------- */}
        <Route path="/login" element={
          <PublicRoute>
              <LoginPage />
          </PublicRoute>
        }>

        </Route>
        <Route path="login" element={<LoginPage />}></Route>

        {/* CON ESTO LE DAMOS LA RUTA PRIVADA, EN CASO QUE SE ENCUENTRE EN LOGIN NO PUEDA ACCEDER POR URL A LAS PAGINAS. */}{/* --------------------------------------------------------------- */}
        <Route path="/*" element={ 
          <PrivateRoute>                
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* Esta ruta de abajo toca proteger con lo que se implementa en la linea 16. */}
        <Route path="/*" element={<HeroesRoutes />}></Route>
        {/* --------------------------------------------------------------------------- */}{/* --------------------------------------------------------------------------- */}
      </Routes>
    </>
  )
}
