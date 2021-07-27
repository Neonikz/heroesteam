import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHero } from '../../actions/heros';
import { heroImages } from '../../helpers/heroImages';


export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
}) => {

    const dispatch = useDispatch();

    //Funcion para eliminar un heroe
    const handleDelete = id => {
        dispatch( deleteHero(id) );
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
