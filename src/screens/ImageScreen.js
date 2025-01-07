import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageDetail title= "Image Forest" />
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({
    ImageStyle: {
        margin: '%1',
        borderWidth: 2,
        width: 128,
        hight:128,}
        
    
})