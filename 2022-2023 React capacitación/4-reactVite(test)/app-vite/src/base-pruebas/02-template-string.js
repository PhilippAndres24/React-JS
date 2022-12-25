




export function getSaludo(nombre) { //Tenemos que export a la funcion para realizar la prueba
    return 'Hola ' + nombre;
}

const nombre = 'Felipe';
console.log( `Este es un texto: ${ getSaludo( nombre ) }` );