import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondScreen = () => {
    let myInt=12;
    let myStr= "Ren";
    let myArrStr = ['Rengin', 'Shahad', 'Derin'];
    let myArrDouble = [2.34, 4.35];


  return (
    <View>
      <Text>SecondScreen 1</Text>
      <Text>SecondScreen 2</Text>
      <Text>SecondScreen 3</Text>
      <Text>SecondScreen 4</Text>
        <Text>{myInt}</Text>
        <Text>{myStr}</Text>
        <Text>{myArrStr}</Text>
        <Text>{myArrDouble}</Text>
       
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})