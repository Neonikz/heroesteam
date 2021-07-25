import React from 'react';
import { Link } from 'react-router-dom';


export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    characters
}) => {


    return (
        <div className="card m-3 animate__animated animate__flash" style={ { maxWidth:540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ 'https://www.tonica.la/__export/1599939641284/sites/debate/img/2020/09/12/iron-man-fortnite.jpg_423682103.jpg' } className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title"> {superhero} </h5>
                    <p className="card-text">{alter_ego}</p>

                    {
                        ( alter_ego !== characters )
                            && <p className="card-text"> {characters} </p>
                    }
                    
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
