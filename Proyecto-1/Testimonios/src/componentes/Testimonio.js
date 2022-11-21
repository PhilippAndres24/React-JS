import React from 'react'; //Nos permite utilizar tdo el poder de react en componente
import '../hojas-de-estilo/Testimonio.css'
//vamos a utilizar props para recibir valores y utilizarlos en nuestros componentes
export function Testimonio(props) { //Esta forma es para exportacion nombrada que sirve para varios elementos dentro del archivo.

  return (
    
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.jpg`)} alt='Foto de Andrea' />
      <div className='contenedor-texto-testimonio'>

        <p className='nombre-testimonio'>
        <strong>{props.nombre}</strong> en {props.pais} 
        </p>

        <p className='cargo-testimonio'>
        {props.cargo} en <strong>{props.empresa}</strong>
        </p>

        <p className='texto-testimonio'>
        "{props.testimonio}"
        </p>

      </div>
    </div>

  );

}

// export default Testimonio; 
//exportacion por defecto te permite decir que este va a ser el unico componente o unico elemento que se va exportar de este archivo
//export nombrada se puede exportar varios elementos de un puro archivo, se debe especificar.