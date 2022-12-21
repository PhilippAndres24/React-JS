import { useState } from "react"
import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {


    const { descripcion, onInputchange, onResetForm, } = useForm({      //ocupamos hook useForm
        descripcion: ''
    })


    const onFormSubmit = (e) => {
        
        e.preventDefault();
        
        if(descripcion.length <= 1) return;

        const newTodo= {
            id : new Date().getTime(),
            done:false,
            descripcion: descripcion,
        }
        
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                    name="descripcion"
                    value={descripcion}
                    onChange={onInputchange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >Agregar</button>

            </form>

        </>
    )
}
