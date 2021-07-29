import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { totalStats } from '../../helpers/calculateTotals';

export const TotalStatsScreen = () => {

    const { stats } = useSelector( state => state );
    const { herosTeam } = useSelector( state => state.hero );
    //Cada vez que se agrega o se quita alguien del equipo se cambia el total
    useEffect(() => {
        totalStats(stats)
    }, [herosTeam,stats])

    if(!herosTeam){return null;}

    const { calculateIntelligence, calculateStrength, calculateSpeed, calculateDurability, calculatePower, calculateCombat } = totalStats(stats);

    return (
        <div>
            <div className="row">
                <div className="col d-flex flex-column bg-success justify-content-center rounded-2 border border-dark border-2 p-3">
                    <h2 className="m-3 text-white fw-bold">ESTADISTICAS TOTALES DEL EQUIPO</h2>
                    <ul className="list-group">
                        <li className="list-group-item text-center fw-bolder">Inteligencia: {calculateIntelligence}</li>
                        <li className="list-group-item text-center fw-bolder">Fuerza: {calculateStrength}</li>
                        <li className="list-group-item text-center fw-bolder">Velocidad: { calculateSpeed }</li>
                        <li className="list-group-item text-center fw-bolder">Durabilidad: { calculateDurability }</li>
                        <li className="list-group-item text-center fw-bolder">Poder: { calculatePower }</li>
                        <li className="list-group-item text-center fw-bolder">Combate: { calculateCombat }</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
