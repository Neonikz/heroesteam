import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { heroReducer } from './heroReducer';
import { statsReducer } from './statsReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    hero: heroReducer,
    stats: statsReducer
})
