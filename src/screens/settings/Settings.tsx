import { Layout } from '../../components/common/Layout';
import { Header } from '../../components/common/Header';
import { Text, View } from 'react-native';
import { MenuItem } from '../../components/setting/MenuItem';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { APK_VERSION } from '../../utils/constants';

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
      <View className="flex-1 px-5 pt-6 pb-5 bg-gray-50">
        <MenuItem
          title="Profil Akun"
          description="Kelola informasi profil Anda"
          iconType="profile"
          onPress={() => navigation.push('AccountSetting')}
        />
        <MenuItem
          title="Lapangan Pertandingan"
          description="Atur lokasi dan detail lapangan"
          iconType="field"
          onPress={() => navigation.push('MatchField')}
        />
        <MenuItem
          title="Level Pemain"
          description="Tentukan kategori skill pemain"
          iconType="level"
          onPress={() => navigation.push('PlayerLevel')}
        />
        <View className="w-full flex justify-center items-center mt-5">
          <Text className="font-roboto-regular text-gray-400">
            Version {APK_VERSION}
          </Text>
        </View>
      </View>
    </Layout>
  );
}
