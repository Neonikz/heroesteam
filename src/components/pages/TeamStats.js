import React from 'react'
import { useSelector } from 'react-redux';


export const TeamStats = ({ powerstats }) => {
    const {herosTeam} = useSelector(state => state.hero);
    if(!herosTeam) {return null;}
    // const {intelligence, strength, speed, durability, power, combat} = powerstats;
    //TODO: USAR UN REDUCER PARA LOS TOTALES

    return (
        <div className="row mt-5">
            <div className="col animate__animated animate__fadeIn">
            {
            }
            </div>
        </div>
    )
}
