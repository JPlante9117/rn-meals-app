import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from 'react-native'

const CategoryGridTile = props => {
    let TouchFeedback = TouchableOpacity
    
    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchFeedback = TouchableNativeFeedback
    }
    
    return (
        <TouchFeedback onPress={props.handleOnPress}>
            <View style={{...styles.gridItem, backgroundColor: props.color}}>
                <Text style={styles.gridItemText}>
                    {props.title}
                </Text>
            </View>
        </TouchFeedback>
    )
}

const styles = StyleSheet.create({
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

export default CategoryGridTile