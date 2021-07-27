import { types } from "../types/types";

export const addHero =  id  => ({ 
    type: types.addHero,
    payload: id,
})

export const deleteHero = id => ({ 
    type: types.deleteHero,
    payload: id
})

export const getHeros = () => ({ type: types.getHeros })