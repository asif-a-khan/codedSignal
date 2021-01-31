import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';


const Stack = createStackNavigator()
const globalScreenOptions = {
  headerStyle: { backgroundColor:  '#2C6BED'},
  headerTitleStyle: { color: 'white' },
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen 
        name='Login' 
        component={LoginScreen}
        // options={{
        //   title: "Let's Sign Up"
        // }}
        />
        <Stack.Screen 
        name='Register' 
        component={RegisterScreen}
        // options={{
        //   title: "Let's Sign Up"
        // }}
        />
        <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        // options={{
        //   title: "Let's Sign Up"
        // }}
        />
        <Stack.Screen 
        name='AddChat' 
        component={AddChatScreen}
        // options={{
        //   title: "Let's Sign Up"
        // }}
        />
        <Stack.Screen 
        name='Chat' 
        component={ChatScreen}
        // options={{
        //   title: "Let's Sign Up"
        // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123456',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})
