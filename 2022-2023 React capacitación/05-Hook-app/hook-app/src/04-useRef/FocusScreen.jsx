import React, { useRef } from 'react'

export const FocusScreen = () => {

        const inputRef = useRef();
        console.log(inputRef);

       const  onClick = () => {
            inputRef.current.select();
        };
    return (
        <>
            <h1>Focus Screen</h1>
            
            <hr />

            <input
                className="form-control"
                type="text"
                placeholder=""
                ref={ inputRef }
            ></input>

            <button
                onClick={onClick}
                className="btn btn-primary mt-2">
                Set focus
            </button>
        </>
    )
}
