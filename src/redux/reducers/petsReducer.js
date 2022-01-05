import * as ACTION_TYPES from '../actions/actionTypes';

export const initialState = {
    pets: [],
    loading: false,
    removedPet: null,
}

export function petsReducer(state = initialState, action) {
    console.log('action in reducer', action)
    switch (action.type) {
        case ACTION_TYPES.GET_ALL_PETS:
            return {  ...state
            }
        case ACTION_TYPES.GET_ALL_PETS_REQUEST:
            return {
                ...state,
                pets: action.payload
            }
        case ACTION_TYPES.ADD_PET:
            return {
                ...state,
                pets: action.payload
            }
        case ACTION_TYPES.ADD_PET_REQUEST:
            return {
                ...state,
            }
            default:
                return state;
        }
    };
