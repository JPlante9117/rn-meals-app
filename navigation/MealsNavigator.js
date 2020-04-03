import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const MealsNavigator = props => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categories"
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}    
                />
                <Stack.Screen
                    name="Category Meals"
                    component={CategoryMealsScreen}    
                />
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator