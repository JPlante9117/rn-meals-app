import React from 'react'
import { useSelector } from 'react-redux'
import { CATEGORIES } from '../data/Dummy-Data'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {

    const catId = props.route.params.id

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return <MealList listData={displayedMeals} navigation={props.navigation} />
}

export const categoryMealsScreenOptions = navData => {
    return {
        title: CATEGORIES.find(cat => cat.id === navData.route.params.id).title,
                        
        headerStyle: {
            backgroundColor: CATEGORIES.find(cat => cat.id === navData.route.params.id).color
        }
    }
}

export default CategoryMealsScreen