import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {List, Form} from '../pages';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'list'} component={List} />
        <Stack.Screen name={'form'} component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
