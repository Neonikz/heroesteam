import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { heroReducer } from './heroReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    hero: heroReducer
})
