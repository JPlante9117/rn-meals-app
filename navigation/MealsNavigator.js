import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../constants/Colors'
import { Platform } from 'react-native'
import { CATEGORIES, MEALS } from '../data/Dummy-Data'
import { enableScreens } from 'react-native-screens'

enableScreens()

const Stack = createStackNavigator()

const MealsNavigator = props => {

    const baseHeader = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTitleStyle: {
            width: '100%'
        },
        headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primary,
        headerTitleAlign: 'center'
    }

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={baseHeader}
                headerMode={'screen'}
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        title: 'Meal Categories'
                    }}
                />
                <Stack.Screen
                    name="Category Meals"
                    component={CategoryMealsScreen}
                    options={({route}) => ({
                        title: CATEGORIES.find(cat => cat.id === route.params.id).title,
                        
                        headerStyle: {
                            backgroundColor: CATEGORIES.find(cat => cat.id === route.params.id).color
                        }
                    })}
                />
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                    options={({route}) => ({
                        title: MEALS.find(meal => meal.id === route.params.id).title,
                        headerTitleContainerStyle: {
                            width: Platform.OS === 'ios' ? '60%' : '75%',
                            alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
                        }
                    })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator