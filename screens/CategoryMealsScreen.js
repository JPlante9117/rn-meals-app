import React from 'react'
import { CATEGORIES, MEALS } from '../data/Dummy-Data'
import CategoryMealGridTile from '../components/CategoryMealGridTile'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {

    const catId = props.route.params.id

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

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