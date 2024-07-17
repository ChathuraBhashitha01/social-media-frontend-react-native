import { View, Image, ScrollView } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import { TextInput } from 'react-native-paper';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);

export default function HomePage() {
  return (
    <View className='h-[80%] bg-black'>
      <StyledView className='flex flex-row bg-[#303030] h-[12%] border-b border-black  '>
        <Image source={require('../../assets/images/profilePic.png')} className="w-12 h-12 rounded-full mt-3 ml-3"/>
        <TextInput label="What's on your mind?" textColor='white' right={<TextInput.Icon icon="search"/>} className="w-[65%] rounded-full border-white border-2 bg-transparent ml-4 mt-3 mb-3"/>
        <Image source={require('../../assets/images/image-.png')} className="w-6 h-8 rounded-full mt-5 ml-4"/>
      </StyledView>

      <StyledScrollView className='bg-[#303030] h-[25%]'>

      </StyledScrollView>
    </View>
  )
}