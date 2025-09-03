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
import { ParticipanInput } from '../../components/match/ParticipanInput';
import { AddParticipantForm } from '../../components/match/AddParticipantForm';

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
    bottomModalHeight,
    openBottomMenu,
    handleSelectField,
    handleSelectDate,
    addParticipant,
    deleteParticipant,
  } = useCreateMatchHooks({
    openModal,
  });

  return (
    <BottomModal
      ref={bottomSheetModalRef}
      height={bottomModalHeight}
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
          {bottomMenu === 'participant' && (
            <AddParticipantForm
              onSave={form => {
                addParticipant(form);
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
          <ParticipanInput
            inputClass="mt-5"
            label="Partisipasi"
            onAddParticipant={() => openBottomMenu('participant')}
            participants={match.participants}
            onDeleteParticipant={deleteParticipant}
          />
        </View>
      </Layout>
    </BottomModal>
  );
}
