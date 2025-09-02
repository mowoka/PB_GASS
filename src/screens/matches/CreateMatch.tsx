import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { View } from 'react-native';
import { InputDatePicker } from '../../components/common/InputDatePicker';
import { BottomModal } from '../../components/common/BottomModal';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { Calendar } from '../../components/common/Calendar';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateMatch'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function CreateMatchScreen({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      height={450}
      modalChildren={<Calendar />}
    >
      <Layout
        safeView={false}
        showBottomBtn={true}
        bottomBtnText="Simpan"
        onPressBtn={() => {}}
      >
        <Header title="Buat Pertandingan" onPress={() => navigation.goBack()} />
        <View className="flex-1 p-5">
          <InputDatePicker
            label="Tanggal Pertandingan"
            value="20 Agustus 2025"
            onPress={openModal}
          />
        </View>
      </Layout>
    </BottomModal>
  );
}
