import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';


export const HeroCardSearch = ({ 
    id,
    superhero,
    alter_ego,
    characters
}) => {


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
                        >
                            Agregar!
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
