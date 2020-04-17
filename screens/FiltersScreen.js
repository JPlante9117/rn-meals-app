import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { Switch } from 'react-native-paper'
import DefaultText from '../components/DefaultText'
import Colors from '../constants/Colors'

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

    let [isGlutenFree, setIsGlutenFree] = useState(false)
    let [isVegetarian, setIsVegetarian] = useState(false)
    let [isVegan, setIsVegan] = useState(false)
    let [isLactoseFree, setIsLactoseFree] = useState(false)

    const saveFilters = () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegetarian: isVegetarian,
            vegan: isVegan
        }
    
        console.log(appliedFilters)
    }

    // React.useLayoutEffect(() => {
        
    //     props.navigation.setParams({
    //         filters: saveFilters
    //     })
    // })

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
                    <Item title="Menu" iconName='ios-save' onPress={() => {
                        console.log(navData.navigation)
                    }} />
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