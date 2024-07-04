import React from 'react';
import GiphySearch from '../screens/giphySearch';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {color} from '../assets/global_style/colors';

const Stack = createNativeStackNavigator();

const NavigatorRoute: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerTintColor: color.white,
        headerStyle: {backgroundColor: color.transparent},
      }}>
      <Stack.Screen
        name="Search"
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={GiphySearch}
      />
    </Stack.Navigator>
  );
};

export default NavigatorRoute;
