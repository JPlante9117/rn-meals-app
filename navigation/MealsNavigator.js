import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../constants/Colors'
import { Platform } from 'react-native'

const Stack = createStackNavigator()

const MealsNavigator = props => {

    const baseHeader = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerTitleAlign: 'center'
    }

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categories"
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        ...baseHeader,
                        title: 'Meal Categories'
                    }}
                />
                <Stack.Screen
                    name="Category Meals"
                    component={CategoryMealsScreen}
                    options={({route}) => ({
                        ...baseHeader,
                        title: route.params.categoryId
                    })}
                />
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                    options={{
                        ...baseHeader
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator