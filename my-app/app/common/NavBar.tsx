import { View, Image } from 'react-native'
import React from 'react'
import {Text } from 'react-native-paper';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function NavBar() {
  return (
    <StyledView className ='bg-[#303030] h-[18.4%] border-b border-white p-2'>
        <StyledView className='flex flex-row gap-5 mt-5 mb-5 pl-3'>
          <Text className="text-3xl text-white font-bold mr-20 ">facebook</Text>
          <Image source={require('../../assets/images/add.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/search.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/messenger.png')} className="w-8 h-8 "/>
        </StyledView>

        <StyledView className='flex flex-row gap-12 pl-4'>
          <Image source={require('../../assets/images/home.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/video.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/market.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/bell.png')} className="w-8 h-8"/>
          <Image source={require('../../assets/images/profilePic.png')} className="w-8 h-8 rounded-full "/>
        </StyledView>
    </StyledView>
  )
}       