import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const CounterScreen = () => {
    lconst [counter, setCounter] = useState(0);
    return (
    <View>
      <Text>CounterScreen</Text>
      <Button
        title='Increase'
        onPress={() => {
            //counter++; wrong
            setCounter(counter+1);
        }}
        />
        <Button
        title='Decrease'
        onPress={() => {
            //counter--;
            setCounter(counter-1);
        }}
        />
        <Text> Current Count: {counter} </Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})