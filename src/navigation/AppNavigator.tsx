import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CurvedBottomBarNavigator from './CurvedBottomBarNavigator';
import CreateMatchScreen from '../screens/CreateMatch';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={CurvedBottomBarNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateMatch"
          component={CreateMatchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
