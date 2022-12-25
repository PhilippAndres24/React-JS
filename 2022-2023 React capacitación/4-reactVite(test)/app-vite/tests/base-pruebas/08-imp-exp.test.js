import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
// import heroes from "../../src/data/heroes.js";
// describe('Pruebas en 08-imp-exp', () => {

//     test('getHeroeById debe retonar un heroe por ID | si no existe que me sea undefined', () => {
//         const id = 100;
//         const hero = getHeroeById(id);
//         console.log(hero);

//         // expect(hero).toEqual({
//         //     id: 1,
//         //     name: 'Batman',
//         //     owner: 'DC'
//         // })
//         expect (hero).toBeFalsy(); //esto verifica si es undefined, si resulta ser undefined el test estara 
//                                                                                                     //  aprobado
       
//     });
// });

describe('Pruebas en 08 imp-exp', () => { 

    test('getHeroesByOwner Retornar un arreglo con los heroes DC| Los primeros 3', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect( heroes.length ).toBe(3); //con esto yo verifico la cantidad segun heroes.length toBe 3
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect( heroes ).toEqual( heroes.filter( (heroes) => heroes.owner === owner ));
    });

 })