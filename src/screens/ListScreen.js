import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const ListScreen = () => {
   /* const myStr = "List Screen as String";
   // const myArr = ["Ray", "Ren", "Derin"];
    const myObj = {
        title: "Menu",
        width: 100,
        height: 200,
    };

    
    let {title,height,width} = myObj;
*/

    const arrObj = [
        {name:"Rengin"},
        {name:"Derin"},
        {name:"Nabi"},
        {name:"Shahad"},
    ];
   
    const arrObj2 = [
        {name: "Shahad"},
        {age: 22},
        {Country: "Yemen"},


    ];
    return (
        <View>
            <Text>ListScreen</Text>
            <FlatList data = {arrObj2} renderItem = {({item}) =>{
              // console.log(para.item.name);
              // console.log(para);
               
               return(
                    <Text>{item.name}{item.age}{item.Country}</Text>
                )
            }} />
             
        </View>
    );
};

export default ListScreen

const styles = StyleSheet.create({})