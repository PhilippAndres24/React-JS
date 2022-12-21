import { useEffect } from "react"
import { useForm } from "../hooks/useForm";



export const FormConCustomHooks = () => {
    
    const {formState, onInputchange, onResetForm ,username, email, password } = useForm({
        username: "",
        email: "",
        password: "",
    })

    // const { username, email, password} = formState;

    useEffect(() => {
        // console.log('Entro');

    }, []); //cuando se deja el arreglo vacio, se ejectuta solo una vez.


    useEffect(() => {
        // console.log('formState Cambió!');

    }, [formState]);

    useEffect(() => {
        // console.log('Email Cambió!');

    }, [email]);


    return (
        <>
            <h1>Formulario con Custom Hooks</h1>
            <hr />


            <input
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputchange}
                type="text" />

            <input
                className="form-control mt-2"
                placeholder="felipecof97@gmail.com"
                name="email"
                value={email}
                onChange={onInputchange}
                type="email" />

            <input
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputchange}
                type="password" />
            <button 
            onClick={onResetForm}
            className="btn btn-primary mt-2">
            Limpiar
            </button>

        </>
    )
}
