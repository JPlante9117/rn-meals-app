import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CustomHeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { ScrollView } from 'react-native-gesture-handler'
import DefaultText from '../components/DefaultText'
import { Entypo } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { useSelector } from 'react-redux'

const ListItem = props => {
    return <View style={styles.listItem}>
        <Text>
            {props.children}
        </Text>
    </View>
}

const MealDetailsScreen = ({navigation, route}) => {

    const [favoriteStatus, setFavoriteStatus] = useState(false)
    const mealId = route.params.id
    const availableMeals = useSelector(state => state.meals.meals)
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Favorite"
                            iconName={favoriteStatus ? 'ios-star' : 'ios-star-outline'}
                            onPress={() => {
                                setFavoriteStatus(!favoriteStatus)
                                }
                            }
                        />
                    </HeaderButtons>
            ),
        })
    }, [navigation, favoriteStatus, setFavoriteStatus])

    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration} minutes</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}><Entypo size={20} name="dot-single" />{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.instructions.map((step, idx) => <ListItem key={step}>{idx + 1}. {step}</ListItem>)}
        </ScrollView>
    )
}

export const mealDetailsScreenOptions = navData => {

    return{
        title: navData.route.params.mealTitle,
        headerTitleContainerStyle: {
            width: Platform.OS === 'ios' ? '60%' : '75%',
            alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center',
        color: Colors.secondary
    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        backgroundColor: '#ccc'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
    }
})

export default MealDetailsScreen