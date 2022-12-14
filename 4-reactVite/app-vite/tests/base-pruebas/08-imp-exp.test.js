import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retonar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });
});