import React, { useState, useEffect, useCallback, useRef } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { Switch } from 'react-native-paper'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'
import { BaseRouter } from '@react-navigation/native'

const Filter = props => {
    return(
        <View style={styles.filterContainer}>
            <DefaultText style={styles.filterLabel}>{props.label}</DefaultText>
            <Switch
                value={props.switchStatus}
                onValueChange={newValue => props.setSwitchStatus(newValue)}
                trackColor={{true: Colors.primary}}
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
            />
        </View>
    )
}

const FiltersScreen = props => {

    const { navigation, route } = props

    let [isGlutenFree, setIsGlutenFree] = useState(false)
    let [isVegetarian, setIsVegetarian] = useState(false)
    let [isVegan, setIsVegan] = useState(false)
    let [isLactoseFree, setIsLactoseFree] = useState(false)

    const setParams = useRef(navigation.setParams)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegetarian: isVegetarian,
            vegan: isVegan
        }

        console.log(appliedFilters)
        return appliedFilters
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        setParams.current({save: saveFilters()})
    }, [saveFilters, setParams])

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <Filter label="Gluten-Free" switchStatus={isGlutenFree} setSwitchStatus={setIsGlutenFree} />
            <Filter label="Vegetarian" switchStatus={isVegetarian} setSwitchStatus={setIsVegetarian} />
            <Filter label="Vegan" switchStatus={isVegan} setSwitchStatus={setIsVegan} />
            <Filter label="Lactose-Free" switchStatus={isLactoseFree} setSwitchStatus={setIsLactoseFree} />
        </View>
    )
}

export const filterScreenOptions = navData => {
    return{
            title: 'Filter Results',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName='ios-menu' onPress={() => {navData.navigation.toggleDrawer()}} />
                </HeaderButtons>
            ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Save" iconName='ios-save' onPress={() => console.log(navData.route.params)} />
                </HeaderButtons>
            )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 30,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 20
    },
    filterLabel: {
        fontSize: 18
    }
})

export default FiltersScreen