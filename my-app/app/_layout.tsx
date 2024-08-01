import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="/page/signin_frm" options={{headerShown:false}}/> 
      <Stack.Screen name="/page/HomePage" options={{headerShown: false }}/> 
      <Stack.Screen name="/page/Notification" options={{headerShown:false}}/> 
      <Stack.Screen name="/page/Video" options={{headerShown:false}}/> 
      <Stack.Screen name="/page/Market" options={{headerShown:false}}/> 
      <Stack.Screen name="/page/Menu" options={{headerShown:false}}/> 
      <Stack.Screen name="/page/Profile" options={{headerShown:false}}/> 
    </Stack>

  );
}

