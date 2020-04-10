import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomHeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'


const MealDetailsScreen = ({navigation}) => {

    const [favoriteStatus, setFavoriteStatus] = useState(false)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Favorite"
                            iconName='ios-star'
                            onPress={() => setFavoriteStatus(!favoriteStatus)}
                        />
                    </HeaderButtons>
            ),
        })
    }, [navigation, favoriteStatus, setFavoriteStatus])

    return(
        <View style={styles.screen}>
            <Text>Meal Details</Text>
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

export default MealDetailsScreen