import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




// import file 

import Home from '@/src/Home';
import Login from '@/src/Login';
import Log from '@/src/Log';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Log">
        <Stack.Screen
          name="Log"
          component={Log}
          options={{headerShown:false}}
        />
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

