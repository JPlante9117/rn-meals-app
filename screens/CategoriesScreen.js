import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/Dummy-Data'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

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

export const categoryScreenOptions = navData => {
    return {
        title: "Meal Categories",
        headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={() => {navData.navigation.toggleDrawer()}} />
        </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

export default CategoriesScreen