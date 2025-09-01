import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { View } from 'react-native';
import { FieldItem } from '../../components/setting/FieldItem';
import { useBottomModal } from '../../providers/useBottomModal';
import { AddFieldForm } from '../../components/setting/AddFieldForm';

type MatchFieldScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MatchField'
>;

interface Props {
  navigation: MatchFieldScreenNavigationProp;
}

export default function MatchField({ navigation }: Props) {
  const { showBottomModal } = useBottomModal();
  return (
    <Layout
      safeView={false}
      bottomBtnText="Tambah Lapangan"
      showBottomBtn={true}
      onPressBtn={() => showBottomModal(<AddFieldForm />, 500)}
    >
      <Header title="Lapangan" onPress={() => navigation.goBack()} />
      <View className="flex-1 p-5">
        <FieldItem
          onDelete={() => {}}
          onEdit={() => {}}
          onMap={() => {}}
          title="MBS GOR"
          address="7977+VWH, Jongke Tengah, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55285"
        />
      </View>
    </Layout>
  );
}
