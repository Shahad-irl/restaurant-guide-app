import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBoxScreen = () => {
    return(
    <View style = {styles.viewtStyle}>
    <Text style = {styles.textStyle}>Child 1</Text>
    <Text style = {styles.textStyle}>Child 2</Text>
    <Text style = {styles.textStyle}>Child 3</Text>
    </View>
    
    )
}

export default FlexBoxScreen

const styles = StyleSheet.create({
    viewtStyle: {
        borderWidth: 5,
        borderColor: "black",
        padding: 20, 
        height:600,
        //marginVertical: 20,
        //marginHorizontal: 40
        //alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: "auto" 

    },
    textStyle: {
        borderWidth: 5,
        borderColor: "red", 
        //marginVertical: 20,
        //marginHorizontal: 40
       
    }

})