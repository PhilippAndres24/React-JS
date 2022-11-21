import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {

    const [scrollY, setScrollY] = useState(0); //usf para crear rapido
    useEffect(() => {  //uef para crear rapido atajo
        console.log("MOVIENDO SCROLL")    //FASE MONTAJE

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);
        return () => {
            window.removeEventListener("scroll", detectarScroll)
            // console.log("FASE DE DESMONTAJE.")
        }
        
    }, [scrollY]); //sE ACTUALIZA CUANDO CIERTAS VARIABLES CAMBIEN.

    useEffect(() => {
        // console.log("FASE DE MONTAJE")
    }, [scrollY]);

    useEffect(() => {
        // console.log("FASE DE ACTUALIZACION")
    });

    useEffect(() => {
       return () => {
        // console.log("FASE DE DESMONTAJE") //DE ESTA FORMA SE DESMONTA
       }
    });
    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador{scrollY}px</p>
        </>

    );
}