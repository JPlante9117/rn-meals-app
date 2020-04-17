import React, { useState } from 'react'
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
            <Switch value={props.switchStatus} onValueChange={newValue => props.setSwitchStatus(newValue)} trackColor={{true: Colors.primary}} thumbColor={Platform.OS === 'android' ? Colors.primary : ''} />
        </View>
    )
}

const FiltersScreen = props => {

    let [isGlutenFree, setIsGlutenFree] = useState(false)

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {props.navigation.toggleDrawer()}} />
            </HeaderButtons>
            ),
        })
    })

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <Filter label="Gluten-Free" switchStatus={isGlutenFree} setSwitchStatus={setIsGlutenFree} />
        </View>
    )
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
        width: '80%'
    },
    filterLabel: {
        fontSize: 18
    }
})

export default FiltersScreen