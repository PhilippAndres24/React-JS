// import { getUser } from "../../src/base-pruebas/05-funciones";

import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

// describe('Esto es una prueba a funciones', () => { 

//     test('getUser debe retonar un objeto', () => { 

//         const testUser= {
//             uid: 'ABC123',
//             username: 'El_Papi1502'
//         }

//         const user = getUser();

//         expect( testUser ).toStrictEqual( user ) ; //cuando son objetos debe ser con toStrictEqual
//      });
//  });

describe('Esto es una prueba a Funciones', () => {

    test('getUsuarioActivo debe retonar a un objeto', () => {

        const nombre = 'Felipe';
        const user = getUsuarioActivo(nombre);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });
    })

})