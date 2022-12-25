import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../UI/"
import { DcPage, HeroPage, MarvelPage, Search } from "../pages"


export const HeroesRoutes = () => {
    return (
        <>

            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />}></Route>
                    <Route path="dc" element={<DcPage />}></Route>
                    <Route path="search" element={<Search />}></Route>
                    {/* al poner :id es para cuando seleccionemos un heroe nos dirija la url con el personaje correspondiente. */}
                    <Route path="hero/:id" element={<HeroPage />}></Route> 

                    {/* search, hero by id */}
                    <Route path="/*" element={<Navigate to="/marvel" />}></Route>
                </Routes>
            </div>

        </>
    )
}
