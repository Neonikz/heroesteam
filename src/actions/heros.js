import { types } from "../types/types";

export const addHero =  hero  => ({ 
    type: types.addHero,
    payload: hero
})

export const deleteHero = id => ({ 
    type: types.deleteHero,
    payload: id
   
})

export const getHeros = () => ({ type: types.getHeros })