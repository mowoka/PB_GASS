import { Layout } from '../../components/common/Layout';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '../../components/common/Header';
import { View } from 'react-native';
import { InputButton } from '../../components/common/InputButton';
import { BottomModal } from '../../components/common/BottomModal';
import { useBottomModalHooks } from '../../hooks/common/useBottomModal';
import { Calendar } from '../../components/common/Calendar';
import { InputTimePicker } from '../../components/common/InputTimePicker';
import { useCreateMatchHooks } from '../../hooks/matches/useCreateMatch';
import { FieldOptions } from '../../components/common/FieldOptions';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateMatch'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function CreateMatchScreen({ navigation }: Props) {
  const { openModal, closeModal, bottomSheetModalRef } = useBottomModalHooks();
  const {
    match,
    fields,
    bottomMenu,
    openBottomMenu,
    handleSelectField,
    handleSelectDate,
  } = useCreateMatchHooks({
    openModal,
  });

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      height={450}
      modalChildren={
        <>
          {bottomMenu === 'calendar' && (
            <Calendar
              onPress={value => {
                if (value === undefined) return;
                handleSelectDate(value);
                closeModal();
              }}
            />
          )}
          {bottomMenu === 'field' && (
            <FieldOptions
              options={fields}
              onPress={value => {
                handleSelectField(value);
                closeModal();
              }}
            />
          )}
        </>
      }
    >
      <Layout
        safeView={false}
        showBottomBtn={true}
        bottomBtnText="Simpan"
        onPressBtn={() => {}}
      >
        <Header title="Buat Pertandingan" onPress={() => navigation.goBack()} />
        <View className="flex-1 p-5">
          <InputButton
            label="Tanggal Pertandingan"
            value={match.date}
            onPress={() => openBottomMenu('calendar')}
            placeholder="Pilih Tanggal Pertandingan"
          />
          <InputTimePicker inputClass="mt-5" />
          <InputButton
            inputClass="mt-5"
            label="Tempat Pertandingan"
            value={match.field.name}
            placeholder="Pilih Tempat Pertandingan"
            onPress={() => openBottomMenu('field')}
          />
        </View>
      </Layout>
    </BottomModal>
  );
}
