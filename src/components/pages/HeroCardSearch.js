import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addHero } from '../../actions/heros';
import { heroes } from '../../data/heroes';
import { heroImages } from '../../helpers/heroImages';
import { Error } from '../error/Error';


export const HeroCardSearch = ({ 
    id,
    superhero,
    alter_ego,
    characters
}) => {

    const dispatch = useDispatch();

    const { herosTeam } = useSelector( state => state.hero );

    const [error, setError] = useState(false);

   //Funcion para añadir heroe al team
    const handleAdd = (id) => {

        // Validamos si hay espacio en el team o si el heroe ya existe
        const heroExist = herosTeam.find(hero => hero.id === id); 
        console.log(heroExist);
        if(herosTeam.length === 6 || heroExist !== undefined ){
            return setError(true);
        }
        setError(false);

        //Filtramos el heroe
        const hero = heroes.filter(hero=> hero.id === id)
        dispatch( addHero(hero[0]) );
    }


    return (
        <div className="card m-3 overflow-hidden animate__animated animate__flash" style={ { maxWidth:300} }>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={ heroImages(`./${id}.jpg`).default } className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title"> {superhero} </h5>
                    <p className="card-text">{alter_ego}</p>

                    {/* {
                        ( alter_ego !== characters )
                            && <p className="card-text"> {characters} </p>
                    } */}
                    
                    <div className="d-flex justify-content-between">
                        <Link 
                            to={ `./hero/${ id }` }
                            className="link-info"    
                        >
                            Ver mas...
                        </Link>
                        
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={ () => handleAdd(id) }
                        >
                            Agregar!
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            {
                error && <Error message="Equipo completo o heroe ya existente." /> 
            }
        </div>
    )
}
