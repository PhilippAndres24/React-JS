import { Link, NavLink } from 'react-router-dom';

export const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                    <NavLink to="/" className= { ({isActive }) => `nav-link ${ isActive ? 'active'  : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className= { ({isActive }) => `nav-link ${ isActive ? 'active'  : ''}`}>
                        About
                    </NavLink>
                    <NavLink to="/login" className= { ({isActive }) => `nav-link ${ isActive ? 'active'  : ''}`}>
                        Login
                    </NavLink>    
                    
                    </div>
                </div>
            </div>
        </nav>


    )
}
