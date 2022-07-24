import { Load_Products, Load_Date, Load_City } from "./types";

const initialState = {
    products:[], 
    byDate:[],
    byCity:[],
    
}

const recallReducer = (state = initialState, action) => {
    switch(action.type) {
        case Load_Products:
            return {...state, products: action.payload}

        default: 
            return state;    
    }
}

export default recallReducer;