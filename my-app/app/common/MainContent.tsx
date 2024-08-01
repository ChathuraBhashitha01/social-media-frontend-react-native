import { View, Text } from 'react-native'
import React from 'react'
import NavBar from './NavBar'
import HomePage from '../page/HomePage'
import Test from '../page/test'

export default function MainContent() {
  return (
    <View>
      <NavBar/>
      <Test/>
    </View>
  )
}