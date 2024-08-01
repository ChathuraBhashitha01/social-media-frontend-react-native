import { View, Image, Text } from 'react-native'
import React from 'react'
import NavBar from '../common/NavBar';
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function Notification() {
  return (
    <StyledView>
      <NavBar/>
      <StyledView className=' bg-[#303030] w-[100%] h-[100%]'>
        <StyledView className='flex  flex-row mt-4'>
         <Image source={require('../../assets/images/profilePic.png')} className="w-16 h-16 rounded-full mt-3 ml-3" />
         <Text className="text-lg text-white font-light ml-6 mt-4 w-[60%] ">Your Profile Picture update Successfully</Text>
        </StyledView>

        <StyledView className='flex  flex-row mt-4'>
         <Image source={require('../../assets/images/profilePic.png')} className="w-16 h-16 rounded-full mt-3 ml-3" />
         <Text className="text-lg text-white font-light ml-6 mt-4 w-[60%] ">Your Cover Picture update Successfully</Text>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}