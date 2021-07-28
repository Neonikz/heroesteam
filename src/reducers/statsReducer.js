import { types } from "../types/types";

const initialState = {
    totalIntelligence:[],
    totalStrength:[],
    totalSpeed:[],
    totalDurability:[],
    totalPower:[],
    totalCombat:[]
}

export const statsReducer = ( state = initialState, action ) => {
    switch( action.type ){
        
        //Acciones de suma de los totales
        case types.setTotalIntelligence:
                return{
                    ...state,
                    totalIntelligence: [...state.totalIntelligence, action.payload]
                }
        case types.setTotalStrength:
                return{
                    ...state,
                    totalStrength: [ ...state.totalStrength, action.payload ]
                }
        case types.setTotalSpeed:
                return{
                    ...state,
                    totalSpeed: [ ...state.totalSpeed, action.payload ]
                }
        case types.setTotalDurability:
                return{
                    ...state,
                    totalDurability: [ ...state.totalDurability, action.payload ]
                }
        case types.setTotalPower:
                return{
                    ...state,
                    totalPower: [ ...state.totalPower, action.payload ]
                }
        case types.setTotalCombat:
                return{
                    ...state,
                    totalCombat: [ ...state.totalCombat, action.payload ]
                }

        //Acciones de borrado
        case types.deleteTotalIntelligence:
            return{
                ...state,
                totalIntelligence: state.totalIntelligence.filter( hero => hero.id !== action.payload )
            }

        case types.deleteTotalStrength:
            return{
                ...state,
                totalStrength: state.totalStrength.filter( hero => hero.id !== action.payload )
            }

        case types.deleteTotalSpeed:
            return{
                ...state,
                totalSpeed: state.totalSpeed.filter( hero => hero.id !== action.payload )
            }

        case types.deleteTotalDurability:
            return{
                ...state,
                totalDurability: state.totalDurability.filter( hero => hero.id !== action.payload )
            }

        case types.deleteTotalPower:
            return{
                ...state,
                totalPower: state.totalPower.filter( hero => hero.id !== action.payload )
            }

        case types.deleteTotalCombat:
            return{
                ...state,
                totalCombat: state.totalCombat.filter( hero => hero.id !== action.payload )
            }

        default:
            return state;
    }   

}