import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {
    //con esta linea de instruccion al cerrar sesion, 
    const lastPath = localStorage.getItem('lastPath') || '/'; //si esto es nulo, esa condicion '|| '/' lo manda al link de home.

    login( 'Felipe Cofre' );
    
    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
