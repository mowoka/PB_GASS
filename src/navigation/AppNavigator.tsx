import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CurvedBottomBarNavigator from './CurvedBottomBarNavigator';
import CreateMatchScreen from '../screens/matches/CreateMatch';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Matches from '../screens/matches/Matches';
import AccountSetting from '../screens/settings/AccountSetting';
import MatchField from '../screens/settings/MatchField';
import PlayerLevel from '../screens/settings/PlayerLevel';
import { MatchDetailScreen } from '../screens/matches/MatchDetail';
import AddParticipant from '../screens/register/AddPartisicipant';
import Attendence from '../screens/attendence/Attendence';
import ConfirmAttendance from '../screens/attendence/ConfirmAttendance';
import Payment from '../screens/payment/Payment';
import ConfirmPayment from '../screens/payment/ConfirmPayment';

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
          name="MatchDetail"
          component={MatchDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountSetting"
          component={AccountSetting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MatchField"
          component={MatchField}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayerLevel"
          component={PlayerLevel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddParticipant"
          component={AddParticipant}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Attendance"
          component={Attendence}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmAttendance"
          component={ConfirmAttendance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmPayment"
          component={ConfirmPayment}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
