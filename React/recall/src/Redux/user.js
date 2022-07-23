import { SAVE_USER } from "./types";

const initialState = {
    
    userData:{}
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_USER:
            return {...state, userData: action.payload}
            
        default: 
            return state;    
    }
}

export default userReducer;