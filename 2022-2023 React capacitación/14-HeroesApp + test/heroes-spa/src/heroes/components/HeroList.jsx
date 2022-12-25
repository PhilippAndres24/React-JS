import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(()=>  getHeroesByPublisher(publisher), [publisher]); //si llega a tener mas parametros, se inserta todo en el []

    return (
        // row-cols-1(pantalla chica) || row-cols-md-1 (pantalla mediana)
        <div className="row row-cols-1 row-cols-md-2 g-5"> 
            {
                heroes.map(hero => (
                   <HeroCard key={hero.id}
                    {...hero}
                   />
                ))
            }
        </div>
    )
}
