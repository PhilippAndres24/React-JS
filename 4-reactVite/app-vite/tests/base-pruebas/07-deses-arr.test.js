import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
    test ('debe de retonar un string  y un numero', () => {

        // const retorno = retornaArreglo();
        // console.log(retorno);
        const [ letters, numbers] = retornaArreglo();

        expect (letters).toBe ('ABC')
        expect (numbers).toBe ( 123 )

        // console.log(typeof letters) // Esto nos dice que tipo de variable es la que se esta evaluando.
        // console.log(typeof numbers)
        expect (typeof letters).toBe ('string') //toBe sirve para evaluar strings 
        expect (typeof numbers).toBe ('number')

        expect ( letters ).toEqual( expect.any(String)); //con esto verifica que esperaria cualquier cosa que fuera String
        expect ( numbers ).toEqual( expect.any(Number));
    });
 });