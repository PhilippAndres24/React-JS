import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import styles from './nav.css';

export const Navbar = () => {
    
    const {user, logout} = useContext(AuthContext) //pasamos el user del login.
    // console.log(user);
    
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
        logout();
    }

    return (
        // <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

        //     <Link
        //         className="navbar-brand"
        //         to="/"
        //     >
        //         Asociaciones
        //     </Link>

        //     <div className="navbar-collapse">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/search"
                        >
                            Search
                        </NavLink>
                        {/* <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/hero"
                    >
                        Hero
                    </NavLink> */}
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">

                            <span className={`nav-item nav-link text-primary`}>

                                { user?.name }
                            </span>

                            <button className={`nav-item nav-link btn`} onClick={onLogout}>

                                Logout

                            </button>

                        </ul>
                    </div>
                </div>

                {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <span className="nav-item nav-link text-primary">
                            Iwasoski
                        </span>

                        <button className="nav-item nav-link btn" onClick={onLogout}>
                            Logout
                        </button>

                    </ul>
                </div> */}
            </div>
        </nav>
    )
}