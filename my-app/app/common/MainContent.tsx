import { View, Text } from 'react-native'
import React from 'react'
import NavBar from './NavBar'
import HomePage from '../page/HomePage'

export default function MainContent() {
  return (
    <View>
      <NavBar/>
      <HomePage/>
    </View>
  )
}