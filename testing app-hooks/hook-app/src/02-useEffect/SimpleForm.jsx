import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "iwasoski",
        email: "felipecof97@gmail.com",
    })

    const { username, email } = formState;

    const onInputchange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });

    };


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
            <h1>Formulario Simple</h1>
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

            {
                username === "iwasoski2" && <Message />
            }

        </>
    )
}
