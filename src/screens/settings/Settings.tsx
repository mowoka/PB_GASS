import { Layout } from '../../components/common/Layout';
import { Header } from '../../components/common/Header';
import { View } from 'react-native';
import { MenuItem } from '../../components/setting/MenuItem';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AccountSettingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

interface Props {
  navigation: AccountSettingScreenNavigationProp;
}

export default function SettingScreen({ navigation }: Props) {
  return (
    <Layout safeView={false}>
      <Header title="Pengaturan" hideBackButton={true} />
      <View className="flex-1 p-5 bg-white">
        <MenuItem
          title="Profil Akun"
          onPress={() => navigation.push('AccountSetting')}
        />
        <MenuItem title="Lapangan Pertandingan" onPress={() => {}} />
        <MenuItem title="Level Pemain" onPress={() => {}} />
      </View>
    </Layout>
  );
}
