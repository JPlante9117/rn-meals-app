import React from 'react'
import DefaultText from '../components/DefaultText'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CategoriesScreen, { categoryScreenOptions } from '../screens/CategoriesScreen'
import CategoryMealsScreen, { categoryMealsScreenOptions } from '../screens/CategoryMealsScreen'
import MealDetailsScreen, { mealDetailsScreenOptions } from '../screens/MealDetailsScreen'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../constants/Colors'
import { Platform } from 'react-native'
import { enableScreens } from 'react-native-screens'

import FavoritesScreen, { favoritesScreenOptions } from '../screens/FavoritesScreen'
import FiltersScreen, { filterScreenOptions } from '../screens/FiltersScreen'
import { Ionicons } from '@expo/vector-icons'

enableScreens()

const Stack = createStackNavigator()

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator()

const Drawer = createDrawerNavigator()

const MealsNavigator = props => {

    const baseHeader = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTitleStyle: {
            width: '100%',
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: Platform.OS === 'android' ? 'black' : Colors.primary,
        headerTitleAlign: 'center'
    }

    const allStack = () => {
        return (
            <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={baseHeader}
                headerMode={'screen'}
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={categoryScreenOptions}
                />
                <Stack.Screen
                    name="Category Meals"
                    component={CategoryMealsScreen}
                    options={categoryMealsScreenOptions}
                />
                <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                    options={mealDetailsScreenOptions}
                />
            </Stack.Navigator>
        )
    }

    const favStack = () => {
        return <Stack.Navigator
                    initialRouteName="Favorites"
                    screenOptions={baseHeader}
                    headerMode={'screen'}
                >
                    <Stack.Screen
                        name="Favorites"
                        component={FavoritesScreen}
                        options={favoritesScreenOptions}
                    />
                    <Stack.Screen
                    name="Meal Details"
                    component={MealDetailsScreen}
                    options={mealDetailsScreenOptions}
                />
                </Stack.Navigator>
    }

    const tabNavigation = () => {
        return (
            <Tab.Navigator
            screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => {
                        let iconName

                        if (route.name === "Meals") {
                            iconName = 'md-restaurant'
                        } else if (route.name === "Favorites") {
                            iconName = 'ios-star'
                        }
                        return <Ionicons name={iconName} size={25} color={color} />
                    }
                })
            }
            tabBarOptions={{
                activeTintColor: Colors.secondary,
                inactiveTintColor: '#ccc',
                activeBackgroundColor: '#f2f2f2',
                inactiveBackgroundColor: 'white',
                size: 25,
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                }
            }}
            activeColor={'white'}
            shifting={true}
        >
            <Tab.Screen
                name="Meals"
                component={allStack}
                options={{
                    tabBarColor: Colors.primary,
                    tabBarLabel: Platform.OS === 'android' ? <DefaultText style={{fontFamily: 'open-sans-bold'}}>Meals</DefaultText> : 'Meals'
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={favStack}
                options={{
                    tabBarColor: Colors.secondary,
                    tabBarLabel: Platform.OS === 'android' ? <DefaultText style={{fontFamily: 'open-sans-bold'}}>Favorites</DefaultText> : 'Favorites'
                }}
            />
        </Tab.Navigator>
        )
    }

    const filterStack = () => {
        return <Stack.Navigator
                    initialRouteName="Filters"
                    screenOptions={baseHeader}
                    headerMode={'screen'}
                >
                    <Stack.Screen
                        name="Filters"
                        component={FiltersScreen}
                        initialParams={{save: {}}}
                        options={filterScreenOptions}
                    />
                </Stack.Navigator>
    }

    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContentOptions={{
                    activeTintColor: Colors.secondary,
                    labelStyle: {
                        fontFamily: 'open-sans',
                        fontSize: 22
                    },
                }}
                drawerType='slide'
            >
                <Drawer.Screen
                    name="Home"
                    component={tabNavigation}
                    options={{
                        drawerLabel: 'Meals',
                        transitionSpec: {
                            ...TransitionPresets.DefaultTransition
                        }
                    }}
                />
                <Drawer.Screen
                    name="Filters"
                    component={filterStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator