import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { WelcomeCard } from '../components/home/WelcomeCard';
import { Layout } from '../components/Layout';
import { Menu } from '../components/home/Menu';
import { Banner } from '../components/home/Banner';

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
      <Banner />
      <Menu />
    </Layout>
  );
};

export default HomeScreen;
