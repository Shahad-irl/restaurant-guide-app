import React, {useState} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);
  return (
    <View>
      <Text>ColorScreen</Text>
      <Button title='Add Color'  onPress={() => {
        setColors([...colors,rgb()]);
      }}/>
      <View style= {{height: 100, width:100, backgroundColor: randomRgb() }} />
    </View>
  )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rbg(${red}, ${green}, ${blue})`;
}
export default ColorScreen

const styles = StyleSheet.create({})