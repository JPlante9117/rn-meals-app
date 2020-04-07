import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from 'react-native'

const CategoryGridTile = props => {
    let TouchFeedback = TouchableOpacity
    
    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchFeedback = TouchableNativeFeedback
    }
    
    return (
        <View style={styles.container}>
            <TouchFeedback style={{flex: 1}} onPress={props.handleOnPress}>
                <View style={{...styles.gridItem, backgroundColor: props.color}}>
                    <Text style={styles.gridItemText} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        height: 130
    },
    gridItem: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
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
        color: '#1a1a1a',
        fontFamily: 'open-sans-bold',
        textAlign: 'right'
    }
})

export default CategoryGridTile