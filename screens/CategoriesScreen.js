import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/Dummy-Data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return <CategoryGridTile id={itemData.item.id} title={itemData.item.title} color={itemData.item.color} handleOnPress={() => props.navigation.navigate('Category Meals', {id: itemData.item.id})} />
    }


    return(
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item, index) => item.id}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

export default CategoriesScreen