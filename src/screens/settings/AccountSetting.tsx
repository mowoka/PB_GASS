import { View } from 'react-native';
import { Layout } from '../../components/common/Layout';
import { Header } from '../../components/common/Header';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Input } from '../../components/common/Input';
import { useAccountSetting } from '../../hooks/settings/useAccountSetting';

type AccountSettingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AccountSetting'
>;

interface Props {
  navigation: AccountSettingScreenNavigationProp;
}

export default function AccountSetting({ navigation }: Props) {
  const { name, handleUpdateName } = useAccountSetting();

  return (
    <Layout
      safeView={false}
      showBottomBtn={true}
      bottomBtnText="Simpan Perubahan"
      onPressBtn={() => navigation.goBack()}
    >
      <Header title="Profil Akun" onPress={() => navigation.goBack()} />
      <View className="flex-1 bg-white p-5">
        <Input
          label="Nama"
          placeholder="Input Nama"
          value={name}
          onChange={handleUpdateName}
        />
      </View>
    </Layout>
  );
}
