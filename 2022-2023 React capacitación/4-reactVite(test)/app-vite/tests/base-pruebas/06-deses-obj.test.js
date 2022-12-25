import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Esto es una prueba objeto', () => {

    test('usContext debe retonar un obj', () => {

        const clave = 'probanding';
        const edad = '24';

        const datos = usContext(clave, edad);
        const testDatos = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        expect( datos ).toStrictEqual(testDatos);
    })

})