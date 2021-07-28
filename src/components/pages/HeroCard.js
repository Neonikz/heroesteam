import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHero } from '../../actions/heros';
import { heroImages } from '../../helpers/heroImages';
import { useDeleteStats } from '../../hooks/useDeleteStats';


export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    powerstats
}) => {

    const dispatch = useDispatch();
    const [ deleteHeroStat ] = useDeleteStats();
    const { herosTeam } = useSelector( state => state.hero );
    if(herosTeam.lenght===0) {return null;}


    //Funcion para eliminar un heroe
    const handleDelete = id => {
        deleteHeroStat( id ); 
        dispatch( deleteHero(id) );
    }
    const {intelligence, strength, speed, durability, power, combat} = powerstats;

    return (
        <div className="card m-3 overflow-hidden animate__animated animate__flash" style={ { maxWidth:300} }>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={ heroImages(`./${id}.jpg`).default } className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title fw-bolder"> {superhero} </h5>
                    <p className="card-text fst-italic">{alter_ego}</p>
                    <p className="card-title fw-bolder">Estadisticas:</p>
                    <p className="card-text">Inteligencia: {intelligence}</p>
                    <p className="card-text">Fuerza: {strength}</p>
                    <p className="card-text">Velocidad: {speed}</p>
                    <p className="card-text">Durabilidad: {durability}</p>
                    <p className="card-text">Poder: {power}</p>
                    <p className="card-text">Combate: {combat}</p>

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
                            className="btn btn-danger"
                            onClick={ () => handleDelete(id) }
                        >
                            Borrar &times;
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
