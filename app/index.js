import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




// import file 

import Home from '@/src/Home';
import Login from '@/src/Login';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

