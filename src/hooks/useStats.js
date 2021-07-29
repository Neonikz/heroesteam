import { useDispatch, useSelector } from 'react-redux';
import { addTotalCombat, addTotalDurability, addTotalIntelligence, addTotalPower, addTotalSpeed, addTotalStrength} from '../actions/stats';


export const useStats = ( ) => {
    
    const {herosTeam} = useSelector(state => state.hero);
    const dispatch = useDispatch();

    if(!herosTeam) {return null;}

    //Funcion que ejecuta el reducer para sumar todas las stats
    const setTotalPowerstats = ( intelligence, strength, speed, durability, power, combat, id ) => {
        dispatch( addTotalIntelligence( parseInt(intelligence), id ) );

        dispatch( addTotalStrength( parseInt(strength), id ) );

        dispatch( addTotalSpeed( parseInt(speed), id ) );

        dispatch( addTotalDurability( parseInt(durability), id ) );

        dispatch( addTotalPower( parseInt(power), id ) );

        dispatch( addTotalCombat( parseInt(combat), id ) );

    }



    return [setTotalPowerstats]
}
