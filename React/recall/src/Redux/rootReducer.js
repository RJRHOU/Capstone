import { combineReducers } from 'redux';
import reducer from './reducer' ;

const rootReducer = combineReducers({  
    recalls: reducer ,
});

export default rootReducer;