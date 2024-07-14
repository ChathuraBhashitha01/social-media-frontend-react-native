import { View, Image,StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, Button, Text } from 'react-native-paper';

export default function index() {
return (
    <View className='bg-white'>
        <Image source={require('../assets/images/fb-login.png')} style={styles.imgStyle}/>

        <TextInput className='mt-[60px] w-[90%] ml-4 bg-white' 
          label="User name"
        />
        
        <TextInput className='mt-0 w-[90%] ml-4 bg-white'
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

      <Button className='mt-[40px] w-[90%] h-[50px] ml-4 font-bold rounded-none' mode="contained" buttonColor='blue' onPress={() => console.log('Pressed')}>
        <Text className="text-xl text-white font-bold">Log in</Text>
      </Button>

      <Text className='text-center text-lg text-blue-500' variant="bodyLarge">Forgot Password?</Text>

      <Text className='text-center mt-7 text-xs'  variant="bodyLarge">-----------------------------------------------OR---------------------------------------------</Text>

      <Button className='mt-[50px] w-[90%] h-[50px] ml-4 rounded-none text-6xl'  mode="contained" buttonColor='green' onPress={() => console.log('Pressed')} >
        <Text className="text-xl text-white font-bold ">Create New Facebook Account</Text>
      </Button>

    </View>
    )
}
    
const styles=StyleSheet.create({
    imgStyle:{
        width:392
    },
  
});