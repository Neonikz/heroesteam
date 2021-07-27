import { types } from "../types/types";
import { heroes } from '../data/heroes';


const initialState = {
    herosTeam: Object.values(heroes).slice(0,6)
}
const { herosTeam } = initialState;

export const heroReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case( types.addHero):
            if(herosTeam.length <= 6){
                return{
                    ...state,
                    herosTeam: [ ...herosTeam, heroes.filter(hero=> hero.id === action.payload) ]
                }
            }else{
                return state;
            }

        case( types.deleteHero ):
            return{
                ...state,
                herosTeam: [ herosTeam.filter(hero=> hero.id !== action.payload)]
            }

        case( types.getHeros ):
            return{
                ...state,
            }
        default:
            return state;
    }
}