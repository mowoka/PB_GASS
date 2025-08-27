import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { WelcomeCard } from '../components/home/WelcomeCard';
import { Layout } from '../components/Layout';
import { Menu } from '../components/home/Menu';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = () => {
  return (
    <Layout>
      <WelcomeCard />
      <Menu />
    </Layout>
  );
};

export default HomeScreen;
