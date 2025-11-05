import { Text, View } from 'react-native';
import { Layout } from '../../components/common/Layout';
import { Header } from '../../components/common/Header';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Input } from '../../components/common/Input';
import { useAccountSettingHooks } from '../../hooks/settings/useAccountSetting';

type AccountSettingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AccountSetting'
>;

interface Props {
  navigation: AccountSettingScreenNavigationProp;
}

export default function AccountSetting({ navigation }: Props) {
  const { name, handleUpdateName } = useAccountSettingHooks();

  return (
    <Layout
      safeView={false}
      showBottomBtn={true}
      bottomBtnText="Simpan Perubahan"
      onPressBtn={() => navigation.goBack()}
    >
      <Header title="Profil Akun" onPress={() => navigation.goBack()} />
      <View className="flex-1 bg-gray-50 px-5 pt-6">
        <View
          className="bg-white rounded-2xl p-5 border border-gray-100"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 3,
          }}
        >
          <View className="flex flex-row items-center mb-4">
            <View className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center mr-3">
              <Text className="text-2xl">👤</Text>
            </View>
            <Text className="font-roboto-bold text-lg text-gray-800">
              Informasi Profil
            </Text>
          </View>
          <Input
            label="Nama"
            placeholder="Input Nama"
            value={name}
            onChange={handleUpdateName}
          />
        </View>
      </View>
    </Layout>
  );
}
