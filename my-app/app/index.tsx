import { View, Text, Image,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Input,InputField} from '@gluestack-ui/themed';


export default function index() {
return (
    <View>
        <Image source={require('../assets/images/fb-login.png')} style={styles.imgStyle}/>
        
        <Input variant="underlined" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField
              placeholder='user name'
          />
        </Input>

        <Input variant="underlined" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField
              placeholder='password'
          />
        </Input>
      
    </View>
    )
}
    
const styles=StyleSheet.create({
    imgStyle:{
        width:392
    },
    input:{
        height:40,
        width:200,
        borderWidth:1,
        padding:10
    },
});