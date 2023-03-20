import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg'
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />

                    <ul>
                        <li>
                            <NavLink className={ ({isActive})=> isActive ? 'nav-active': '' } to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({isActive})=> isActive ? 'nav-active': '' } to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({isActive})=> isActive ? 'nav-active': '' } to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>About Page</h1>}></Route>
                    <Route path="users" element={<h1>User Page</h1>}></Route>
                    <Route path="home" element={<h1>Home Page</h1>}></Route>
                    <Route path="/*" element={<Navigate to="/home" replace></Navigate>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
