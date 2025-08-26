import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  ImageSourcePropType,
} from 'react-native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import RegisterScreen from '../screens/Register';
import HistoryScreen from '../screens/History';

// Assets
import Home from '../assets/icons/home.png';
import HomeFocus from '../assets/icons/home-focused.png';
import Register from '../assets/icons/register.png';
import RegisterFocus from '../assets/icons/register-focused.png';
import History from '../assets/icons/history.png';
import HistoryFocus from '../assets/icons/history-focused.png';
import Settings from '../assets/icons/settings.png';
import SettingsFocus from '../assets/icons/settings-focused.png';
import Racket from '../assets/icons/racket.png';

// TypeScript interfaces
interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
}

const AppNavigator: React.FC = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon: ImageSourcePropType = Home;
    const isLeftSide = ['Home', 'Register'].includes(routeName);
    switch (routeName) {
      case 'Home':
        icon = selectedTab === 'Home' ? HomeFocus : Home;
        break;
      case 'Settings':
        icon = selectedTab === 'Settings' ? SettingsFocus : Settings;
        break;
      case 'Register':
        icon = selectedTab === 'Register' ? RegisterFocus : Register;
        break;
      case 'History':
        icon = selectedTab === 'History' ? HistoryFocus : History;
        break;
    }

    return (
      <Image
        source={icon}
        width={35}
        height={35}
        resizeMode="contain"
        style={isLeftSide ? styles.iconLeft : styles.iconRight}
      />
    );
  };

  const renderTabBar = ({
    routeName,
    selectedTab: _selectedTab,
    navigate,
  }: TabBarProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, _selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <CurvedBottomBar.Navigator
        type="UP"
        style={styles.bottomBar}
        shadowStyle={styles.shadow}
        height={60}
        circleWidth={65}
        bgColor="white"
        initialRouteName="Home"
        borderTopLeftRight
        width={undefined}
        id="curved-bottom-bar"
        borderColor="#E0E0E0"
        borderWidth={1}
        circlePosition="center"
        screenListeners={undefined}
        screenOptions={{
          headerShow: false,
        }}
        defaultScreenOptions={undefined}
        backBehavior="history"
        renderCircle={() => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Image
                source={Racket}
                width={35}
                height={35}
                resizeMode="contain"
                style={styles.imgCircle}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <CurvedBottomBar.Screen
          name="Register"
          position="LEFT"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <CurvedBottomBar.Screen
          name="History"
          component={HistoryScreen}
          position="RIGHT"
          options={{ headerShown: false }}
        />
        <CurvedBottomBar.Screen
          name="Settings"
          component={SettingsScreen}
          position="RIGHT"
          options={{ headerShown: false }}
        />
      </CurvedBottomBar.Navigator>
    </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#D64545',
    width: '100%',
    borderRadius: 30,
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    width: 35,
    height: 35,
  },
  iconRight: {
    width: 30,
    height: 30,
  },
});

export default AppNavigator;
