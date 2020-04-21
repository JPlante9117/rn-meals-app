import {MEALS } from '../../data/Dummy-Data'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

export const mealsReducer = (state = initialState, action) => {
    return state
}