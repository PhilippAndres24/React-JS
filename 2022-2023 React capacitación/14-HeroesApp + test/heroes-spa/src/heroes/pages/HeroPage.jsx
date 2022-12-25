import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";
import { useMemo } from 'react';
//usememo es para memorizar valores, y useCallback para memorizar funciones

export const HeroPage = () => {

    const { id } = useParams(); //Utilizamos esto como hook de router dom para obtener la id
    // console.log(id,rest  );
    const hero =  useMemo(()=> getHeroeById(id), [id]); //Aca llamamos al helpers con el parametro id.
    
// 
    const navigate = useNavigate(); 
    const onNavigateBack = () => {          //con esto navegamos a traves del button con el atributo onClick
        navigate('/', {
            replace: true
        });
    };
// 

    // console.log(hero);
    if (!hero) {
        return <Navigate to="/marvel" />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 card">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3"><b>Characters</b></h5>
                <p><small>{hero.characters}</small></p>
                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >Regresar
                </button>
            </div>

        </div>

    )
}
