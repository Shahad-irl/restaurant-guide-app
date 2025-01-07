import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = (proo) => {
  console.log(proo);
  return (
    <View>
      <Text>Image Detail</Text>
      <Text>Image Detail</Text>
      <Text>Image Detail</Text>
      <Text>Image Detail</Text>

      <Text>Icon</Text>
      <Image
        style={styles.ImageStyle}
      // source={require("../../assets/splash.jpg")}
      />


    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({
  ImageStyle: {
    margin: '%1',
    borderWidth: 2,
    width: 128,
    hight: 128,

  }

})