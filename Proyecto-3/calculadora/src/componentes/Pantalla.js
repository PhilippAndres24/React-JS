import React from 'react';
import '../hojas-de-estilo/Pantalla.css';
const Pantalla = ({ input }) => (   //normalmente este tipo de sintaxis lo podemos usar para componentes mas sencillos, que tienen una presentacion

    <div className='input'>
        {input}
    </div>
);

export default Pantalla;