import { View,Image } from 'react-native'
import {Button, Text } from 'react-native-paper';
import React from 'react'
import { styled } from 'nativewind';

const StyledView = styled(View);

export default function Profile() {
  return (
    <View className='h-[100%] bg-black relative'>
      <StyledView className='bg-[#303030] h-[8%] flex flex-row '>
        <Image source={require('../../assets/images/back.png')} className="w-6 h-8 mt-6 ml-4 "/>
        <Text className="text-lg text-white font-semibold mr-20 mt-6 ml-4 ">Bhashitha Wickramasinghe</Text>
        <Image source={require('../../assets/images/search.png')} className="w-6 h-6 mt-7 "/>
      </StyledView>

      <StyledView className='bg-[#303030] h-auto border-b border-black p-2'>
        <Image source={require('../../assets/images/profilePic.png')} className=" h-[200px] "/>
        <Image source={require('../../assets/images/profilePic.png')} className="w-[170px] h-[170px] rounded-full ml-2 absolute left-2 top-16 border-4 border-black "/>
        <Text className="text-2xl text-white font-bold mr-20 mt-12 ml-4 w-[90%] ">Bhashitha Wickramasinghe</Text>
        <Text className="text-sm text-white font-bold mr-20 mt-1 ml-4 ">2.4k friends</Text>
        <Text className="text-xl text-white font-light mr-20 mt-1 ml-4 w-[90%]">Passionate about creativity and design, I love bringing ideas to life through art.</Text>
        <StyledView className='flex flex-row mt-2 mb-3'>
            <Button mode="contained" onPress={() => console.log('Pressed')} className='w-[35%] bg-blue-500 rounded-lg ml-3 '>Add to story</Button>
            <Button mode="contained" onPress={() => console.log('Pressed')} className='w-[35%] bg-gray-500 rounded-lg ml-3 '>Edit profile</Button>
            <Button mode="contained" onPress={() => console.log('Pressed')} className='w-[15%] bg-gray-500 rounded-lg ml-3 '>...</Button>
        </StyledView>
      </StyledView>
    
        <StyledView className='bg-[#303030] h-auto '>
            <StyledView className='bg-[#303030] h-auto flex flex-row '>
                <Button onPress={() => console.log('Pressed')} className='text-white ml-2 '>Posts</Button>
                <Button onPress={() => console.log('Pressed')}>Posts</Button>
                <Button onPress={() => console.log('Pressed')}>Posts</Button>
            </StyledView>

            <Text className="text-lg text-white font-bold mr-20 mt-1 ml-4 ">Details</Text>

        </StyledView>
    </View>
  )
}