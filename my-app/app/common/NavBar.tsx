import { View, Image,TouchableOpacity } from 'react-native'
import {Link,router } from 'expo-router';
import React from 'react'
import {Text } from 'react-native-paper';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function NavBar() {
  return (
    <StyledView className ='bg-[#303030] h-auto border-b border-white p-2'>
        <StyledView className='flex flex-row gap-5 mt-5 mb-5 pl-3'>
          <Text className="text-3xl text-white font-bold mr-20 ">facebook</Text>
          <Image source={require('../../assets/images/add.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/search.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/messenger.png')} className="w-8 h-8 "/>
        </StyledView>

        <StyledView className='flex flex-row gap-12 pl-4'>
          
          <TouchableOpacity onPress={()=>router.push('/page/HomePage')}>
            <Image source={require('../../assets/images/home.png')} className="w-8 h-8 "/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>router.push('/page/Video')}>
          <Image source={require('../../assets/images/video.png')} className="w-8 h-8 "/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>router.push('/page/Market')}>
          <Image source={require('../../assets/images/market.png')} className="w-8 h-8 "/>
          </TouchableOpacity>

          
         <TouchableOpacity onPress={()=>router.push('/page/Notification')}>
            <Image source={require('../../assets/images/bell.png')} className="w-8 h-8"/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>router.push('/page/Profile')} className="w-8 h-8 rounded-full">
              <Image source={require('../../assets/images/profilePic.png')} className="w-8 h-8 rounded-full " />
          </TouchableOpacity>
        </StyledView>
    </StyledView>
  )
}       