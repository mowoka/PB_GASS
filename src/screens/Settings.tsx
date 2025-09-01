import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { View } from 'react-native';
import { MenuItem } from '../components/setting/MenuItem';

export default function SettingScreen() {
  return (
    <Layout safeView={false}>
      <Header title="Pengaturan" hideBackButton={true} />
      <View className="flex-1 p-5 bg-white">
        <MenuItem title="Profile Akun" onPress={() => {}} />
        <MenuItem title="Lapangan Pertandingan" onPress={() => {}} />
        <MenuItem title="Level Pemain" onPress={() => {}} />
        <MenuItem title="Level Pemain" onPress={() => {}} />
      </View>
    </Layout>
  );
}
