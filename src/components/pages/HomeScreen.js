import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeros } from '../../actions/heros';
import { HeroCard } from './HeroCard';
import { TeamStats } from './TeamStats';


export const HomeScreen = () => {

    const dispatch = useDispatch();
    let { herosTeam } = useSelector( state => state.hero );
    useEffect(() => {
        dispatch(getHeros())
    }, [dispatch]);


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
                        herosTeam.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                { ...hero } 
                            />
                        ))
                    }
                </div>
            </div>

            <div className="row">
                <div className="card-columns col d-flex flex-wrap mt-5 align-content-center justify-content-center animate__animated animate__fadeInRight">
                    {   
                        herosTeam.map( hero => (
                            <TeamStats 
                                key={hero.id}
                                { ...hero }
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
