import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs()', () => {

    test('Debe de retonar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');
        // console.log(gifs);

        // expect ( gifs.length).toBe( 10 ); //se verifica la cantidad de datos del array que esta trayendo.. en este caso son 20 que dejamos predefinidos.
        expect ( gifs.length ).toBeGreaterThan( 0 ); //que el largo de datos que traiga mas de un elemento mayor a 0 ||esto verifica que el arreglo de datos, la cantidad de datos sea mayor a 0.
        expect ( gifs[0] ).toEqual ({
            id: expect.any( String ),
            title:expect.any( String ),
            url: expect.any( String ),
        });   //se verifica si el gifs posicion 0 trae los datos que corresponde, id , title , url  
     });

});