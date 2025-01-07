import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-web'

const TextScreen = () => {
    const [input, setInput] = useState (""); 
                            //it's only changed with a function that causes the page to be re-rendered everytime it runs 
                            //rem. state vars can't be changed like regural vars
  return (
    <View>
      <Text>Input Screen </Text>
      <Text>name</Text>
      <TextInput
       style = {styles.input}
       autoCapitalize = "none"
       autoCorrect = {false}
       //value = "Shahad" 
       onChangeText = {(newValue) => setInput(newValue)} //my function
       />
        {input.length < 5? <Text> "Enter more than 5 documents" </Text> : null}        
    </View>
  );
};


const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        borderColor: "black",
        borderWidth: 1
    }
})

export default TextScreen
