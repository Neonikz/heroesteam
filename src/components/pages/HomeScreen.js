import React from 'react';
import { getHeros } from '../../helpers/getHeros';
import { HeroCard } from './HeroCard';


export const HomeScreen = () => {

    const hero = getHeros(1);
    console.log(hero);
    let heroList = [];
    for (let i; i <= 6; i++) {
        let heroList = [ ...heroList, getHeros(i) ];
    }
    console.log(heroList);

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center flex-column ">
                    <h1 className="text-center text-white fw-bold">HOME</h1>
                    <h4 className="text-center text-secondary fw-bold">Por favor, diseñe su equipo...</h4>
                </div>
            </div>

            <div className="row">
                <div className="col d-flex flex-wrap mt-5 justify-content-center animate__animated animate__fadeInRight">
                    {
                        heroList.map( hero => (
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
