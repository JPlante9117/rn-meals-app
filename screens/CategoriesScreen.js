import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'
import { CATEGORIES } from '../data/Dummy-Data'

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        let TouchFeedback = TouchableOpacity
    
        if (Platform.OS === 'android' && Platform.Version >= 21){
            TouchFeedback = TouchableNativeFeedback
        }
        
        return (
            <TouchFeedback onPress={() => {
                props.navigation.navigate('Category Meals', {id: itemData.item.id})
            }}>
                <View style={{...styles.gridItem, backgroundColor: itemData.item.color}}>
                    <Text style={styles.gridItemText}>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchFeedback>
        )
    }


    return(
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item, index) => item.id}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    gridItem: {
        flex: 1,
        margin: 5,
        height: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41
    },
    gridItemText: {
        fontSize: 18,
        color: 'black'
    }
})

export default CategoriesScreen