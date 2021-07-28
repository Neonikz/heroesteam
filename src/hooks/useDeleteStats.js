import { useDispatch } from "react-redux";
import { deleteIntelligence, deleteStrength, deleteSpeed ,deleteDurability ,deletePower ,deleteCombat } from "../actions/stats";

export const useDeleteStats = () => { 
    const dispatch = useDispatch();
    
    const deleteHeroStat = id => {
        dispatch( deleteIntelligence( id ) );

        dispatch( deleteStrength( id ) );

        dispatch( deleteSpeed( id ) );

        dispatch( deleteDurability( id ) );

        dispatch( deletePower( id ) );

        dispatch( deleteCombat( id ) );

    }

    return [ deleteHeroStat ]
}
