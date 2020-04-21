import {MEALS } from '../../data/Dummy-Data'
import { TOGGLE_FAVORITE } from '../actions/mealActions'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

export const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: 
            existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals.splice(existingIndex, 1)
                }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meal)
                }
            }
        default: 
            return state
    }
}