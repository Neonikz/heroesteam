import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeros } from '../../actions/heros';
import { Message } from '../message/Message';
import { HeroCard } from './HeroCard';
import { TotalStatsScreen } from './TotalStatsScreen';


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
                    <h4 className="text-center text-secondary fw-bold">Diseñe su equipo</h4>
                    <h4 className="text-center text-secondary fw-bold">Prueba buscando Batman o Flash...</h4>
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
                <div className="col d-flex flex-wrap mt-5 align-content-center justify-content-center animate__animated animate__fadeInRight">
                    {   
                        ( herosTeam.length === 0) 
                            ? <Message message="Tu equipo esta vacio, busca un heroe y agregalo!" type="success" />
                            : <TotalStatsScreen />
                    }
                </div>
            </div>
        </div>
    )
}
