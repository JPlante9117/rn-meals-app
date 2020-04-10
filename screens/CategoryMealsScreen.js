import React from 'react'
import { CATEGORIES, MEALS } from '../data/Dummy-Data'
import CategoryMealGridTile from '../components/CategoryMealGridTile'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {

    const catId = props.route.params.id

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return <MealList listData={displayedMeals} />
}

export default CategoryMealsScreen