import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform, ImageBackground } from 'react-native'

const CategoryMealGridTile = props => {
    let TouchFeedback = TouchableOpacity
    
    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchFeedback = TouchableNativeFeedback
    }
    
    return (
        <View style={styles.mealItem}>
            <TouchFeedback style={{flex: 1}} onPress={props.handleOnPress}>
                <View>
                    <View style={{...styles.mealHeader, ...styles.mealRow}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <View style={styles.headerTextContainer}>
                                <Text style={styles.headerText} numberOfLines={1}>
                                    {props.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealDetails, ...styles.mealRow}}>
                        <Text>{props.duration} minutes</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginVertical: 5
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden'

    },
    headerText: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    headerTextContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
})

export default CategoryMealGridTile