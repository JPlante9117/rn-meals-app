import React from 'react'
import { useSelector } from 'react-redux'
import { CATEGORIES } from '../data/Dummy-Data'
import MealList from '../components/MealList'
import { View, StyleSheet } from 'react-native'
import DefaultText from '../components/DefaultText'

const CategoryMealsScreen = props => {

    const catId = props.route.params.id

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    if (displayedMeals.length === 0) {
        return <View style={styles.screen}>
            <DefaultText style={styles.fallbackText}>
                There are no meals that fit this criteria.
            </DefaultText>
        </View>
    }

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 10
    },
    fallbackText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#bfbfbf'
    }
})

export default CategoryMealsScreen