import { combineReducers } from 'redux';
import reducer from './reducer' ;
import userReducer from './user';

const rootReducer = combineReducers({  
    recalls: reducer ,
    userData: userReducer
});

export default rootReducer;