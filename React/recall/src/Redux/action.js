import {Load_Products, Load_Date, Load_City } from './types'

export const loadProducts = (dispatch, products) =>{
    return dispatch({ type: Load_Products, payload: products})
}

export const loadDate = (dispatch, date ) => {
    return dispatch({type: Load_Date, payload: date})
}

export const loadCity = (dispatch, city) => {
    return dispatch({type:Load_City, payload: city})
}