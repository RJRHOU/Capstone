import {Load_Products, Load_Date, Load_City, SAVE_USER } from './types'

export const loadProducts = (dispatch, products) =>{
    return dispatch({ type: Load_Products, payload: products})
}

export const loadDate = (dispatch, date ) => {
    return dispatch({type: Load_Date, payload: date})
}

export const loadCity = (dispatch, city) => {
    return dispatch({type:Load_City, payload: city})
}

export const saveUserData = (dispatch, user) => {
    return dispatch({type:SAVE_USER, payload: user})
}
