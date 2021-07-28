import { types } from "../types/types";


const initialState = {
    herosTeam: []//Object.values(heroes).slice(0,6)
}

export const heroReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.addHero:
                return{
                    ...state,
                    herosTeam: [
                        ...state.herosTeam, 
                        action.payload
                    ]
                }

        case types.deleteHero :
            return{
                ...state,
                herosTeam: state.herosTeam.filter(hero=> hero.id !== action.payload)
            }

        case types.getHeros :
            return {
                ...state,
                herosTeam:[...state.herosTeam]
            };
        default:
            return state;
    }
}