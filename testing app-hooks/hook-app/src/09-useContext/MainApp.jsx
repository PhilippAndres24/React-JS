import { Navigate, Route, Routes, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { Nav } from "./components/Nav"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"


export const MainApp = () => {
  return (
    <UserProvider>

      <Nav />
      <hr />



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<LoginPage />}> </Route>
        <Route path="/*" element={<Navigate to="/about" />}> </Route>
      </Routes>
    </UserProvider>
  )
}
