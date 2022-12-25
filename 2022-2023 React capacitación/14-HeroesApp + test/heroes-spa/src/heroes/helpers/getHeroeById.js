import { heroes } from "../data/heroes"


export const getHeroeById = (id) => {

    return heroes.find( hero => hero.id === id); //esto nos permite obtener la informacion de los heroes al dar click  en mas informacion para ver el perfil.


}
