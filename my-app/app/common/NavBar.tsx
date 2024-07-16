import { View, Image } from 'react-native'
import React from 'react'
import { List, MD3Colors, Text } from 'react-native-paper';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function NavBar() {
  return (
    <View className ='bg-[#303030] h-[18%]'>
        <StyledView className='flex flex-row gap-5 mt-5 ml-2 mb-6'>
          <Text className="text-3xl text-white font-bold mr-16">facebook</Text>
          <Image source={require('../../assets/images/add.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/search.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/messenger.png')} className="w-8 h-8 "/>
        </StyledView>

        <StyledView className='flex flex-row gap-10 ml-[0.5px]'>
          <Image source={require('../../assets/images/home.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/video.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/market.png')} className="w-8 h-8 "/>
          <Image source={require('../../assets/images/bell.png')} className="w-8 h-8"/>
          <Image source={require('../../assets/images/home.png')} className="w-8 h-8 "/>
        </StyledView>
    </View>
  )
}       