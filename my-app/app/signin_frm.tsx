import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Input } from 'native-base';

export default function signin_frm() {
  return (
    <View>
      <Image source={require('../assets/images/fb-login.png')} style={styles.imgStyle}/>
      <Input variant="underlined" placeholder="Underlined" />
    </View>
  )
}

const styles=StyleSheet.create({
  imgStyle:{
    width:392
  }
});