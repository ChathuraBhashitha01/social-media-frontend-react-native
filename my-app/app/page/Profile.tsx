import { View,Image, ScrollView, TouchableOpacity } from 'react-native'
import {Button, Text } from 'react-native-paper';
import React from 'react'
import { styled } from 'nativewind';
import { TextInput } from 'react-native-paper';

const StyledView = styled(View);

export default function Profile() {
  return (
    <ScrollView className='h-[100%] bg-black relative'>
      <StyledView className='bg-[#303030] flex flex-row '>
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


        <StyledView className="bg-[#303030] h-auto border-b border-black">
          <ScrollView horizontal showsHorizontalScrollIndicator>
            <StyledView className="bg-[#3b3a3a] w-[100px] h-[150px] rounded-lg ml-2 mt-2 mb-2">
              
            </StyledView>
            <StyledView className="bg-[#3b3a3a] w-[100px] h-[150px] rounded-lg ml-2  mt-2 mb-2">
              <Image
                source={require('../../assets/images/profilePic.png')}
                className="w-[100%] h-[100%] rounded-xl"
              />
            </StyledView>
            <StyledView className="bg-[#3b3a3a] w-[100px] h-[150px] rounded-lg ml-2  mt-2 mb-2">
              <Image
                source={require('../../assets/images/profilePic.png')}
                className="w-w-[100%] h-[100%] rounded-xl "
              />
            </StyledView>
          </ScrollView>
        </StyledView>

        <StyledView className='flex flex-row bg-[#303030] h-20 border-b border-black  mt-3 mb-3'>
          <TouchableOpacity onPress={()=>router.push('/page/Profile')} className=" rounded-full">
              <Image source={require('../../assets/images/profilePic.png')} className="w-12 h-12 rounded-full mt-3 ml-3" />
          </TouchableOpacity>
          <TextInput label="What's on your mind?" textColor='white' right={<TextInput.Icon icon="search"/>} className="w-[65%] rounded-full border-white border-2 bg-transparent ml-4 mt-3 mb-3"/>

          <TouchableOpacity onPress={()=>router.push('/common/Camera')} className=" rounded-full">
            <Image source={require('../../assets/images/image-.png')} className="w-6 h-8 rounded-full mt-5 ml-4"/>
          </TouchableOpacity>
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