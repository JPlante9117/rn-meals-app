import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/Dummy-Data'

const CategoryMealsScreen = props => {

    const catId = props.route.params.id

    const selectedCat = CATEGORIES.find(cat => cat.id === catId)

    return(
        <View style={styles.screen}>
            <Text>{selectedCat.title}</Text>
            <Button 
                title="Go to Meal"
                onPress={() => props.navigation.navigate('Meal Details')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen