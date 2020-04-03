import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Category Meals</Text>
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