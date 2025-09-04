import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { WelcomeCard } from '../components/home/WelcomeCard';
import { Layout } from '../components/common/Layout';
import { Menu } from '../components/home/Menu';
import { Banner } from '../components/home/Banner';
import { ImageSourcePropType } from 'react-native';

// Assets
import WhatsApp from '../assets/icons/whatsapp.png';
import Contact from '../assets/icons/contact.png';
import Register from '../assets/icons/register-color.png';
import Attendance from '../assets/icons/attendance.png';
import SportNet from '../assets/icons/sport-net.png';
import Payment from '../assets/icons/payment.png';
import History from '../assets/icons/history-color.png';
import Setting from '../assets/icons/setting-color.png';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export interface IHomeMenu {
  name: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const MENU: IHomeMenu[] = [
    {
      name: 'Buat Pesan',
      image: WhatsApp,
      onPress: () => {},
    },
    {
      name: 'Kontak Member',
      image: Contact,
      onPress: () => {},
    },
    {
      name: 'Daftar Peserta',
      image: Register,
      onPress: () => navigation.navigate('Register'),
    },
    {
      name: 'Konfirmasi Partisipasi',
      image: Attendance,
      onPress: () => {},
    },
    {
      name: 'Bertanding',
      image: SportNet,
      onPress: () => {},
    },
    {
      name: 'Pembayaran',
      image: Payment,
      onPress: () => {},
    },
    {
      name: 'Riwayat',
      image: History,
      onPress: () => {},
    },
    {
      name: 'Pengaturan',
      image: Setting,
      onPress: () => {},
    },
  ];
  return (
    <Layout>
      <WelcomeCard onCreateMatch={() => navigation.push('Matches')} />
      <Menu menu={MENU} />
      <Banner />
    </Layout>
  );
};

export default HomeScreen;
