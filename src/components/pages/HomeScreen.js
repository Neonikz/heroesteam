import React from 'react';
import { heroes } from '../../data/heroes';
import { HeroCard } from './HeroCard';


export const HomeScreen = () => {

    let heros = [];
    for (let i = 0; i < 6; i++) {
        heros = [...heros, heroes[i] ]
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center flex-column ">
                    <h1 className="text-center text-white fw-bold">HOME</h1>
                    <h4 className="text-center text-secondary fw-bold">Por favor, diseñe su equipo...</h4>
                </div>
            </div>

            <div className="row">
                <div className="card-columns col d-flex flex-wrap mt-5 align-content-center justify-content-center animate__animated animate__fadeInRight">
                    {
                        heros.map( hero => (
                            <HeroCard 
                                key={hero}
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
