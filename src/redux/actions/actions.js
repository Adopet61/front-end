import * as ACTION_TYPES from './actionTypes'


export const getAllPets = () => {
    return {
        type: ACTION_TYPES.GET_ALL_PETS,
    }
}


export const addPet = (data) => {
    return {
        type: ACTION_TYPES.ADD_PET,
        payload:data
    }
}


