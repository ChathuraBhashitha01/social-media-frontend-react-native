import { View, Image, ScrollView,Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import { TextInput } from 'react-native-paper';

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);

export default function HomePage() {
  return (
    <ScrollView className=' bg-black'>
      <StyledView className='flex flex-row bg-[#303030] h-20 border-b border-black  '>
        <Image source={require('../../assets/images/profilePic.png')} className="w-12 h-12 rounded-full mt-3 ml-3"/>
        <TextInput label="What's on your mind?" textColor='white' right={<TextInput.Icon icon="search"/>} className="w-[65%] rounded-full border-white border-2 bg-transparent ml-4 mt-3 mb-3"/>
        <Image source={require('../../assets/images/image-.png')} className="w-6 h-8 rounded-full mt-5 ml-4"/>
      </StyledView>

      <StyledView className='bg-[#303030] h-auto border-b border-black '>
        <ScrollView horizontal>
          <StyledView className=' bg-[#3b3a3a]  w-[25%] h-[160px] rounded-lg'>
            <Image source={require('../../assets/images/profilePic.png')} className=" w-[100%] h-[100px]  "/>
          </StyledView>

          <StyledView className=' bg-[#3b3a3a]  w-[25%] h-[160px] rounded-lg'>
            <Image source={require('../../assets/images/profilePic.png')} className=" w-[100%] h-[100px]  "/>
          </StyledView>
        </ScrollView>
      </StyledView>

      <StyledView className='bg-black h-auto'>
          <StyledView className='border-b border-black bg-[#303030]  w-[100%] h-auto '>
            <StyledView className='flex flex-row'>
            <Image source={require('../../assets/images/profilePic.png')} className="w-10 h-10 rounded-full mt-3 ml-2"/>
            <Text className="text-xl text-white font-bold ml-3 mt-4 ">Bhashitha Wickramasinghe</Text>
              <Image source={require('../../assets/images/more.png')} className="w-8 h-8 mt-4 mr-2 ml-4"/>
              <Image source={require('../../assets/images/reject.png')} className="w-8 h-8 mt-4"/>
            </StyledView>
            <Text className="text-lg text-white font-light mr-20  ml-4 mt-2 mb-2 w-[90%] ">Bhashitha Wickramasinghe update his Profile Picture</Text>
            <Image source={require('../../assets/images/profilePic.png')} className=" w-[100%] h-[400px]"/>

            <StyledView className='flex flex-row mb-5 mt-5'>
              <Image source={require('../../assets/images/like.png')} className="w-6 h-6 rounded-full mt-3 ml-4"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Like</Text>

              <Image source={require('../../assets/images/chat.png')} className="w-6 h-6 rounded-full mt-3 ml-6"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Comment</Text>

              <Image source={require('../../assets/images/whatsapp.png')} className="w-6 h-6 rounded-full mt-3 ml-6"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Send</Text>

              <Image source={require('../../assets/images/share.png')} className="w-6 h-6 rounded-full mt-3 ml-6"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Share</Text>
            </StyledView>
          </StyledView>
          <StyledView className='border-b border-black bg-[#303030]  w-[100%] h-auto '>
            <StyledView className='flex flex-row'>
            <Image source={require('../../assets/images/profilePic.png')} className="w-10 h-10 rounded-full mt-3 ml-2"/>
            <Text className="text-xl text-white font-bold ml-3 mt-4 ">Bhashitha Wickramasinghe</Text>
              <Image source={require('../../assets/images/more.png')} className="w-8 h-8 mt-4 mr-2 ml-4"/>
              <Image source={require('../../assets/images/reject.png')} className="w-8 h-8 mt-4"/>
            </StyledView>
            <Text className="text-lg text-white font-light mr-20  ml-4 mt-2 mb-2 w-[90%] ">Bhashitha Wickramasinghe update his Profile Picture</Text>
            <Image source={require('../../assets/images/profilePic.png')} className=" w-[100%] h-[400px]"/>

            <StyledView className='flex flex-row mb-5 mt-5'>
              <Image source={require('../../assets/images/like.png')} className="w-6 h-6 rounded-full mt-3 ml-4"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Like</Text>

              <Image source={require('../../assets/images/chat.png')} className="w-6 h-6 rounded-full mt-3 ml-6"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Comment</Text>

              <Image source={require('../../assets/images/whatsapp.png')} className="w-6 h-6 rounded-full mt-3 ml-6"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Send</Text>

              <Image source={require('../../assets/images/share.png')} className="w-6 h-6 rounded-full mt-3 ml-6"/>
              <Text className="text-sm text-white font-light ml-2 mt-4 ">Share</Text>
            </StyledView>
          </StyledView>
      </StyledView>
    </ScrollView>
  )
}