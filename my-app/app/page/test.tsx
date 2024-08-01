import { View, Image, ScrollView,Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function test() {
  return (
    <View>
      <ScrollView horizontal>
          <StyledView className=' bg-[#3b3a3a]  w-[25%] h-[160px] rounded-lg'>
            <Image source={require('../../assets/images/profilePic.png')} className=" w-[100%] h-[100px]  "/>
          </StyledView>

          <StyledView className=' bg-[#3b3a3a]  w-[25%] h-[160px] rounded-lg'>
            <Image source={require('../../assets/images/profilePic.png')} className=" w-[100%] h-[100px]  "/>
          </StyledView>
        </ScrollView>
    </View>
  )
}