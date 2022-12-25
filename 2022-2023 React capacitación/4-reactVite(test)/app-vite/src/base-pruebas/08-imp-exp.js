import heroes from  '../data/heroes';


export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);
// console.log(getHeroeById(1));



export const getHeroesByOwner = ( owner ) => heroes.filter( (heroes) => heroes.owner === owner );



