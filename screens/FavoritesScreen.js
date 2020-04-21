import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/Dummy-Data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = props => {

    let mealData = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    return <MealList listData={mealData} navigation={props.navigation} />
}

export const favoritesScreenOptions = navData => {
    return {
        title: "Favorite Meals",
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={() => {navData.navigation.toggleDrawer()}} />
        </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen