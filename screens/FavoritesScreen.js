import React from 'react'
import { View, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {

    const availableMeals = useSelector(state => state.meals.favoriteMeals)

    if (availableMeals.length === 0 || !availableMeals) {
        return <View style={styles.screen}>
            <DefaultText style={styles.fallbackText}>
                You Don't Have Any Favorites Yet. Go Add Some!
            </DefaultText>
        </View>
    }

    return <MealList listData={availableMeals} navigation={props.navigation} />
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
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#bfbfbf'
    }
})

export default FavoritesScreen