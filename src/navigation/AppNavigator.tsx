import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CurvedBottomBarNavigator from './CurvedBottomBarNavigator';
import CreateMatchScreen from '../screens/CreateMatch';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Matches from '../screens/Matches';
import AccountSetting from '../screens/settings/AccountSetting';

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
          name="Matches"
          component={Matches}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateMatch"
          component={CreateMatchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountSetting"
          component={AccountSetting}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
