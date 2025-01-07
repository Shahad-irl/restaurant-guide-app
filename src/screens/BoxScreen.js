import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style = {styles.viewStyle}> 
      <Text style = {styles.textStyle}>BoxScreen</Text>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: "black",
        //paddingVertical: 20
        padding: 20
    },
    textStyle: {
        borderWidth: 5,
        borderColor: "red", 
        //marginVertical: 20,
        //marginHorizontal: 40
       
    }
})