import React from 'react';
import {
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import HomeScreen from '../screens/Home';
import RegisterScreen from '../screens/register/Register';
import SettingsScreen from '../screens/settings/Settings';
import Home from '../assets/icons/home.png';
import HomeFocus from '../assets/icons/home-focused.png';
import Register from '../assets/icons/register.png';
import RegisterFocus from '../assets/icons/register-focused.png';
import History from '../assets/icons/history.png';
import HistoryFocus from '../assets/icons/history-focused.png';
import Settings from '../assets/icons/settings.png';
import SettingsFocus from '../assets/icons/settings-focused.png';
import Racket from '../assets/icons/racket.png';
import { SHADOW_STYLES } from '../utils/constants';
import Matches from '../screens/matches/Matches';

interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
}

const CurvedBottomBarNavigator: React.FC = () => {
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
      case 'Matches':
        icon = selectedTab === 'Matches' ? HistoryFocus : History;
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
  }: TabBarProps) => (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.tabbarItem}
    >
      {_renderIcon(routeName, _selectedTab)}
    </TouchableOpacity>
  );

  return (
    <CurvedBottomBar.Navigator
      type="UP"
      style={styles.bottomBar}
      shadowStyle={styles.shadow}
      height={60}
      circleWidth={80}
      bgColor="white"
      initialRouteName="Home"
      borderTopLeftRight
      width={undefined}
      id="curved-bottom-bar"
      borderColor="#E0E0E0"
      borderWidth={1}
      circlePosition="center"
      screenListeners={undefined}
      screenOptions={{ headerShow: false }}
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
        name="Matches"
        component={Matches}
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
  );
};

const styles = StyleSheet.create({
  shadow: SHADOW_STYLES.tabBar,
  button: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#D84040',
    width: '100%',
    borderRadius: 30,
  },
  bottomBar: {
    marginBottom: 0,
    padding: 0,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 18,
    ...SHADOW_STYLES.button,
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

export default CurvedBottomBarNavigator;
