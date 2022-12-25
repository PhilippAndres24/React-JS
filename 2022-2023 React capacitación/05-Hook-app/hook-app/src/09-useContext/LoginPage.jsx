import { useContext } from "react";
import { UserContext } from "./context/userContext";


export const LoginPage = () => {

  const {user, setUser}= useContext( UserContext );


  console.log(user);
  return (
    <>
    <h1>LoginPage</h1>
    <hr />
    <pre aria-label="preuser">
       {JSON.stringify( user, null, 3)}
    </pre>
    <button aria-label="btn"className="btn btn-primary" onClick={() => setUser( { id:123, name:'Juan', email: 'juan@google.com'} ) }>
      Establecer usuario
    </button>
    </>

  )
}

