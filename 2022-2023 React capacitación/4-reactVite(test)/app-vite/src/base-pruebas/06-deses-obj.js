

export const usContext = ( clave, edad) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})
