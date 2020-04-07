import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { CATEGORIES, MEALS } from '../data/Dummy-Data'
import { FlatList } from 'react-native-gesture-handler'
import CategoryMealGridTile from '../components/CategoryMealGridTile'

const CategoryMealsScreen = props => {

    const catId = props.route.params.id

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    const renderMeals = itemData => {
        let data = itemData.item
        return <CategoryMealGridTile
                    title={data.title}
                    duration={data.duration}
                    complexity={data.complexity}
                    affordability={data.affordability}
                    image={data.imageUrl}
                    handleOnPress={() => props.navigation.navigate('Meal Details', {id: data.id})}
                />
    }

    return(
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMeals}
                style={{width: '100%'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 10
    }
})

export default CategoryMealsScreen