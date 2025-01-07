//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';





// create a component
const HomeScreen = ({ navigation }) => {
    console.log(navigation);
    return (
        <View style={styles.container}>
            <Text style={styles.forText}>Home Screen</Text>
            <Button
                title="go to listScreen2"
                onPress={() => console.log("Button Pressed for List")} />
            <TouchableOpacity
                onPress={() => console.log("This is Touch Button")}
            >
                <Text style={styles.forText}>  This is TouchableOpacity </Text>
                <Text style={styles.forText}>  This is Touch
                    ableOpacity 2 </Text>
                <Text style={styles.forText}>  This is TouchableOpacity 3 </Text>
            </TouchableOpacity>

            <Button
                title='Go To List Screen'
                onPress={() => navigation.navigate("List")}
            />
            <Button
                title='Go To Component Screen'
                onPress={() => navigation.navigate("Components")}
            />
            <Button
                title='Go To Imagelist'
                onPress={() => navigation.navigate("Image")}
            />
            <Button
                onPress={() => navigation.navigate("Counter")}
                title='Go To Counter'
            />
            <Button
                onPress={() => navigation.navigate("Color")}
                title='Go To Color Boxes'
            />

            <Button
                onPress={() => navigation.navigate("Text")}
                title="Go to Text Screen"
            />

            <Button
                onPress={() => navigation.navigate("Box")}
                title='Go to Box Screen'
                />
                <Button
                onPress={() => navigation.navigate("Flex")}
                title='Go to FlexBox Screen'
                />

        </View>
    );
};

// define your stylesm
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'cen-ter',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    forText: {
        fontSize: 10,
        color: 'yellow',
    },
});

//make this component available to the app
export default HomeScreen;