import { useDispatch, useSelector } from 'react-redux';
import { addTotalCombat, addTotalDurability, addTotalIntelligence, addTotalPower, addTotalSpeed, addTotalStrength, deleteCombat, deleteDurability, deleteIntelligence, deletePower, deleteSpeed, deleteStrength } from '../actions/stats';


export const useStats = ( ) => {
    
    const {herosTeam} = useSelector(state => state.hero);
    const dispatch = useDispatch();

    if(!herosTeam) {return null;}

    //Funcion que ejecuta el reducer para sumar todas las stats
    const setTotalPowerstats = ( intelligence, strength, speed, durability, power, combat, id ) => {
        dispatch( addTotalIntelligence( intelligence, id ) );

        dispatch( addTotalStrength( strength, id ) );

        dispatch( addTotalSpeed( speed, id ) );

        dispatch( addTotalDurability( durability, id ) );

        dispatch( addTotalPower( power, id ) );

        dispatch( addTotalCombat( combat, id ) );

    }



    return [setTotalPowerstats]
}
