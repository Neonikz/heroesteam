import { types } from "../types/types";

const initialState = {
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {

    switch( action.type ){

        case( types.authLogin ):
            return{
                ...state,
                logged: true
            }
    
        case( types.authLogout ):
            return{
                ...state,
                logged:false
            }
        

        default:
            return state;
    }


}