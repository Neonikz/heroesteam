import { types } from "../types/types"

//Acciones de suma de total
export const addTotalIntelligence = ( stat,id ) => ({ 
    type: types.setTotalIntelligence,
    payload: {
        stat,
        id
    }
})


export const addTotalStrength = ( stat,id ) => ({ 
    type: types.setTotalStrength,
    payload: {
        stat,
        id
    }
})


export const addTotalSpeed = ( stat,id ) => ({ 
    type: types.setTotalSpeed,
    payload: {
        stat,
        id
    }
})


export const addTotalDurability = ( stat,id ) => ({ 
    type: types.setTotalDurability,
    payload: {
        stat,
        id
    }
})


export const addTotalPower = ( stat,id ) => ({ 
    type: types.setTotalPower,
    payload: {
        stat,
        id
    }
})


export const addTotalCombat = ( stat,id ) => ({ 
    type: types.setTotalCombat,
    payload: {
        stat,
        id
    }
})

//Acciones de borrado
export const deleteIntelligence =  id  => ({ 
    type: types.deleteTotalIntelligence,
    payload: id
})


export const deleteStrength =  id  => ({ 
    type: types.deleteTotalStrength,
    payload: id
})


export const deleteSpeed =  id  => ({ 
    type: types.deleteTotalSpeed,
    payload: id
})


export const deleteDurability =  id  => ({ 
    type: types.deleteTotalDurability,
    payload: id
})


export const deletePower =  id  => ({ 
    type: types.deleteTotalPower,
    payload: id
})


export const deleteCombat =  id  => ({ 
    type: types.deleteTotalCombat,
    payload: id
})


