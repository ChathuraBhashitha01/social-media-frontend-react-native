import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function signin_frm() {
  return (
    <View >
      <Image source={require('../assets/images/fb-login.png')} style={styles.imgStyle}/>
      <TextInput>username</TextInput>
    </View>
  )
}

const styles=StyleSheet.create({
  imgStyle:{
    width:392
  }
});