import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CategoryMealGridTile from './CategoryMealGridTile'

const MealList = props => {

    const renderMeals = itemData => {
        return <CategoryMealGridTile
                    title={itemData.item.title}
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}
                    image={itemData.item.imageUrl}
                    handleOnPress={() => props.navigation.navigate('Meal Details', {id: itemData.item.id, mealTitle: itemData.item.title})}
                />
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMeals}
                style={{width: '100%'}}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})

export default MealList