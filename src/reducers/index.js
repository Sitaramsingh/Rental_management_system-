import { combineReducers } from 'redux';
import rentalDataReducer from './rentalDataReducer';

const rootReducer = combineReducers({
    rentalDataReducer: rentalDataReducer,
});

export default rootReducer;