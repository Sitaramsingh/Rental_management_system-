
import {actionTypes} from '../constants';


let initialState = {
    locations: null,
    categories: null,
    subCategories: null
};

function rentalData(state, action) {
    let newState = {...state};
    newState.locations = action.data.locations;
    return newState;
}

function rentalCategoreis(state, action) {
    let newState = {...state};
    newState.categories = action.data;
    return newState;
}

function rentalSubCategoreis(state, action) {
    let newState = {...state};
    newState.subCategories = action.data;
    return newState;
}

export default function rentalDataReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RENETAL_RESPONSE:
            return rentalData(state, action)
        case actionTypes.RENETAL_CATEGORIES:
            return rentalCategoreis(state, action)
        case actionTypes.RENETAL_SUB_CATEGORIES:
            return rentalSubCategoreis(state, action)
        default:
            return state;
    }
}